import {APOLLO_BRIGHT_STYLE, APOLLO_HYBRID_SATELLITE_STYLE, StyleFactory} from "../src/StyleFactory";
import {SATELLITE_STYLE} from "../src";

describe('style factory style creation', () => {
    test('style factory create style has correct resource urls from options', () => {
        const factory = new StyleFactory({
            tileUrl: "www.mytileservice.com/all/{z}/{x}/{y}.mvt",
            resourceUrl: "www.mytileservice.com/resources/"
        });

        const style = factory.createStyle(APOLLO_BRIGHT_STYLE);
        expect(style["sprite"]).toBe("www.mytileservice.com/resources/sprites/apollo-bright-icons")
    });

    test('style factory create style has correct resource urls from options', () => {
        const factory = new StyleFactory({
            tileUrl: "www.mytileservice.com/all/{z}/{x}/{y}.mvt",
            resourceUrl: "www.mytileservice.com/resources/",
            satelliteRasterUrl: "https://{s}.myrastertiles.com/{z}/{x}/{y}.png",

        });

        const style = factory.createStyle(SATELLITE_STYLE);
        const tileUrls = style["sources"]["dg_raster"]["tiles"];
        expect(tileUrls[0]).toBe("https://a.myrastertiles.com/{z}/{x}/{y}.png");
        expect(tileUrls[1]).toBe("https://b.myrastertiles.com/{z}/{x}/{y}.png");
        expect(tileUrls[2]).toBe("https://c.myrastertiles.com/{z}/{x}/{y}.png");
    });
});
