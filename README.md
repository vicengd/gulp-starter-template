# Gulp Starter Template

A Gulp.js starter template for development.

## Features
* JavaScript compressing with uglify.
* Compiles the SCSS files into CSS.
* Minify and copy CSS files.
* Auto reload all browsers with browser-sync when files change.
* Serves the static files to localhost:3002

## Prerequisites
You will require [node](http://nodejs.org) and [npm](https://npmjs.org) installed.

## Usage
1. Install global gulp

	```
		sudo npm install gulp -g
	```

2. Clone this repository in your working directory

	```
		git clone git@github.com:vicentegarcia/gulp-starter-template.git
	```

3. Install dependencies

	```
		npm install
	```

4. Start watching files for changes and run server

	```
		gulp
	```

A connect static http server runs over port 3002.
The editable files are in /src folder.

## License
The MIT License (MIT) Copyright © [Vicente García](http://vicentegarcia.com)

