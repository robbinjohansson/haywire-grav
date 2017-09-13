# Haywire Grav Contributing Guide

Thank you for taking an interest in Haywire theme for Grav CMS, please follow the instructions below when contributing to the theme.

## Bug/Issue Reporting Guidelines

Create an [issue](https://github.com/robbinfellow/haywire-grav/issues) with detailed information regarding the bug/issue. Please follow the issue template guidelines provided when creating a new issue.

## Feature Request Guidelines

Create an [issue](https://github.com/robbinfellow/haywire-grav/issues) with detailed information regarding the feature request. Please follow the issue template guidelines provided when creating a new issue.

## Pull Request Guidelines

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `develop`, and merge back against that branch.

- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

## Development

``` bash
$ cd ~/grav/user/themes
$ git clone https://github.com/robbinfellow/haywire-grav.git
$ cd haywire-grav
$ yarn
$ yarn run dev / watch / production
```
