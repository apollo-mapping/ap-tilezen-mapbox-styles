// @flow
export const APOLLO_BRIGHT_STYLE = require('./styles/apollo-bright.json');
export const TONER_STYLE = require('./styles/toner.json');
export const SATELLITE_STYLE = require('./styles/satellite-raster.json');
export const APOLLO_HYBRID_SATELLITE_STYLE = require('./styles/apollo-hybrid-satellite.json');

// the zen style is a continuation of the style by mapzen found here:
// https://github.com/mapzen/mapboxgl-vector-tiles
// (which was very incomplete and didn't work with latest mapbox verseion)
export const ZEN_STYLE = require('./styles/zen.json');

if(!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
	var subjectString = this.toString();
	if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position
	    || position > subjectString.length) {
	   position = subjectString.length;
	}
	position -= searchString.length;
	var lastIndex = subjectString.lastIndexOf(searchString, position);
	return lastIndex !== -1 && lastIndex === position;
    }
}

export class StyleFactory {
    tileUrl: string = "";
    resourceUrl: string = "";
    satelliteRasterUrl: string = "";
    localization: string = "";

    constructor(options: {
        tileUrl: string,
        resourceUrl: string,
        localization: string,
        satelliteRasterUrl: string
    }) {
        this.satelliteRasterUrl = options.satelliteRasterUrl;
        this.tileUrl = options.tileUrl;
        this.resourceUrl = options.resourceUrl;
        this.localization = options.localization;

        if (this.resourceUrl.endsWith("/") && this.resourceUrl.length > 1)
            this.resourceUrl = this.resourceUrl.substring(0, this.resourceUrl.length - 1);
    }

    createStyle(style: {}) {
        var styleString = JSON.stringify(style);

        // real lazy way to set json template variables convert to string replace then back to json
        // creating styles is something you only do once on app start up so no performance worries
        styleString = styleString.replace(/{resource_url}/g, this.resourceUrl);

        const vectorUrl = this.createTileUrl(this.tileUrl);
        styleString = styleString.replace(/\["{tile_server_xyz_url}"]/g, vectorUrl);

        const rasterUrl = this.createTileUrl(this.satelliteRasterUrl);
        styleString = styleString.replace(/\["{satellite_raster_xyz_url}"]/g, rasterUrl);

        var localizationField = "{name}";
        if (this.localization && this.localization.length > 0)
            localizationField = "{name:" + this.localization + "}";

        styleString = styleString.replace(/{localization_name}/g, localizationField);

        return JSON.parse(styleString);
    }

    createTileUrl(baseTileUrl: string) {
        // for seperate a./b./c. tile service urls that are used to get around
        // browser max request limit mapbox won't do this itself for some reason unless
        // a special mapbox style url
        if (baseTileUrl && baseTileUrl.includes("{s}")) {
            const tileUrls = [];
            for (let serverNumOn of ["a", "b", "c"])
                tileUrls.push(baseTileUrl.replace("{s}", serverNumOn));

            return JSON.stringify(tileUrls);
        }

        return "[\"" + baseTileUrl + "\"]";
    }
}
