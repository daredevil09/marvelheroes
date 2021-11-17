import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';

@inject(Router)
export class Card {
   @bindable category;
   router: Router;

   constructor(router) {
      this.router = router;
   }

   public routeToUrl() {
      this.router.navigateToRoute(this.category.url)
   }


}