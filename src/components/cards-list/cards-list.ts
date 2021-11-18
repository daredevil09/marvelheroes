import { inject } from "aurelia-dependency-injection";
import { bindable } from "aurelia-framework";
import { HttpService } from "./../../services/http-service";

@inject(HttpService)
export class CardsList {
  @bindable category;
  public data = [];
  public searchQuery;
  public loading = true;
  private offset = 0;
  constructor(private http: HttpService) {}

  attached() {
    this.searchQuery = '';
    this.getData();
    window.addEventListener("scroll", this.scrollEvent.bind(this));
  }

  public getData(offSet?) {
    if(!offSet) {
      this.data = [];
      this.offset = 0;
    }
    this.loading = true;
    this.http
      .getData(this.category.url, this.searchQuery, offSet)
      .then((d) => {
        d.json().then((r) => {
          this.data = [...this.data, ...r.data.results];
          this.loading = false;
          this.offset = r.data.offset;
        });
      })
      .catch((e) => console.log(e));
  }

  private scrollEvent() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    if(scrolled === 1 && this.offset !== (this.data.length + 100)) {
        this.offset = this.data.length + 100;
        this.getData(this.data.length)
    }
  }

  detached() {
    this.searchQuery = '';
    window.removeEventListener('scroll', this.scrollEvent.bind(this))
  }
}
