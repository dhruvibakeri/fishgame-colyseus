# Webpack

## Basic setup

Start a new node project:

`npm init -y`

Install webpack, and its cli:

`$ npm install webpack webpack-cli --save-dev`

Added an `index.html` and `frontend/index.js`, the index.html has a lodash loaded from cdn, and the index.js uses that lodash to edit the html.

The "main" field in package.json is changed to "private" to prevent accidental publishing of the repo.

There is an implicit dependency between the script tags.
Our index.js file depends on lodash being included in the page before it runs. This is because index.js never explicitly declared a need for lodash; it just assumes that the global variable _ exists.

There are problems with managing JavaScript projects this way:

- It is not immediately apparent that the script depends on an external library.
- If a dependency is missing, or included in the wrong order, the application will not function properly.
- If a dependency is included but not used, the browser will be forced to download unnecessary code.
Let's use webpack to manage these scripts instead.

## Creating a bundle

We tweak the directory structure:

1. Add a `dist/` folder,
2. Move `index.html` to the dist folder.

We'll install lodash locally to bundle it.

`npm install --save lodash`

Remove the lodash script from the index.html, and add the import in index.js. So now, there's no global scope pollution. The `index.js` script is the entry point when we run `npx webpack`. Generated code is: `dist/main.js` -- the output.

- Add config.
- Add `package.json` script

`npm install --save-dev style-loader css-loader` to add a css loader.

`npm install --save-dev file-loader` to add a file loader.

`npm install --save-dev csv-loader xml-loader` to add xml and csv data.

`npm install --save-dev html-webpack-plugin` helps bundle.

`npm install --save-dev clean-webpack-plugin` cleans dist.

`npm install --save-dev express webpack-dev-middleware` for production.
