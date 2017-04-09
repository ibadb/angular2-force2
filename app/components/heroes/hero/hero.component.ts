import { Component, Input } from '@angular/core';

import { Hero } from "../../../models/hero.model";

@Component({
    moduleId: module.id,
    selector: 'toh-hero',
    templateUrl: 'hero.component.html'
})

export class HeroComponent {
    @Input() hero: Hero;
}