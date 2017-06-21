# food_love_web

## Dependencies
***`npm install`***

{
  "name": "reacttest",
  "version": "1.0.0",
  "description": "React JS test",
  "main": "index.js",
  "scripts": {
    "start": "npm run build",
    "build": "webpack -d && cp client/index.html dist/index.html && webpack-dev-server --content-base client/ --inline --hot --port 3000",
    "build:prod": "webpack -p && cp client/index.html dist/index.html"
  },
  ***`--save`***
  "author": "Michael",
  "license": "ISC",
  "dependencies": {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-icons": "^2.2.5",
    "react-router": "^4.1.1",
    "react-router-dom": "^4.1.1"
  },
  ***` --save-dev` ***
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "webpack": "^2.6.1",
    "webpack-dev-server": "^2.4.5"
  }
}
