import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";
export class App {
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Marvel Heroes";
    config.options.hashChange = true;
    // NOTE moduleId doesn't work with variables
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
        settings: {
          data: {
            url: "characters",
            title: "Characters",
          },
        },
      },
      {
        route: "comics",
        name: "comics",
        moduleId: PLATFORM.moduleName("views/comics/comics"),
        settings: {
          data: {
            url: "comics",
            title: "Comics",
          },
        },
      },
      {
        route: "series",
        name: "series",
        moduleId: PLATFORM.moduleName("views/series/series"),
        settings: {
          data: {
            url: "series",
            title: "Series",
          },
        },
      },
      // {
      //   route: "stories",
      //   name: "stories",
      //   moduleId: PLATFORM.moduleName("views/stories/stories"),
      //   settings: {
      //     data: {
      //       url: "stories",
      //       title: "Stories",
      //     },
      //   },
      // },
    ]);
  }
}
