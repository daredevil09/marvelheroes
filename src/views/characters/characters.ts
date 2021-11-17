import { inject } from 'aurelia-dependency-injection';
import { CharacterService } from './../../services/characterService';

@inject(CharacterService)
export class Characters {
    constructor(private cs: CharacterService) {
    }
    
    attached() {
        this.cs.getCharacters()
    }
}