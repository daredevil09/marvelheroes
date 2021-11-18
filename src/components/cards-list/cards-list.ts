import { inject } from "aurelia-dependency-injection";
import { bindable } from "aurelia-framework";
import { HttpService } from "./../../services/http-service";

@inject(HttpService)
export class CardsList {
  @bindable category;
  public data = [];
  public searchQuery;
  public loading = true;
  constructor(private http: HttpService) {}

  attached() {
    this.getData();
    window.addEventListener("scroll", this.scrollEvent.bind(this));
  }

  public getData(offSet?) {
    if(!offSet) {
      this.data = [];
    }
    this.loading = true;
    this.http
      .getData(this.category.url, this.searchQuery, offSet)
      .then((d) => {
        d.json().then((r) => {
          this.data = [...this.data, ...r.data.results];
          this.loading = false;
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
    if(scrolled === 1) {
        this.getData(this.data.length)
    }
  }
}
