# ap-tilezen-mapbox-styles
Three mapbox styles for tilezen/mapzen vector data format. The styles are made for mapbox style spec version 8 and tested in mapbox GL JS v0.44.1. 
Uses maki icon set for most sprites. 

There are two ways to use these styles
- use the StyleFactory class which will setup the style for you with your settings (Usage below) <sub><sup>[todo npm publish package]</sup></sub> 
- or just grab the style's json file directley and string replace the template parameters <sub><sup> (ie {tile_server_xyz_url}, {localization_name}, {resource_url})</sup></sub>  
 

### Usage
```javascript
import {StyleFactory, APOLLO_BRIGHT_STYLE, ZEN_STYLE} from "@apollomapping/ap-tilezen-mapbox-styles";

const styleFactory = new StyleFactory({
    tileUrl: "https://your-vector-server.com/all/{z}/{x}/{y}.mvt",
    // resource url is the base location for your style's sprites and fonts    
    // you can use our public sprite and font resources whose url is below (for now at least)
    resourceUrl: "https://s3-us-west-1.amazonaws.com/osm-vector-tiles-apollomapping",
    // localization type to use for certain labels. Pass inn ISO 639-1 two-letter language code 
    // ie "en" which turns {name} into {name:en} and defaults to {name} if nothing is passed in.
    // Only used for major and minort city, country, region, ocean and sea labels.
    localization: "en"
});

const myMapBoxStyle = styleFactory.createStyle(APOLLO_BRIGHT_STYLE);
```


#### Available styles
#####Apollo Bright Style 
A bright pastel-ish base map style by Apollo Mapping that's MIT licensed and includes Natural Earth II environment raster source at low zoom levels.


Constant Name:  ``` APOLLO_BRIGHT_STYLE ```

Apollo Style Screenshots             |  2
:-------------------------:|:-------------------------:
![Apollo Style Screenshot](https://github.com/apollomapping/ap-tilezen-mapbox-styles/raw/master/docs/apollo-bright-screenshot.png?raw=true)   |  ![Apollo Style Screenshot 2](https://github.com/apollomapping/ap-tilezen-mapbox-styles/raw/master/docs/apollo-bright-screenshot2.png?raw=true)

#####Zen Style 
A continuation of the mapbox style started by mapzen [here](https://github.com/mapzen/mapboxgl-vector-tiles).
The Zen style is more on the minimalistic than the Apollo style.

Constant Name:  ``` ZEN_STYLE ```
![Zen Style screenshot](https://github.com/apollomapping/ap-tilezen-mapbox-styles/raw/master/docs/zen-style-screenshot.png?raw=true)


#####Toner Style 
Toner is designed to mostly look like Stamen's minimalistic black and white "Toner" style.

Stamen's Toner repository can be found [here](https://github.com/citytracking/toner).

Constant Name:  ``` TONER_STYLE ```
![Toner screenshot](https://github.com/apollomapping/ap-tilezen-mapbox-styles/raw/master/docs/toner-screenshot.png?raw=true)

### Deploying and generating sprites
#### Note nvm with node 8.9 must be installed to run the sprite generation script
<sub><sup>[you can use Apollo Mapping's public sprite and fontstack resources if you do not want to do this.
 URLs are in the javascript example above]</sup></sub>  
 
8.9 is required for spritezero no other version will work not 9.x not 8.6
 
Sprites can be regenerated with the generate-sprites.sh bash script. It reads from the style .csv files that contain pairs of
icon names and the color to colorize the icon too.

Upload the contents of the sprites folder to a static site at this location: {your_resource_url}/sprites/

You can also use the simple deploy.sh script that you pass in your bucket name as first argument and aws profile name as second


### Deploying and generating glyphs/fonts
<sub><sup>[you can use Apollo Mapping's public sprite and fontstack resources if you do not want to do this.
 URLs are in the javascript example above]</sup></sub>  
 
Use this openmaptiles fork https://github.com/m-abboud/fonts
Run the generate.js script followed by the concat.js script (which concats all fonts with their noto equivelents)
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
