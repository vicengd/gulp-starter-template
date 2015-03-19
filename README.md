# Gulp Starter Template

A Gulp.js starter template for development.

## Features
* JavaScript compressing with uglify.
* Compiles the SCSS files into CSS.
* Minify and copy CSS files.
* Auto reload all browsers with browser-sync when files change.
* Serves the static files to localhost:3002
* A responsive CSS Grid

## Prerequisites
You will require [node](http://nodejs.org) and [npm](https://npmjs.org) installed.

## Usage
1. Install global gulp

	```
		sudo npm install gulp -g
	```

2. Clone this repository in your working directory

	```
		git clone git@github.com:vicentegarcia/gulp-starter-template.git <project_name>
	```

3. Change to the directory project_name

	```
		cd <project_name>
	```

4. Install dependencies

	```
		npm install gulp gulp-minify-css gulp-rename gulp-sass gulp-uglify browser-sync --save-dev
	```

5. Start watching files for changes and run server

	```
		gulp
	```

A connect static http server runs over port 3000.
The editable files are in /src folder.

## License
The MIT License (MIT) Copyright © [Vicente García](http://vicentegarcia.com)

