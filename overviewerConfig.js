var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world - overworld",
        "world - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1667679265",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Survival Daytime",
            "zoomLevels": 6,
            "defaultZoom": 5,
            "maxZoom": 6,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1667678948,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                108,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                108,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Survival Nighttime",
            "zoomLevels": 6,
            "defaultZoom": 5,
            "maxZoom": 6,
            "path": "survivalnight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1667678948,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                108,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                108,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "Survival Nether",
            "zoomLevels": 6,
            "defaultZoom": 5,
            "maxZoom": 6,
            "path": "survivalnether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - nether",
            "last_rendertime": 1667678949,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                108,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
