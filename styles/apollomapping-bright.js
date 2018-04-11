export const APOLLOMAPPING_BRIGHT_STYLE = {
    "id": "apollomapping-bright",
    "version": 8,
    "name": "OpenStreetMap Vector Bright",
    "metadata": {},
    "sources": {
        "osm": {
            "type": "vector",
            "tiles": [
                "{tile_server_xyz_url}"
            ]
        }
    },
    "sprite": "{resource_url}/sprites/apollomapping-bright-icons",
    "glyphs": "{resource_url}/tile_fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "rgba(255, 255, 255, 1)",
                "background-opacity": 1
            }
        },
        {
            "id": "water-line",
            "type": "line",
            "source": "osm",
            "source-layer": "water",
            "filter": [
                "==",
                "$type",
                "LineString"
            ],
            "paint": {
                "line-color": "rgba(177, 233, 236, 1)",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            8,
                            0.5
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            }
        },
        {
            "id": "water-polygon",
            "type": "fill",
            "source": "osm",
            "source-layer": "water",
            "filter": [
                "==",
                "$type",
                "Polygon"
            ],
            "paint": {
                "fill-color": "rgba(70, 73, 135, 0.6)",
                "fill-outline-color": "rgba(71, 71, 121, 1)",
                "fill-opacity": 1
            }
        },
        {
            "id": "park",
            "type": "fill",
            "source": "osm",
            "source-layer": "landuse",
            "filter": [
                "all",
                [
                    "in",
                    "kind",
                    "park",
                    "national_park",
                    "forest",
                    "garden",
                    "grass",
                    "farm",
                    "meadow",
                    "playground",
                    "golf_course",
                    "wetland",
                    "nature_reserve",
                    "wood",
                    "cemetery"
                ]
            ],
            "paint": {
                "fill-color": "rgba(131, 234, 117, 0.75)"
            },
            "min-zoom": 6
        },
        {
            "id": "river",
            "type": "line",
            "source": "osm",
            "source-layer": "water",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "kind",
                    "river"
                ]
            ],
            "layout": {},
            "paint": {
                "line-color": "rgba(177, 233, 236, 1)",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            8,
                            0.75
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            },
            "min-zoom": 6
        },
        {
            "id": "stream-etc",
            "type": "line",
            "source": "osm",
            "source-layer": "water",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "kind",
                    "stream",
                    "canal"
                ]
            ],
            "layout": {},
            "paint": {
                "line-color": "rgba(177, 233, 236, 1)",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            10,
                            0.5
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            },
            "min-zoom": 11
        },
        {
            "id": "country-boundary",
            "type": "line",
            "source": "osm",
            "source-layer": "boundaries",
            "filter": [
                "==",
                "kind_detail",
                "2"
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#004933",
                "line-width": {
                    "base": 20,
                    "stops": [
                        [
                            1,
                            0.5
                        ],
                        [
                            7,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "state-boundary",
            "type": "line",
            "source": "osm",
            "source-layer": "boundaries",
            "filter": [
                "==",
                "kind_detail",
                "4"
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#cacecc",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            7,
                            3
                        ]
                    ]
                }
            },
            "max-zoom": 17
        },
        {
            "id": "subways",
            "type": "line",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "==",
                "railway",
                "subway"
            ],
            "paint": {
                "line-color": "#ef7369",
                "line-dasharray": [
                    2,
                    1
                ]
            }
        },
        {
            "id": "link-tunnel",
            "type": "line",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "any",
                [
                    "==",
                    "is_tunnel",
                    "yes"
                ]
            ],
            "layout": {},
            "paint": {
                "line-color": "#afd3d3",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    2
                ]
            }
        },
        {
            "id": "buildings",
            "type": "fill",
            "source": "osm",
            "source-layer": "buildings",
            "paint": {
                "fill-outline-color": "rgba(218, 215, 184, 1)",
                "fill-color": "rgba(226, 218, 193, 1)"
            }
        },
        {
            "id": "road",
            "type": "line",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "any",
                [
                    "==",
                    "kind",
                    "minor_road"
                ],
                [
                    "==",
                    "kind",
                    "major_road"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "rgba(228, 207, 223, 1)",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            }
        },
        {
            "id": "link-bridge",
            "type": "line",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "any",
                [
                    "==",
                    "is_link",
                    "yes"
                ],
                [
                    "==",
                    "is_bridge",
                    "yes"
                ]
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#c0c4c2",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.5
                        ],
                        [
                            8,
                            1.5
                        ],
                        [
                            20,
                            40
                        ]
                    ]
                }
            }
        },
        {
            "id": "highway",
            "type": "line",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "==",
                "kind",
                "highway"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "rgba(164, 2, 164, 1)",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.5
                        ],
                        [
                            8,
                            1.5
                        ],
                        [
                            20,
                            40
                        ]
                    ]
                }
            },
            "line-join": "round"
        },
        {
            "id": "path",
            "type": "line",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "==",
                "kind",
                "path"
            ],
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#5d6765",
                "line-width": {
                    "base": 1.8,
                    "stops": [
                        [
                            10,
                            0.15
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                },
                "line-dasharray": [
                    2,
                    2
                ]
            },
            "line-join": "round",
            "line-cap": "round",
            "min-zoom": 12
        },
        {
            "id": "aux_roads",
            "type": "line",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "kind",
                    "major_road"
                ]
            ],
            "paint": {
                "line-color": "rgba(173, 130, 197, 1)",
                "line-width": 2
            }
        },
        {
            "id": "National_Park_Color",
            "type": "fill",
            "source": "osm",
            "source-layer": "landuse",
            "maxzoom": 24,
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "national_park"
                ]
            ],
            "layout": {},
            "paint": {
                "fill-color": "rgba(99, 187, 86, 0.75)"
            }
        },
        {
            "id": "state-label",
            "type": "symbol",
            "source": "osm",
            "source-layer": "places",
            "minzoom": 3,
            "maxzoom": 5,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "kind",
                    "region"
                ]
            ],
            "layout": {
                "text-font": [
                    "Roboto Bold Italic"
                ],
                "text-field": "{name}",
                "text-size": 18
            },
            "paint": {
                "text-color": "rgba(108, 108, 116, 1)",
                "text-halo-color": "rgba(52, 51, 51, 0.5)"
            }
        },
        {
            "id": "roads-label",
            "type": "symbol",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "kind",
                    "minor_road"
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "text-font": [
                    "Roboto Regular"
                ],
                "text-field": "{name}",
                "text-size": 12
            },
            "paint": {
                "text-color": "rgba(37, 40, 40, 1)",
                "text-halo-color": "rgba(135, 139, 145, 1)"
            }
        },
        {
            "id": "highway-label",
            "type": "symbol",
            "source": "osm",
            "source-layer": "roads",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "kind",
                    "highway"
                ]
            ],
            "layout": {
                "symbol-placement": "line",
                "text-font": [
                    "Roboto Bold"
                ],
                "text-field": "{name}",
                "text-size": 16,
                "visibility": "none"
            },
            "paint": {
                "text-color": "#384646",
                "text-halo-color": "#1f66ff"
            }
        },
        {
            "id": "ocean-label",
            "type": "symbol",
            "source": "osm",
            "source-layer": "places",
            "filter": [
                "==",
                "kind",
                "ocean"
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Italic"
                ],
                "text-max-width": 14,
                "text-letter-spacing": 0.1,
                "text-size": {
                    "stops": [
                        [
                            2,
                            28
                        ],
                        [
                            6,
                            32
                        ]
                    ]
                }
            },
            "paint": {
                "text-color": "#ededed",
                "text-halo-color": "#000"
            },
            "min-zoom": 2,
            "max-zoom": 6
        },
        {
            "id": "national_park_labels",
            "type": "symbol",
            "source": "osm",
            "source-layer": "pois",
            "minzoom": 8,
            "maxzoom": 24,
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "national_park"
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Regular",
                    ""
                ],
                "text-size": 14
            }
        },
        {
            "id": "capital-label",
            "type": "symbol",
            "source": "osm",
            "source-layer": "places",
            "minzoom": 3,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "region_capital",
                    true
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Roboto Bold"
                ],
                "text-size": {
                    "stops": [
                        [
                            6,
                            16
                        ],
                        [
                            10,
                            20
                        ]
                    ]
                },
                "text-max-width": 10,
                "text-letter-spacing": 0.1
            },
            "paint": {
                "text-color": "rgba(20, 20, 21, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "major-city",
            "type": "symbol",
            "source": "osm",
            "source-layer": "places",
            "minzoom": 5,
            "maxzoom": 15,
            "filter": [
                "all",
                [
                    "==",
                    "kind_detail",
                    "city"
                ],
                [
                    "!=",
                    "region_capital",
                    true
                ],
                [
                    ">",
                    "population",
                    400000
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Regular",
                    ""
                ],
                "text-size": 18
            },
            "paint": {
                "text-color": "rgba(20, 20, 21, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "minor_city_label",
            "type": "symbol",
            "source": "osm",
            "source-layer": "places",
            "minzoom": 7,
            "filter": [
                "all",
                [
                    "==",
                    "kind_detail",
                    "city"
                ],
                [
                    "!=",
                    "region_capital",
                    true
                ],
                [
                    "<",
                    "population",
                    400000
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "Open Sans Regular",
                    ""
                ],
                "text-size": 14
            },
            "paint": {
                "text-color": "rgba(20, 20, 21, 1)",
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "shield-road-label",
            "type": "symbol",
            "source": "osm",
            "source-layer": "roads",
            "minzoom": 11,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "kind",
                    "highway"
                ]
            ],
            "layout": {
                "text-field": "{ref}",
                "text-size": 12,
                "text-font": [
                    "Roboto Bold"
                ],
                "symbol-placement": "line",
                "symbol-spacing": 1000
            },
            "paint": {
                "text-halo-color": "rgba(255, 255, 255, 1)",
                "text-halo-width": 1,
                "text-color": "rgba(0, 0, 0, 1)",
                "text-halo-blur": 0,
                "text-opacity": 1
            }
        },
        {
            "id": "airport",
            "type": "symbol",
            "source": "osm",
            "source-layer": "pois",
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "aerodrome"
                ]
            ],
            "layout": {
                "icon-image": "airport-15",
                "icon-size": 1.2,
                "text-field": "",
                "text-size": 16,
                "text-font": [
                    ""
                ]
            }
        },
        {
            "id": "bus-station-symbol",
            "type": "symbol",
            "source": "osm",
            "source-layer": "pois",
            "minzoom": 8,
            "maxzoom": 24,
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "bus_station"
                ]
            ],
            "layout": {
                "icon-image": "bus-15",
                "icon-size": 1.2,
                "text-field": "",
                "text-size": 16,
                "text-font": [
                    ""
                ]
            }
        },
        {
            "id": "bus-stop-symbols",
            "type": "symbol",
            "source": "osm",
            "source-layer": "pois",
            "minzoom": 8,
            "maxzoom": 24,
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "bus_stop"
                ]
            ],
            "layout": {
                "icon-image": "bus-11",
                "icon-size": 1.0,
                "text-field": "",
                "text-size": 16,
                "text-font": [
                    ""
                ]
            }
        },
        {
            "id": "parking-symbols",
            "type": "symbol",
            "source": "osm",
            "source-layer": "pois",
            "minzoom": 8,
            "maxzoom": 24,
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "parking"
                ]
            ],
            "layout": {
                "icon-image": "parking-11",
                "icon-size": 1.0,
                "text-field": "",
                "text-size": 16,
                "text-font": [
                    ""
                ]
            }
        },
        {
            "id": "bicycle-share-symbols",
            "type": "symbol",
            "source": "osm",
            "source-layer": "pois",
            "minzoom": 3,
            "maxzoom": 24,
            "filter": [
                "all",
                [
                    "==",
                    "kind",
                    "bicycle_parking"
                ]
            ],
            "layout": {
                "icon-image": "bicycle-share-11",
                "icon-size": 1.0,
                "text-field": "",
                "text-size": 16,
                "text-font": [
                    ""
                ]
            }
        }
    ]
};