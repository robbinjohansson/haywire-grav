# Contributing

Thank you for taking an interest in contributing to `haywire-grav`. All contributions will be fully credited.

## Bug Reporting

Create an issue using the [Bug Report Template.](https://github.com/robbinworks/haywire-grav/issues/new?template=Bug_Report.md)

## Feature Request

Create an issue using the [Feature Request Template.](https://github.com/robbinworks/haywire-grav/issues/new?template=Feature_Request.md)

## Pull Request

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch.

- **Document any change in behaviour:** Make sure the `README.md`, `CHANGELOG.md` and any other relevant documentation are kept up-to-date.

- **One pull request per feature:** If you want to do more than one thing, send multiple pull requests.

## Development

``` shell
# @ path/to/grav/installation
$ cd user/themes/
$ git clone https://github.com/robbinworks/haywire-grav.git haywire
$ cd haywire && yarn
$ yarn dev / watch / production
```

**Happy coding**!
