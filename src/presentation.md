## Discovering what's available with ArcGIS Platform and JavaScript

[bit.ly/AC22DevJS](https://bit.ly/AC22JSDev)

<div class="name-title"> Jonny Dawe ⚡ Kristian Kaesinger  </div>

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

## [ArcGIS is an API](https://developers.arcgis.com/rest/services-reference/enterprise/get-started-with-the-services-directory.htm)

<img style="height:640px; width:auto" src="./assets/ArcGISRESTAPI.png">

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

<img style="height:640px; width:auto" src="./assets/jsontomap.png">

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

## [ArcGIS Platform](https://www.esri.com/about/newsroom/arcnews/arcgis-platform-gives-developers-direct-access-to-location-services/)

<img style="height:640px; width:auto" src="./assets/ArcGISPlatform.png">

---

<!-- .slide: data-background-image="./assets/DemoLinkSlide.png"; .slide: data-background-size="cover" -->

# [developers.arcgis.com](https://developers.arcgis.com/)

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

# [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/latest/)

#### Powerful visualisation, smart mapping and analytics capabilities <!-- .element: class="fragment" data-fragment-index="1" -->

#### Create interactive 2D and 3D user experiences <!-- .element: class="fragment" data-fragment-index="2" -->

#### Highly Tailored functionality work seamlessly with ArcGIS Services and Items <!-- .element: class="fragment" data-fragment-index="3" -->

#### Modular design (e.g ES modules and AMD) - only use what you need! <!-- .element: class="fragment" data-fragment-index="4" -->

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

## [ArcGIS JS Demo](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)

<div class="two-col">
  <div class="snippets full-height-blocks">

[Add a layer to a map:](https://developers.arcgis.com/javascript/latest/add-a-feature-layer/)

<div class="snippet">

```js
esriConfig.apiKey =
    'AAPK12c550186e89437eabd142dc25e38ffejJcm_OaVKLyDKXjPixhzrIutnAYTqTM4KpmLZ-dTeTxU_v2MNchG8UIvu6omAyn'

let cycleRoute = new FeatureLayer({
    url: 'https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/BristolCyclewithHR/FeatureServer',
})

const map = new Map({
    layers: [cycleRoute],
    basemap: 'arcgis-imagery-standard',
})

const view = new MapView({
    container: 'viewDiv',
    center: [-2.7, 51.452],
    zoom: 12,
    map: map,
})
```

<svg data-play-frame="frame-simpleMap" data-play-argument="createMap" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

</div>

[Add styling](https://developers.arcgis.com/javascript/latest/visualization/location-styles/)

<div class="snippet">

```js
const renderer = new SimpleRenderer({
    symbol: new SimpleLineSymbol({
        width: 2,
        color: '#ffd300',
    }),
})

cycleRoute.renderer = renderer
```

<svg data-play-frame="frame-simpleMap" data-play-argument="updateRenderer" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

</div>

[Use an existing styled WebMap](https://developers.arcgis.com/javascript/latest/display-a-web-map/)

<div class="snippet">

```js
const webmap = new WebMap({
    portalItem: {
        // autocasts as new PortalItem()
        id: '1dfc6a86e2934907ae8424a25e5be23d',
    },
})

const view = new MapView({
    map: webmap,
    container: 'viewDiv',
})
```

<svg data-play-frame="frame-simpleMap" data-play-argument="createWebMap" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

</div>

[Add a Widget](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-ElevationProfile.html)

<div class="snippet">

```js
const elevationProfile = new ElevationProfile({
    view: view,
    profiles: [
        new ElevationProfileLineInput({
            color: [245, 203, 66],
            title: 'Bicycle track',
        }),
    ],
    visibleElements: {
        selectButton: false,
        sketchButton: false,
        settingsButton: false,
    },
})
view.ui.add(elevationProfile, 'bottom-right')
cycleRoute.queryFeatures().then(function (results) {
    elevationProfile.input = results.features[0]
})
```

<svg data-play-frame="frame-simpleMap" data-play-argument="addElevationWidget" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

</div>

[Create a Scene](https://developers.arcgis.com/javascript/latest/display-a-scene/)

<div class="snippet">

```js
view = new SceneView({
    map: map,
    container: 'viewDiv',
    qualityProfile: 'high',
    camera: {
        position: new Point({
            x: -288039,
            y: 6706776,
            z: 4168,
            spatialReference: {
                wkid: 102100,
            },
        }),
        heading: 237,
        tilt: 60,
    },
})
```

<svg data-play-frame="frame-simpleMap" data-play-argument="createWebScene" class="play-code" viewBox="0 0 24 24"><path fill="#999" d="M12,20.14C7.59,20.14 4,16.55 4,12.14C4,7.73 7.59,4.14 12,4.14C16.41,4.14 20,7.73 20,12.14C20,16.55 16.41,20.14 12,20.14M12,2.14A10,10 0 0,0 2,12.14A10,10 0 0,0 12,22.14A10,10 0 0,0 22,12.14C22,6.61 17.5,2.14 12,2.14M10,16.64L16,12.14L10,7.64V16.64Z" /></svg>

</div>
</div>
  <div class="snippet-preview">
    <iframe id="frame-simpleMap" data-src="./snippet.html?cycleMap2D"></iframe>
  </div>
</div>

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

## Integrating ArcGIS capabilities in third-party applications

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

#### [Esri Leaflet](https://developers.arcgis.com/esri-leaflet/)

-   Leaflet Plugin extending existing classes <!-- .element: class="fragment" data-fragment-index="1" -->
-   Support for Vector Tile Services, Hosted Feature Layers and other Premium Services <!-- .element: class="fragment" data-fragment-index="1" -->

#### [Mapbox GL JS](https://developers.arcgis.com/esri-leaflet/key-features/)

-   ArcGIS REST API and Services follow open standards that allow for easy implementation into your Mapbox application <!-- .element: class="fragment" data-fragment-index="2" -->
-   Utilises ArcGIS REST JS <!-- .element: class="fragment" data-fragment-index="2" -->
-   Many of Mapbox's premium features can be replaced by an Esri counterpart <!-- .element: class="fragment" data-fragment-index="2" -->

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

### Demo: _Where is my coffee_?

<div class="two-col">
<div class="lists">

1. Update the basemap
2. Bring in data from a Hosted Feature Layer
3. Find cafés within a 5 minute walking distance
 </div>
  <div class="snippet-preview">

<iframe height="300" style="width: 100%;" scrolling="no" title="AC22_Demo1" src="https://codepen.io/anonymous_kris/embed/BaJEzOY?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/anonymous_kris/pen/BaJEzOY">
  AC22_Demo1</a> by Kristian (<a href="https://codepen.io/anonymous_kris">@anonymous_kris</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
  </div>
</div>

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

1. Update the [basemap](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/)

```js [5-7|9-11|15]
//Mapbox API Key
mapboxgl.accessToken =
    'pk.eyJ1IjoiYW5vbnltb3VzLWtyaXMiLCJhIjoiY2wxdnpjYzF1MDJ1ejNqazBleXI0OWxodSJ9.rReyRH5OWGkctU2RAK8ZhQ'

//ArcGIS API Key
const apiKey =
    'AAPKa22509eb293340718de64c0a7c02cad1_WUahdFNN64BsEwfrIltOU_4ks7vB99YuhF8gtyGCu-AofMp3K4KewgSDsHURMZ3'

//Esri Basemap
const basemapEnum = 'ArcGIS:Navigation'
const basemapURL = `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`

const map = new mapboxgl.Map({
    container: 'map',
    style: basemapURL,
    center: [-3.5278, 52.5074],
    zoom: 6,
    pitch: 60,
    bearing: 30,
})
```

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->
<iframe height="640" style="width: 100%;" scrolling="no" title="AC22_Demo1" src="https://codepen.io/anonymous_kris/embed/BaJEzOY?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/anonymous_kris/pen/BaJEzOY">
  AC22_Demo1</a> by Kristian (<a href="https://codepen.io/anonymous_kris">@anonymous_kris</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

2. Add data from a [Hosted Feature Layer](https://services1.arcgis.com/iLnjttk8pGiISSJD/arcgis/rest/services/Esri_UK_Office_View/FeatureServer/0/query?where=1=1&outFields=*&f=pgeojson)

```js [1-5|4|7-35]
//Lets add some data:
map.addSource('offices', {
    type: 'geojson',
    data: 'https://services1.arcgis.com/iLnjttk8pGiISSJD/arcgis/rest/services/Esri_UK_Office_View/FeatureServer/0/query?where=1=1&outFields=*&f=pgeojson',
})

map.addLayer({
    id: 'offices-layer',
    type: 'circle',
    source: 'offices',
    paint: {
        'circle-radius': 6,
        'circle-color': 'white',
        'circle-stroke-color': 'black',
        'circle-stroke-width': 2,
    },
})

map.addLayer({
    id: 'offices-text',
    source: 'offices',
    type: 'symbol',
    layout: {
        'text-field': ['get', 'Location'],
        'text-font': ['Arial Bold'],
        'text-variable-anchor': ['left', 'right'],
        'text-justify': 'left',
        'text-radial-offset': 0.5,
        'text-size': 12,
    },
    paint: {
        'text-color': 'hsl(200, 80%,40%)',
        'text-halo-color': 'white',
        'text-halo-width': 2,
    },
})
```

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->
<iframe height="640" style="width: 100%;" scrolling="no" title="AC22_Demo2" src="https://codepen.io/anonymous_kris/embed/xxpeOyG?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/anonymous_kris/pen/xxpeOyG">
  AC22_Demo2</a> by Kristian (<a href="https://codepen.io/anonymous_kris">@anonymous_kris</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

#### [ArcGIS REST JS](https://developers.arcgis.com/arcgis-rest-js/)

<ul style="margin: 0 0 0 -8em;">
  <li>Collection of light-weight JavaScript modules</li>
  <li>JavaScript wrapper for the ArcGIS REST API</li>
  <li>Simplifies execution of common GIS workflows</li>
</ul>

```
    <script src="https://unpkg.com/@esri/arcgis-rest-request@3.0.0/dist/umd/request.umd.js"></script>
    <script src="https://unpkg.com/@esri/arcgis-rest-routing@3.0.0/dist/umd/routing.umd.js"></script>
    <script src="https://unpkg.com/@esri/arcgis-rest-geocoding@3.0.0/dist/umd/geocoding.umd.js"></script>
    <script src="https://unpkg.com/@esri/arcgis-rest-auth@3.0.0/dist/umd/auth.umd.js"></script>
    <script src="https://unpkg.com/@esri/arcgis-rest-demographics@3.0.0/dist/umd/demographics.umd.js"></script>

```

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

3. Find cafés within a 5 minute walking distance

```js [1|1-29|31-70]
//Add new layers
//ServiceArea
map.addSource('servicearea', {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: [],
    },
})

map.addLayer({
    id: 'servicearea-fill',
    type: 'fill',
    source: 'servicearea',
    paint: {
        'fill-color': [
            'match',
            ['get', 'FromBreak'],
            0,
            'hsl(56, 80%, 40%)',
            2,
            'hsl(56, 80%, 60%)',
            5,
            'hsl(210, 80%, 100%)',
            'transparent',
        ],
        'fill-outline-color': 'black',
        'fill-opacity': 0.5,
    },
})

//Geocoding Layer
map.addSource('cafes', {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: [],
    },
})

map.addLayer({
    id: 'cafes-circle',
    source: 'cafes',
    type: 'circle',

    paint: {
        'circle-color': 'hsla(200, 80%, 80%, 0.7)',
        'circle-stroke-color': 'hsl(200, 80%, 40%)',
        'circle-stroke-width': 1,
        'circle-radius': 3,
    },
})

map.addLayer({
    id: 'cafes-text',
    source: 'cafes',
    type: 'symbol',
    layout: {
        'text-field': ['get', 'PlaceName'],
        'text-font': ['Arial Regular'],
        'text-variable-anchor': ['left', 'right'],
        'text-justify': 'left',
        'text-radial-offset': 0.5,
        'text-size': 12,
    },
    paint: {
        'text-color': 'hsl(200, 80%,40%)',
        'text-halo-color': 'white',
        'text-halo-width': 2,
    },
})
```

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

```js [1|11-23|30-41|68-82]
//Change Area
function updateServiceAreas(coordinates) {
    const point = {
        type: "Point",
        coordinates
    };

    const authentication = new arcgisRest.ApiKey({
        key: apiKey
    });
    arcgisRest
        .serviceArea({
            facilities: [coordinates],
            params: {
                defaultBreaks: [2, 5],
                travelMode: { "attributeParameterValues": [{ "parameterName": "Restriction Usage", "attributeName": "Walking", "value": "PROHIBITED" }, { "parameterName": "Restriction Usage", "attributeName": "Preferred for Pedestrians", "value": "PREFER_LOW" }, { "parameterName": "Walking Speed (km/h)", "attributeName": "WalkTime", "value": 5 }], "description": "Follows paths and roads that allow pedestrian traffic and finds solutions that optimize travel time. The walking speed is set to 5 kilometers per hour.", "impedanceAttributeName": "WalkTime", "simplificationToleranceUnits": "esriMeters", "uturnAtJunctions": "esriNFSBAllowBacktrack", "restrictionAttributeNames": ["Preferred for Pedestrians", "Walking"], "useHierarchy": false, "simplificationTolerance": 2, "timeAttributeName": "WalkTime", "distanceAttributeName": "Miles", "type": "WALK", "id": "caFAgoThrvUpkFBW", "name": "Walking Time" },
                outputPolygons: "esriNAOutputPolygonDetailed"
            },
            authentication
        })
        .then((response) => {
            serviceAreaFeatures = response.saPolygons.geoJson;
            map.getSource("servicearea").setData(serviceAreaFeatures);

            // get demographics of this polygon
            const feature = serviceAreaFeatures.features[0];
            const geometry = Terraformer.geojsonToArcGIS(feature.geometry);
            const geometryType = "esriGeometry" + feature.geometry.type;

            arcgisRest
                .queryDemographicData({
                    authentication: authentication,
                    studyAreas: [
                        {
                            geometry: geometry,
                            geometryType: geometryType
                        },
                    ],
                    dataCollections: ["KeyGlobalFacts",],
                    analysisVariables: ["KeyFacts.PPPC_CY"]
                })
                .then((response) => {
                    const data = document.getElementById("data");
                    const featureSet = response.results[0].value.FeatureSet;

                    let message;
                    if (featureSet.length > 0 && featureSet[0].features.length > 0) {
                        const attributes = featureSet[0].features[0].attributes;
                        message =
                            `<b>Coffee shops within 2 and 5 minute walking areas</b></br>` +
                            [
                                `Population: ${attributes.TOTPOP}`,
                                `Average Household Size: ${attributes.AVGHHSZ}`,
                                `Purchasing Power per capita: £${attributes.PPPC_CY}`
                            ].join("<br>");
                    } else {
                        message = "Data not available for this location.";
                    }
                    popup = new mapboxgl.Popup({ offset: [-150, -150] }).setHTML(message).setLngLat(coordinates).addTo(map);

                    loading = false;
                })
                .catch((error) => {
                    alert("There was a problem querying demographic data. See the console for details.");
                    console.error(error);
                    loading = false;
                });
            // get cafes within this polygon
            arcgisRest
                .geocode({
                    authentication,
                    outFields: "Place_addr,PlaceName", // attributes to be returned
                    params: {
                        category: "Coffee shop",
                        location: point.coordinates[0] + "," + point.coordinates[1],
                        searchExtent: turf.bbox(serviceAreaFeatures),
                        maxLocations: 100
                    }
                })
                .then((response) => {
                    const geocodeFeatures = response.geoJson;
                    map.getSource("cafes").setData(turf.pointsWithinPolygon(geocodeFeatures, serviceAreaFeatures));
                    var cafeNum = response.candidates.length;
                    loading = false;

                })
```

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->
<iframe height="740" style="width: 100%;" scrolling="no" title="AC22_Demo3" src="https://codepen.io/anonymous_kris/embed/dyJLXgp?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/anonymous_kris/pen/dyJLXgp">
  AC22_Demo3</a> by Kristian (<a href="https://codepen.io/anonymous_kris">@anonymous_kris</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<!-- .slide: data-background-image="./assets/MainSlide.png"; .slide: data-background-size="cover" -->

### Recap

-   ArcGIS Platform provides a simple way to integrate ArcGIS capabilities into your applications
-   Easy to get started with a free Developer Account
-   Choose the path of least resistance
    -   If you are starting from scratch -> ArcGIS API for JavaScript <!-- .element: class="fragment" data-fragment-index="1" -->
    -   Existing application or special requirements -> Third-party application <!-- .element: class="fragment" data-fragment-index="2" -->

**Meet us at the developer stand during the break!** <!-- .element: class="fragment" data-fragment-index="3" -->

---

<!-- .slide: data-background-image="./assets/EndSlide.png"; .slide: data-background-size="cover" -->
