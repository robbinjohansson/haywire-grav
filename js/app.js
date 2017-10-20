/**
* Include polyfill for vue (IE)
*/

import "babel-polyfill";

/**
 * Load all of this project's JavaScript dependencies including Vue
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Create a fresh Vue application instance and attach it to
 * the page. You may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('navbar', require('./components/Navbar.vue'));

const app = new Vue({
    el: '#app'
});
