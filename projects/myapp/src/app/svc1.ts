import {Injectable} from '@angular/core';
import {Comp1Module} from "./comp1";
import {Svc} from "@jojo/mylib/api";

@Injectable({
    providedIn: Comp1Module
})
export class Svc1 extends Svc {
    constructor() {
        super()
    }

    getName() {
        return 'svc1'
    }
}