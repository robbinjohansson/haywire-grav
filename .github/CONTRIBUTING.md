# Haywire Grav Contributing Guide

Thank you for taking an interest in Haywire theme for Grav CMS, please follow the instructions below when contributing to the theme.

## Bug Reporting

Create an issue using the [Bug Report Template.](https://github.com/robbinfellow/haywire-grav/issues/new?template=Bug_Report.md)

## Feature Request

Create an issue using the [Feature Request Template.](https://github.com/robbinfellow/haywire-grav/issues/new?template=Feature_Request.md)

## Pull Request

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch.

## Development

```shell
# @ path/to/grav/installation
$ cd user/themes/
$ git clone https://github.com/robbinfellow/haywire-grav.git haywire
$ cd haywire && yarn
$ yarn dev / watch / production
```
