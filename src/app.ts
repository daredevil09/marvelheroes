import { PLATFORM } from "aurelia-pal";
import { RouterConfiguration, Router } from "aurelia-router";
export class App {
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Marvel Heroes";
    config.options.hashChange = true;
    config.options.root = '#';
    // NOTE moduleId doesn't work with variables
    config.map([
      {
        route: "/",
        name: "home",
        moduleId: PLATFORM.moduleName("views/home/home"),
      },
      {
        route: "characters",
        name: "characters",
        moduleId: PLATFORM.moduleName("views/characters/characters"),
        title: "Characters",
        nav: true,
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
        title: 'Comics',
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
        title: 'Series',
        settings: {
          data: {
            url: "series",
            title: "Series",
          },
        },
      },
      {
        route: "characters/:id",
        name: "details",
        moduleId: PLATFORM.moduleName("views/details/details"),
        settings: {
          data: {
            url: "characters",
            title: "Characters",
          },
        },
      },
      {
        route: "comics/:id",
        name: "details",
        moduleId: PLATFORM.moduleName("views/details/details"),
        settings: {
          data: {
            url: "comics",
            title: "Comics",
          },
        },
      },
      {
        route: "series/:id",
        name: "details",
        moduleId: PLATFORM.moduleName("views/details/details"),
        settings: {
          data: {
            url: "series",
            title: "Series",
          },
        },
      },
    ]);
  }
}
