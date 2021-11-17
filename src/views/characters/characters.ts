import { inject } from 'aurelia-dependency-injection';
import { CharacterService } from './../../services/characterService';

@inject(CharacterService)
export class Characters {
    characters: any;
    constructor(private cs: CharacterService) {
    }
    
    attached() {
        this.cs.getCharacters().then(d => {
            d.json().then(r => this.characters = r.data.results)
        }).catch(e => console.log(e))
    }
}