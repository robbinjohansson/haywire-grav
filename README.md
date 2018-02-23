[![GitHub release](https://img.shields.io/github/release/robbinfellow/haywire-grav.svg?style=flat-square)](https://github.com/robbinfellow/haywire-grav/releases) [![](https://img.shields.io/github/issues-raw/robbinfellow/haywire-grav.svg?style=flat-square)](https://github.com/robbinfellow/haywire-grav/issues) [![license](https://img.shields.io/github/license/robbinfellow/haywire-grav.svg?style=flat-square)](https://github.com/robbinfellow/haywire-grav/blob/master/LICENSE)

# Starter theme for Grav CMS

A modern starter theme for [Grav CMS](https://github.com/getgrav/grav) using modern frameworks and tools such as [Laravel Mix](https://github.com/JeffreyWay/laravel-mix), [Vuejs](https://github.com/vuejs/vue), [Bulma](https://github.com/jgthms/bulma).

## Features

* Laravel Mix
* Bulma
* Vuejs

## Installation / Usage

### (Recommended) bin/gpm ([Grav Package Manager](http://learn.getgrav.org/advanced/grav-gpm))

```shell
# @ path/to/grav/installation
$ bin/gpm install haywire
$ cd user/themes/haywire
$ yarn && yarn run production
```

### Manual installation

```shell
# @ path/to/grav/installation
$ cd user/themes/
$ git clone https://github.com/robbinfellow/haywire-grav.git haywire
$ cd haywire
$ yarn && yarn run production
```

> This theme is in active development, use `master` branch for the latest stable version.

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
$ yarn run dev

# Watch working assets
$ yarn run watch

# Minify and compile assets for production
$ yarn run production
```

> Compiled assets goes into the `dist/` directory, these files are generated for you through Laravel Mix, you should **not** edit these files manually! Your working directory is `resources/`.

## Updating

### bin/gpm update

The easiest way to update this theme is via the Grav Package Manager:

```shell
$ bin/gpm update haywire
```

## Contribute

If you're interested in contributing, please read the [contribution guidelines.](https://github.com/robbinfellow/haywire-grav/blob/develop/.github/CONTRIBUTING.md)

## Credits

* [Robbin Johansson](https://github.com/robbinfellow)
* [All Contributors](https://github.com/robbinfellow/haywire-grav/graphs/contributors)

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/robbinfellow)

## License

Haywire grav theme is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
