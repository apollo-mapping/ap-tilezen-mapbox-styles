// @flow

export const APOLLO_BRIGHT_STYLE = require('./styles/apollo-bright.json');

// the zen style is a continuation of the style by mapzen found here:
// https://github.com/mapzen/mapboxgl-vector-tiles
// (which was very incomplete and didn't work with latest mapbox verseion)
export const ZEN_STYLE = require('./styles/zen.json');

export class StyleFactory {
    tileUrl: string = "";
    resourceUrl: string = "";
    constructor (options: {tileUrl: string, resourceUrl: string}) {
        this.tileUrl = options.tileUrl;
        this.resourceUrl = options.resourceUrl;

        if (this.resourceUrl.endsWith("/") && this.resourceUrl.length > 1)
            this.resourceUrl = this.resourceUrl.substring(0, this.resourceUrl.length - 1);
    }

    createStyle(style) {
        var styleString = JSON.stringify(style);
        // real lazy way to set json template variables convert to string replace then back to json
        // creating styles is something you only do once on app start up so no performance worries
        styleString = styleString.replace(/{resource_url}/g, this.resourceUrl);
        styleString = styleString.replace(/{tile_server_xyz_url}/g, this.tileUrl);

        return JSON.parse(styleString);
    }
}