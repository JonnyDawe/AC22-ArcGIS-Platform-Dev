import esriConfig from '@arcgis/core/config'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import WebMap from '@arcgis/core/WebMap'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

esriConfig.apiKey =
    'AAPK12c550186e89437eabd142dc25e38ffejJcm_OaVKLyDKXjPixhzrIutnAYTqTM4KpmLZ-dTeTxU_v2MNchG8UIvu6omAynq'

const cycleRoute = new FeatureLayer({
    url: 'https://services6.arcgis.com/ujpPLfH38KAX8unh/arcgis/rest/services/BristolCyclewithHR/FeatureServer',
})

const map = new Map({
    layers: [cycleRoute],
    basemap: 'arcgis-topographic',
})

const webmap = new WebMap({
    portalItem: {
        // autocasts as new PortalItem()
        id: '1dfc6a86e2934907ae8424a25e5be23d',
    },
})

let view: MapView

function instantiateMap() {
    view = new MapView({
        container: 'viewDiv',
        center: [-2.7, 51.452],
        zoom: 12,
        map: map,
    })
}

function instantiateWebMap() {
    view = new MapView({
        map: webmap, // The WebMap instance created above
        container: 'viewDiv',
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
        case 'createWebMap':
            instantiateWebMap()
            break
        default:
            break
    }
}
