# Haywire getgrav theme

Haywire is a modern starter theme for [getgrav](https://getgrav.org/). The idea behind the theme is to help developers get started quickly on their new getgrav projects using modern frameworks and tools such as [yarn](https://yarnpkg.com/), [laravel-elixir](https://laravel.com/docs/5.3/elixir), [bootstrap](https://github.com/twbs/bootstrap-sass).

[Live demo](http://haywire.me/haywire-grav-demo/)

> **Note:** This theme is under active development, always use the `master` branch for the latest version.

## Features

* Yarn
* Bootstrap-sass
* Laravel-elixir
* Gulp
* Bower

## Installation / Usage

### bin/gpm
        
        $ cd ~/gravroot
        $ bin/gpm install haywire
        $ cd /user/themes/haywire
        $ yarn
        $ bower install
        $ gulp


### Manual installation
        
        $ cd ~/gravroot/user/themes
        $ git clone https://github.com/robbinfellow/haywire-grav.git haywire
        $ cd haywire
        $ yarn
        $ bower install
        $ gulp


### Demo

Copy the contents of `_demo/pages/` into your `user/pages/` folder for a quick demo content of your site.

### Gulp

Compile assets => `gulp`

Watch scss/js => `gulp watch`

Minify assets => `gulp --production`

> **Note:** _(compiled assets goes into the `/dist` directory)_

### Yarn

Install package => `yarn add packagename --save-dev`

Remove package => `yarn remove packagename --save-dev`

## Contribute

Contributions are welcome from everyone.

### Bug reports

Create an [issue](https://github.com/robbinfellow/haywire-grav/issues) with detailed information regarding the problem.

### Feature requests

Feature requests are more than welcome! Create an [issue](https://github.com/robbinfellow/haywire-grav/issues) or make a [pull request](https://github.com/robbinfellow/haywire-grav/pulls) with a detailed description of your request. 

## Donations

If this project helps you develop your grav-site in a faster, more efficient way, feel free to give me a cup of :coffee: :)

[![paypal.me/robbinfellow](https://www.paypalobjects.com/webstatic/paypalme/images/pp_logo_small.png)](https://www.paypal.me/robbinfellow)

## License

Haywire getgrav theme is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
