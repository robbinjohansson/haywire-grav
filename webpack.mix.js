const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
	], 'dist/js/vendor.js') 
   .js('js/_main.js', 'dist/js/main.js')
   .js('js/vue/app.js', 'dist/js/vue.js')
   .sass('scss/main.scss', 'dist/css/main.css');
