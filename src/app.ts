import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";
export class App {
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Marvel Heroes";
    config.options.pushState = true;
    config.map([
      {
        route: "",
        name: "home",
        moduleId: PLATFORM.moduleName("views/home/home"),
      },
      {
        route: "characters",
        name: "characters",
        moduleId: PLATFORM.moduleName("views/characters/characters"),
      },
      {
        route: "comics",
        name: "comics",
        moduleId: PLATFORM.moduleName("views/comics/comics"),
      },
      {
        route: "series",
        name: "series",
        moduleId: PLATFORM.moduleName("views/series/series"),
      },
      {
        route: "stories",
        name: "stories",
        moduleId: PLATFORM.moduleName("views/stories/stories"),
      },
    ]);
  }
}
