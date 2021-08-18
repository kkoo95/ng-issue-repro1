import {Injectable} from '@angular/core';
import {Comp2Module} from "./comp2";
import {Svc} from "@jojo/mylib/api";

@Injectable({
    providedIn: Comp2Module
})
export class Svc2 extends Svc {
    getName() {
        return 'svc2'
    }
}
