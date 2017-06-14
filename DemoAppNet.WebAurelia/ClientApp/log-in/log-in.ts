import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class LogIn {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    logIn() : void{
        this.router.navigate("home");
    }
}
