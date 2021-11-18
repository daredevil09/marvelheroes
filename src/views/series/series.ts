export class Series {
    public category;

    activate(params, routeConfig, navigationInstruction) {
        this.category = routeConfig.settings.data;
    }
}