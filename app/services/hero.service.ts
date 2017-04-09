import { Injectable } from '@angular/core';

import { Hero } from "../models/hero.model";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HeroService {
    constructor(private http: Http) { }

    getHeroes() {
        return this.http.get('./app/heroes.json')
            .map((response: Response) => response.json());
    }
}