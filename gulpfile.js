const elixir = require('laravel-elixir');

var vendorScripts = [
    './vendor/bootstrap-sass/assets/javascripts/bootstrap.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/button.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
    './vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
    './vendor/jquery/dist/jquery.js'
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
