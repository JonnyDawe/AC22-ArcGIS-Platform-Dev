import { gpx } from '@tmcw/togeojson'

import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import Point from '@arcgis/core/geometry/Point'
import ElevationProfile from '@arcgis/core/widgets/ElevationProfile'
import ElevationProfileLineInput from '@arcgis/core/widgets/ElevationProfile/ElevationProfileLineInput'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import SceneView from '@arcgis/core/views/SceneView'

esriConfig.apiKey =
    'AAPK12c550186e89437eabd142dc25e38ffejJcm_OaVKLyDKXjPixhzrIutnAYTqTM4KpmLZ-dTeTxU_v2MNchG8UIvu6omAynq'

const cycleRoute = new FeatureLayer({
    url: 'https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/BristolCyclewithHR/FeatureServer',
})

const map = new Map({
    layers: [cycleRoute],
    basemap: 'satellite',
    ground: 'world-elevation',
})

const view = new SceneView({
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

const elevationProfile = new ElevationProfile({
    view,
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

cycleRoute.queryFeatures().then(function (results: __esri.FeatureSet) {
    elevationProfile.input = results.features[0]
})

view.ui.add(elevationProfile, 'bottom')

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
        default:
            break
    }
}
