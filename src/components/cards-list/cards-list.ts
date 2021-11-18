import { inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { HttpService } from './../../services/http-service';

@inject(HttpService)
export class CardsList {
    @bindable category;
    public data;
    public searchQuery;
    public loading = true;
    constructor(private http: HttpService) {
    }
    
    attached() {
        this.getData()
    }

    public getData() {
        this.loading = true;
        this.http.getData(this.category.url, this.searchQuery).then(d => {
            d.json().then(r => {
                this.data = r.data.results;
                this.loading = false;
            })
        }).catch(e => console.log(e))
    }
}