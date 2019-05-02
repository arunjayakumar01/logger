# **logger**

[![N|Solid](https://accubits.com/wp-content/themes/accubits/images/loader.gif.pagespeed.ce.l5eCP3VNOD.gif)](https://accubits.com)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A simple Node.js logging library that overrides console methods 

## Installation
Install the package with:

````npm i @accubits/logger````



## USAGE

  -  Require and initalize the logger at the very begening of the entry point of your Node.js application    
  -  If you are using express require and initalize the logger in ```bin/www``` file
  -  Logger can over ride 4 console methods ("debug","info","log","warn"), depending on the initalization, by default it will overide all the four methods.

```javascript
const logger = require('@accubits/logger');
logger.init({
    methods : ["debug","info","log","warn"],
    env : "production"
});
````
```env ``` value will be ```production```   if its not provided.
```methods``` will be ```["debug","info","log","warn"]``` if its not provided.

## Logging

```index.js```
```javascript
const logger = require('@accubits/logger');
logger.init({
    methods : ["debug","log","warn"],
    env : "production"
});

console.log("logging here");
console.warn("warning log");
console.info("info log");

````

```$ node index.js```

Output will be 
````
logging here
warning log
info log
````
```$ production=true node index.js```

Output will be 
````
info log
````
