import './styles/main.css'

import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js'

declare global {
    interface Document {
        mozCancelFullScreen?: () => Promise<void>
        msExitFullscreen?: () => Promise<void>
        webkitExitFullscreen?: () => Promise<void>
        mozFullScreenElement?: Element
        msFullscreenElement?: Element
        webkitFullscreenElement?: Element
        webkitCurrentFullScreenElement?: Element
    }

    interface HTMLElement {
        msRequestFullscreen?: () => Promise<void>
        mozRequestFullscreen?: () => Promise<void>
        webkitRequestFullscreen?: () => Promise<void>
    }
}

;(Reveal as RevealStatic)
    .initialize({
        center: true,
        transition: 'slide',
        width: 1366,
        height: 768,
        margin: 0.04,

        plugins: [Markdown, Highlight],
        markdown: {
            smartLists: true,
            smartypants: true,
        },
    })
    .then(() => {
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'fullscreen') {
                if (document.webkitCurrentFullScreenElement) {
                    document.webkitExitFullscreen()
                    return
                }

                var iframes = document.querySelectorAll('iframe')

                for (var i = 0; i < iframes.length; i++) {
                    var iframe = iframes[i]

                    if (iframe.contentWindow === event.source) {
                        iframe.webkitRequestFullscreen()
                        return
                    }
                }
            }
        })

        let playButtons = document.querySelectorAll('[data-play-frame]')
        let inputs = document.querySelectorAll('[data-input-frame]')

        //make all links open in an external tab
        let e = document.createElement('base')
        e.target = '_blank'
        document.head.appendChild(e)

        for (let i = 0; i < playButtons.length; i++) {
            playButtons[i].addEventListener(
                'click',
                (function (
                    frameName: string,
                    argument: string,
                    classList: DOMTokenList
                ) {
                    return function (event: UIEvent) {
                        event.stopPropagation()
                        event.preventDefault()
                        classList.add('clicked')

                        window.frames[frameName].contentWindow.postMessage(
                            { play: true, argument: argument },
                            '*'
                        )
                    }
                })(
                    playButtons[i].getAttribute('data-play-frame'),
                    playButtons[i].getAttribute('data-play-argument'),
                    playButtons[i].classList
                )
            )

            playButtons[i].addEventListener('mousedown', function (event) {
                event.preventDefault()
                event.stopPropagation()
            })
        }

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener(
                'change',
                (function (frameName: string, inputType: string) {
                    return function (event: InputEvent) {
                        event.stopPropagation()
                        event.preventDefault()
                        window.frames[frameName].contentWindow.postMessage(
                            {
                                input: true,
                                inputType,
                                argument: (event.target as HTMLInputElement)
                                    .value,
                            },
                            '*'
                        )
                    }
                })(
                    inputs[i].getAttribute('data-input-frame'),
                    inputs[i].getAttribute('data-input-type')
                )
            )
        }
    })
