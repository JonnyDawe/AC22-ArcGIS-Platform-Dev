export function createFullscreen(view: __esri.SceneView) {
    const fullscreen = document.createElement('div')
    fullscreen.classList.add('esri-widget--button', 'esri-interactive')

    const span = document.createElement('span')
    span.classList.add('esri-icon', 'esri-icon-zoom-out-fixed')

    fullscreen.appendChild(span)
    view.ui.add(fullscreen, 'top-left')

    fullscreen.addEventListener('click', function () {
        parent.postMessage({ type: 'fullscreen' }, '*')
    })
}
