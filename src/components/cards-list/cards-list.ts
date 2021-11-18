import { inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { HttpService } from './../../services/http-service';

@inject(HttpService)
export class CardsList {
    @bindable category;
    public data;
    public searchQuery;
    constructor(private http: HttpService) {
    }
    
    attached() {
        this.getData()
    }

    public getData() {
        this.http.getData(this.category.url, this.searchQuery).then(d => {
            d.json().then(r => this.data = r.data.results)
        }).catch(e => console.log(e))
    }
}