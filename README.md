# Discovering what's available with ArcGIS Platform and JavaScript

Esri’s ArcGIS Platform offers a range of web APIs including the ArcGIS API for JavaScript which can be used to build compelling web apps with interactive user experiences. In this session, Esri UK will explore the ArcGIS API for JavaScript as well as open source and third party offerings such as Esri Leaflet and Mapbox GL JS. Learn the difference between them, discover their key capabilities

## Presentation

[ArcGIS Platform and JavaScript](https://jonnydawe.github.io/AC22-ArcGIS-Platform-Dev/)

## Installation

Clone this repository to your machine.

```bash
$ git clone https://github.com/JonnyDawe/AC22-ArcGIS-Platform-Dev
```

Navigate to the root folder and install dependencies.

```bash
$ npm install
```

Start the local development server to see the CIM presentation sample in action.

```bash
$ npm run start
```

## Usage

-   Slides are written as markdown inside of `presentation.md` and translated into HTML via [markdown.js plugin](https://revealjs.com/markdown/)
-   Interactive ArcGIS Map Snippets are embedded via iframes. The the `data-src` attribute is used to point the iframe to the correct code snippet to load in from `./snippets`.

```html
<!-- This loads the cim-points.ts file into the iframe -->
<iframe id="frame-cim-points" data-src="./snippet.html?cim-points"></iframe>
```

-   commits to the branch are prettified via [pretty-quick](https://github.com/azz/pretty-quick)

## Attribution:

This project was heavily inspired and adapted from this [repo](https://github.com/jkieboom/devsummit-palm-springs-2017/tree/gh-pages/controlling-camera-3d-navigation) created by [jkieboom](https://github.com/jkieboom) for the 2017 Esri Dev Summit. It has been adapted to use @arcgis/core ES Modules and webpack.

## License

[MIT](https://choosealicense.com/licenses/mit/)
