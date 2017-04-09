import { Component, OnInit } from '@angular/core';

import { Hero } from "../../models/hero.model";
import { HeroComponent } from "./hero/hero.component";
import { HeroService } from "../../services/hero.service";

@Component({
    moduleId: module.id,
    selector: 'toh-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    directives: [HeroComponent],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        // this.heroes = this.heroService.getHeroes();
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes);
        
     }

     onSelect(hero: Hero) {
         this.selectedHero = hero;
     }
}