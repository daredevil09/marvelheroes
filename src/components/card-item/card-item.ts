import {inject} from 'aurelia-framework';
import { Router } from "aurelia-router";
import { bindable } from "aurelia-framework";
@inject(Router)
export class CardItem {
  @bindable item;
  @bindable category;
  router: Router;

  constructor(router) {
    this.router = router;
  }

  public navigateToItem() {
      //NOTE navigateToRoute is not working in this case
    this.router.navigate(this.category.url + "/" + this.item.id,);
  }
}
