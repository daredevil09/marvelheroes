import { inject } from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
@inject(HttpClient)
export class HttpService {
    private http: HttpClient;
    constructor(http) {
        this.http = http;
        const baseUrl = 'https://gateway.marvel.com/v1/public/';
        this.http.configure(c => {
            c.withBaseUrl(baseUrl)
        })
    }

    public getData(endpoint, searchQuery?, offSet = 0) {
        const pub = '58adebe21ff3a1cd284ce2ee8a1d13a6';
        let api = `${endpoint}?apikey=${pub}&limit=100&offset=${offSet}`;
        if(searchQuery) {
            api += endpoint === 'characters' ? '&nameStartsWith=' + searchQuery: '&titleStartsWith=' + searchQuery;
        }
        return this.http.fetch(api);
    }
}