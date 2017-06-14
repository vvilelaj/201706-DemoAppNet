import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Home {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }
}
