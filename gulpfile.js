const elixir = require('laravel-elixir');

var vendorScripts = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
];

var mainScripts = [
    './js/_main.js'
];

var mainSass = './scss/main.scss';

elixir.config.publicDir = './dist/';

elixir(function(mix) {
    mix.sass(mainSass, './dist/css/main.css');

    mix.scripts(vendorScripts, './dist/js/vendor.js');
    mix.scripts(mainScripts, './dist/js/main.js');
});
