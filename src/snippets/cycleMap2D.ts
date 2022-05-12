import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Point from '@arcgis/core/geometry/Point'
import ElevationProfile from '@arcgis/core/widgets/ElevationProfile'
import ElevationProfileLineInput from '@arcgis/core/widgets/ElevationProfile/ElevationProfileLineInput'
import SceneView from '@arcgis/core/views/SceneView'
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import { createFullscreen } from './support/widgets'

esriConfig.apiKey =
    'AAPK12c550186e89437eabd142dc25e38ffejJcm_OaVKLyDKXjPixhzrIutnAYTqTM4KpmLZ-dTeTxU_v2MNchG8UIvu6omAynq'

let cycleRoute = new FeatureLayer({
    url: 'https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/BristolCyclewithHR/FeatureServer',
    hasZ: true,
})

const map = new Map({
    layers: [cycleRoute],
    basemap: 'arcgis-imagery-standard',
    ground: 'world-elevation',
})

const webmap = new WebMap({
    portalItem: {
        // autocasts as new PortalItem()
        id: '1dfc6a86e2934907ae8424a25e5be23d',
    },
})

let view: __esri.View

function instantiateMap() {
    view = new MapView({
        container: 'viewDiv',
        center: [-2.7, 51.452],
        zoom: 12,
        map: map,
    })

    createFullscreen(view as SceneView)
}

function instantiateWebMap() {
    view = new MapView({
        map: webmap, // The WebMap instance created above
        container: 'viewDiv',
    })

    createFullscreen(view as SceneView)
}

function instantiateWebScene() {
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
        environment: {
            atmosphere: { quality: 'high' },
        },
        ui: {
            components: ['attribution'],
        },
        popup: {
            defaultPopupTemplateEnabled: false,
        },
    })

    createFullscreen(view as SceneView)
}

function instantiateElevationWidget() {
    let query = cycleRoute.createQuery()
    query.returnZ = true
    query.where = '1=1'

    const elevationProfile = new ElevationProfile({
        view: view as SceneView,
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
    cycleRoute.queryFeatures(query).then(function (results: __esri.FeatureSet) {
        elevationProfile.input = results.features[0]
    })
}

function updateRenderer() {
    cycleRoute.renderer = new SimpleRenderer({
        symbol: new SimpleLineSymbol({
            width: 2,
            color: '#ffd300',
        }),
    })
}

window.addEventListener(
    'message',
    function (m) {
        if (m.data && m.data.play) {
            play(m.data.argument)
        }
    },
    false
)

function play(message: string) {
    switch (message) {
        case 'createMap':
            instantiateMap()
            break

        case 'updateRenderer':
            updateRenderer()
            break

        case 'createWebMap':
            instantiateWebMap()
            break

        case 'createWebScene':
            instantiateWebScene()
            break

        case 'addElevationWidget':
            instantiateElevationWidget()
            break
        default:
            break
    }
}
