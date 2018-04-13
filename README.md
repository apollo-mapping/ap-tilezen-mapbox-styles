# ap-tilezen-mapbox-styles
Mapbox styles for tilezen vector tile data format. Uses maki icon set for sprites.


### Usage
```javascript
import {StyleFactory, APOLLO_BRIGHT_STYLE, ZEN_STYLE} from "@apollomapping/ap-tilezen-mapbox-styles";

const styleFactory = new StyleFactory({
    tileUrl: "https://your-vector-server.com/all/{z}/{x}/{y}.mvt",
    // resource url is the base location for your style's sprites and fonts    
    resourceUrl: "https://your-vector-resource-server.com",
    // localization type to use for certain labels. Pass inn ISO 639-1 two-letter language code 
    // ie "en" which turns {name} into {name:en} and defaults to {name} if nothing is passed in.
    // only used for country, region, ocean and sea labels as localization properties did not work with others
    localization: "en"
});

const myMapBoxStyle = styleFactory.createStyle(APOLLO_BRIGHT_STYLE);
```


##### Available style constant names
```
APOLLO_BRIGHT_STYLE
ZEN_STYLE
```

### Deploying and generating sprites
#### Note nvm with node 8.9 must be installed to run the sprite generation script
8.9 is required for spritezero no other version will work not 9.x not 8.6
 
Sprites can be regenerated with the generate-sprites.sh bash script. It reads from the style .csv files that contain pairs of
icon names and the color to colorize the icon too.

Upload the contents of the sprites folder to a static site at this location: {your_resource_url}/sprites/

You can also use the simple deploy.sh script that you pass in your bucket name as first argument and aws profile name as second


### Deploying and generating glyphs/fonts
use: https://github.com/openmaptiles/fonts

Upload the generated fonts to your static web server at this location: {your_resource_url}/tile_fonts/
  
[todo add font generation script]


### Shield Icons
The shield icons come from https://wiki.openstreetmap.org/wiki/Custom_Highway_Shields with slight modifications  
The license notices for the icons from the wiki state that they are in the public domain


##### Full license notice for shield icons:
This file is in the public domain because it comes from the Manual on Uniform Traffic Control Devices, sign number M1-1, 
which states specifically on page I-1 that:
Any traffic control device design or application provision contained in this Manual shall be considered to be in the 
public domain. Traffic control devices contained in this Manual shall not be protected by a patent, trademark, 
or copyright, except for the Interstate Shield and any other items owned by FHWA.
