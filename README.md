# ap-tilezen-mapbox-styles
Mapbox styles for tilezen vector tile data format. Uses maki icon set for sprites.


### Usage
```javascript
import {StyleFactory, APOLLO_BRIGHT_STYLE, ZEN_STYLE} from "@apollomapping/ap-tilezen-mapbox-styles";

const styleFactory = new StyleFactory({
    tileUrl: "https://vector-osm.apollomapping.com/all/{z}/{x}/{y}.mvt",
    // resource url is the base location for your style's sprites and fonts    
    resourceUrl: "https://s3-us-west-1.amazonaws.com/osm-vector-tiles-apollomapping",
});

const myMapBoxStyle = styleFactory.createStyle(APOLLO_BRIGHT_STYLE);
```


##### Available style constant names
```
APOLLO_BRIGHT_STYLE
ZEN_STYLE
```

### Deploying and generating sprites
Sprites can be regenerated with the generate-sprites.sh bash script. It reads from the style .csv files that contain pairs of
icon names and the color to colorize the icon too.

Upload the contents of the sprites folder to a static site at this location: {your_resource_url}/sprites/

You can also use the simple deploy.sh script that you pass in your bucket name as first argument and aws profile name as second
### Deploying and generating glyphs/fonts
use: https://github.com/openmaptiles/fonts

Upload the generated fonts to your static web server at this location: {your_resource_url}/tile_fonts/
  
[todo add font generation script]