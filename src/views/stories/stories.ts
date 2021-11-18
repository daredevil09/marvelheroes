export class Stories {
    public category;

    activate(params, routeConfig, navigationInstruction) {
        this.category = routeConfig.settings.data;
    }
}