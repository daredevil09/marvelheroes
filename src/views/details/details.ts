import { inject } from 'aurelia-dependency-injection';
import { HttpService } from '../../services/http-service';
@inject(HttpService)
export class Details {
    public data;
    public category;
    public loading = true;
    constructor(private http: HttpService) {
    }
    activate(params, routeConfig, navigationInstruction) {
        const category = routeConfig.settings.data;
        this.category = category;
        const url = `${category.url}/${params.id}`
        this.http.getData(url).then(res => res.json()).then(d => {
            this.data = (d.data.results[0]);
            this.loading = false;
            routeConfig.navModel.setTitle(this.data.name || this.data.title)
        })
    }
}