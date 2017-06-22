# food_love_web

## Dependencies

Include this in a `package.json` file

{
  "name": "reacttest",  
  "version": "1.0.0",  
  "description": "React JS test",  
  "main": "index.js", 
  "author": "Doge",  
  "license": "ISC", 
  "scripts": {  
    "start": "npm run build",  
    "build": "webpack -d && cp client/index.html dist/index.html && webpack-dev-server --content-base client/ --inline --hot --port 3000",  
    "build:prod": "webpack -p && cp client/index.html dist/index.html"  
    }
 }

# From the console run

`npm install --save react react-dom react-icons react-router react-router-dom`  
    
`npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 webpack webpack-dev-server`

