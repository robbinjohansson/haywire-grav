[![Latest GitHub Release](https://img.shields.io/github/release/robbinworks/haywire-grav.svg?style=flat-square)](https://github.com/robbinworks/haywire-grav/releases)
[![Open Issues On Github](https://img.shields.io/github/issues-raw/robbinworks/haywire-grav.svg?style=flat-square)](https://github.com/robbinworks/haywire-grav/issues)
[![Software License](https://img.shields.io/github/license/robbinworks/haywire-grav.svg?style=flat-square)](https://github.com/robbinworks/haywire-grav/blob/master/LICENSE)

> This theme is in active development, use `master` branch for the latest stable version.

# Starter theme for Grav CMS

Starter theme for [Grav CMS](https://github.com/getgrav/grav) using modern tools and frameworks such as [Laravel Mix](https://github.com/JeffreyWay/laravel-mix), [Vuejs](https://github.com/vuejs/vue), [Bulma](https://github.com/jgthms/bulma).

## Features

* Laravel Mix
* Vuejs
* Bulma

## Installation / Usage

### (Recommended) bin/gpm ([Grav Package Manager](http://learn.getgrav.org/advanced/grav-gpm))

```shell
# @ path/to/grav/installation
$ bin/gpm install haywire
$ cd user/themes/haywire
$ yarn && yarn production
```

### Manual installation

```shell
# @ path/to/grav/installation
$ cd user/themes/
$ git clone https://github.com/robbinworks/haywire-grav.git haywire
$ cd haywire
$ yarn && yarn production
```

### Activate theme

After installation navigate to `user/config/system.yaml` and update the theme:
``` yaml
pages:
  theme: haywire
```

### Demo

Installing through bin/gpm will prompt you to install the demo content automatically.

However if you install the theme manually, copy the contents of `user/themes/haywire/_demo/pages/` into your `user/pages/` folder for a quick demo content of your site.

### Laravel Mix

Laravel Mix is preconfigured when installing a fresh instance of this theme. However it might be a good idea to review the full documentation [on GitHub.](https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme)

```shell
# Compile assets without minification
$ yarn dev

# Watch working assets
$ yarn watch

# Minify and compile assets for production
$ yarn production
```

> Compiled assets goes into the `dist/` directory, these files are generated for you through Laravel Mix, you should **not** edit these files manually! Your working directory is `resources/`.

## Updating

### bin/gpm update

The easiest way to update this theme is via the Grav Package Manager:

```shell
$ bin/gpm update haywire
```

## Contribute

If you're interested in contributing, please read the [contribution guidelines.](.github/CONTRIBUTING.md)

## Credits

* [Robbin Johansson](https://github.com/robbinworks)
* [All Contributors](https://github.com/robbinworks/haywire-grav/graphs/contributors)

## License

Haywire grav theme is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
