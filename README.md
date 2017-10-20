[![GitHub release](https://img.shields.io/github/release/robbinfellow/haywire-grav.svg?style=flat-square)](https://github.com/robbinfellow/haywire-grav/releases) [![](https://img.shields.io/github/issues-raw/robbinfellow/haywire-grav.svg?style=flat-square)](https://github.com/robbinfellow/haywire-grav/issues) [![license](https://img.shields.io/github/license/robbinfellow/haywire-grav.svg?style=flat-square)](https://github.com/robbinfellow/haywire-grav/blob/master/LICENSE)

# Boilerplate/theme for Grav CMS

Haywire is a modern starter theme for [Grav](https://getgrav.org/). The idea behind the theme is to help developers get started quickly on their new grav projects using modern frameworks and tools such as [Laravel Mix](https://github.com/JeffreyWay/laravel-mix#readme), [Vuejs](http://vuejs.org/), [Bulma](https://github.com/jgthms/bulma).

**_It is recommended that you install the [admin-plugin package](https://github.com/getgrav/grav-plugin-admin) when using this theme._**

> This theme is under active development, use `master` branch for the latest stable version.

## Features

* Laravel Mix
* Bulma
* Vuejs

## Installation / Usage

### (Recommended) bin/gpm ([Grav Package Manager](http://learn.getgrav.org/advanced/grav-gpm))

``` bash
# @ path/to/grav/installation
$ bin/gpm install haywire
$ cd user/themes/haywire
$ yarn && yarn run production
```

### Manual installation

``` bash
# @ path/to/grav/installation
$ cd user/themes/
$ git clone https://github.com/robbinfellow/haywire-grav.git haywire
$ cd haywire
$ yarn && yarn run production
```

### Activate theme

After installation navigate to `user/config/system.yaml` and update the theme:
``` yaml
pages:
  theme: haywire
```

### Demo

Installing through bin/gpm will prompt you to install the demo content automatically.

However if you install the theme manually you can copy the contents of `user/themes/haywire/_demo/pages/` into your `user/pages/` folder for a quick demo content of your site.

### Laravel Mix

``` bash
# Compile assets without minification
$ yarn run dev
# Watch working assets
$ yarn run watch
# Minify and compile assets for production
$ yarn run production
```

> Compiled assets goes into the `/dist` directory, these files are generated for you through Laravel Mix, you should **not** edit these files manually!

## Updating

### bin/gpm update

The easiest way to update this theme is via the Grav Package Manager:

``` bash
$ bin/gpm update haywire
```

## Contribute

Contributions are welcome from everyone, see [contributions.](.github/CONTRIBUTING.md)

## Donations

If this project helps you develop your grav-site in a faster, more efficient way, feel free to give me a cup of :coffee: :)

[![paypal.me/robbinfellow](https://www.paypalobjects.com/webstatic/paypalme/images/pp_logo_small.png)](https://www.paypal.me/robbinfellow)

## License

Haywire grav theme is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
