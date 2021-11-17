import {HttpClient} from 'aurelia-fetch-client';

export class CharacterService {
    constructor(private http: HttpClient) {

    }

    public getCharacters() {
        console.log('api will be called here')
    }
}