import { inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { HttpService } from './../../services/http-service';

@inject(HttpService)
export class CardsList {
    @bindable category;
    public data;
    constructor(private http: HttpService) {
    }
    
    attached() {
        this.http.getData(this.category.url).then(d => {
            d.json().then(r => this.data = r.data.results)
        }).catch(e => console.log(e))
    }
}