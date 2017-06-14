import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'DemoAppNet';
        //config.addAuthorizeStep(AuthorizeStep);
        config.map([
            {
                route: ['', 'log-in'],
                name: 'log-in',
                settings: { icon: 'user' },
                moduleId: PLATFORM.moduleName('log-in/log-in'),
                nav: true,
                title: 'Log In'
            },
            {
                route: 'home',
                name: 'home',
                settings: { icon: 'home' },
                moduleId: PLATFORM.moduleName('home/home'),
                nav: true,
                title: 'Home'
            }
        ]);

        this.router = router;
    }
}

//class AuthorizeStep implements PipelineStep {
//    public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
//        if (navigationInstruction.getAllInstructions().some(i => i.config.settings.roles.indexOf('admin') !== -1)) {
//            var isAdmin = /* insert magic here */false;
//            if (!isAdmin) {
//                return next.cancel(new Redirect('welcome'));
//            }
//        }

//        return next();
//    }
//}
