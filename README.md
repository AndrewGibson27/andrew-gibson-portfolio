# Andrew Gibson's portfolio
I published the code so that, if you like my website, you can repurpose it for yourself!

## Build tasks

### Development
+ `npm run fetch-libs`: Get all CSS and JavaScript libraries from **/bower_components/**
+ `npm run bundle-libs`: Concatenate libraries
+ `npm run watch-js`: Use Watchify to rebundle JavaScript files when a change is made
+ `npm run watch-css`: Use Grunt to watch for changes in SCSS files and then recompile

### Production
+ `npm run bundle-prod`: Use Browserify to concatenate JavaScript files written in ES6
+ `npm run build`: Run master production build task

## License
MIT