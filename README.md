# Haywire getgrav theme

Haywire is a modern starter theme for [getgrav](https://getgrav.org/). The idea behind the theme is to help developers to get started quickly on their new getgrav projects using modern frameworks and tools such as [yarn](https://yarnpkg.com/), [laravel-elixir](https://laravel.com/docs/5.3/elixir), [bootstrap](https://github.com/twbs/bootstrap-sass).

_Inspired by [Sage](https://roots.io/sage/) starter theme for wordpress by [roots](https://roots.io/)._

## Features

* Yarn
* Bootstrap-sass
* Laravel-elixir
* Gulp
* Bower

## Installation / Usage

1. Install [getgrav](https://getgrav.org/downloads)
2. `cd gravroot/user/themes`
3. `git clone https://github.com/robbinfellow/haywire-grav.git haywire`
4. `cd haywire`
5. `yarn`
6. `bower install`
7. `gulp`

The `templates/default.html.twig` is setup to display the latest subpages of your @home page as blogposts.

### Gulp

Compile assets => `gulp`

Watch scss/js => `gulp watch`

Minify assets => `gulp --production`

**Note:** _(compiled assets goes into the /dist directory)_

### Yarn

Install package => `yarn add packagename --save-dev`

Remove package => `yarn remove packagename --save-dev`

## Useful links

[yarn](https://yarnpkg.com/en/docs/)
[bootstrap-sass](https://github.com/twbs/bootstrap-sass)
[gulp](http://gulpjs.com/)
[laravel-elixir](https://laravel.com/docs/5.3/elixir)
[getgrav](https://learn.getgrav.org/)
[bower](https://bower.io/)
