import { inject } from 'aurelia-dependency-injection';
import {HttpClient} from 'aurelia-fetch-client';
import md5 from 'crypto-js/md5';
@inject(HttpClient)
export class CharacterService {
    private http: HttpClient;
    constructor(http) {
        this.http = http;
        const baseUrl = 'https://gateway.marvel.com/v1/public/';
        this.http.configure(c => {
            c.withBaseUrl(baseUrl)
        })
    }

    public getCharacters() {
        const pub = '58adebe21ff3a1cd284ce2ee8a1d13a6';
        return this.http.fetch(`characters?apikey=${pub}`);
    }
}