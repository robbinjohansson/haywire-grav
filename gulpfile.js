const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

var vendorScripts = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
];

var mainScripts = [
    './js/_main.js'
];

var vueScripts = [
    './js/vue/app.js'
];

var mainSass = './scss/main.scss';

elixir.config.publicDir = './dist/';

elixir(function(mix) {
    mix.sass(mainSass, './dist/css/main.css');

    mix.scripts(vendorScripts, './dist/js/vendor.js');
    mix.scripts(mainScripts, './dist/js/main.js');
    mix.webpack(vueScripts, './dist/js/vue.js');
});
