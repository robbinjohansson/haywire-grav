# v0.4.3
## 05/21/2018

1. [](#improved)
    * Remove redundant code from `Navbar.vue`
    * Remove empty `bootstrap.js`
2. [](#bugfix)
    * Fix issue with page/post media being used incorrectly. Switch to `cropZoom` instead of `cropResize`. ([#26](https://github.com/robbinfellow/haywire-grav/issues/26), [#27](https://github.com/robbinfellow/haywire-grav/pull/27), [b76ebfc](https://github.com/robbinfellow/haywire-grav/commit/b76ebfcf3a90378d7caf9bcbc002ea9848e54fc1))

# v0.4.2
## 05/03/2018

1. [](#improved)
    * Upgrade to Bulma `^0.7.1`
2. [](#bugfix)
    * Fix indentation in `blueprints.yaml`
    * Fix typos in `Navbar.vue`
    * Do not output empty classname(s) to `<body>`

# v0.4.1
## 03/29/2018

1. [](#new)
    * New `post.html.twig` partial
2. [](#improved)
    * Add 2 space indentation to `*.json` files (`.editorconfig`)
    * Add yarn/npm logs to `.gitignore`
    * Update npm dependencies

# v0.4.0
## 03/01/2018

1. [](#new)
    * Add favicon
    * Add intro to blog items
    * Add tags to blog items
2. [](#improved)
    * Remove redundant blueprints
    * Update theme languages strings
    * Improve blog item blueprints
    * Update theme screenshot/thumbnail (now uses correct ratio/sizes)
    * Update demo pages
    * Add `.is-right` modifier to navbar-dropdown by default
    * Remove `_general.sass`
    * Redesign all page templates
    * Overall markup improvements
    * Dates are now printed using `nicetime()`
    * Reset style of bulma `box` element
    * Post `thumbnail` > `featured_image`

# v0.3.5
## 02/12/2018

1. [](#bugfix)
    * Add jquery if debugger is enabled ([#16](https://github.com/robbinfellow/haywire-grav/issues/16), [6428f09](https://github.com/robbinfellow/haywire-grav/commit/6428f092123e47af788865f1002cab697222eb90))

# v0.3.4
## 02/09/2018

1. [](#improved)
    * Prevent RuntimeException on external templates ([#12](https://github.com/robbinfellow/haywire-grav/issues/12), [5354003](https://github.com/robbinfellow/haywire-grav/commit/53540039bf60ae6a4322bd16cec28565b927bcc8))
    * Improve asset cache busting handler ([#14](https://github.com/robbinfellow/haywire-grav/issues/14), [#15](https://github.com/robbinfellow/haywire-grav/issues/15), [28fce37](https://github.com/robbinfellow/haywire-grav/commit/28fce37a152e6eac772fd47defe5f11c89e281b5))

# v0.3.3
## 01/22/2018

1. [](#new)
    * Add .editorconfig
2. [](#improved)
    * Update `_demo/` pages markdown
    * Update theme screenshots
    * Bundle working assets to `resources/` folder
    * Fix to Bulma navbar-burger ([#1580](https://github.com/jgthms/bulma/issues/1580), [#1515](https://github.com/jgthms/bulma/issues/1515))

# v0.3.2
## 01/09/2018

1. [](#new)
    * Add asset cache busting
2. [](#improved)
    * Improve template markup

# v0.3.1
## 11/13/2017

1. [](#improved)
    * Add markup to `error.html.twig`
    * Up dependencies

# v0.3.0
## 10/20/2017

1. [](#new)
    * Replace Bootstrap with Bulma
    * Replace `scss` syntax with `sass`
2. [](#improved)
    * Add responsive navbar toggle using Vue
    * Repo improvements, add issue template
    * Remove jquery
    * Add additional templates

# v0.2.7
## 09/23/2017

1. [](#improved)
    * Up dependencies
    * Improve file structure
    * Improve theme base

# v0.2.6
## 07/29/2017

1. [](#new)
    * Remove demo site
2. [](#improved)
    * Update dependencies

# v0.2.5
## 06/18/2017

1. [](#improved)
    * Improve sass structure

# v0.2.4
## 06/07/2017

1. [](#improved)
    * Update `_demo` pages [PR #6](https://github.com/robbinfellow/haywire-grav/pull/6)

# v0.2.3
## 06/06/2017

1. [](#new)
    * Add babel polyfill for IE support (Vue)
    * npm > yarn
2. [](#improved)
    * Update dependencies
    * Remove vendor.js
    * Remove main.js
    * Bundle all scripts to app.js
    * Renamed main.css/js to app.css/js

# v0.2.2
## 04/06/2017

1. [](#bugfix)
    * Update [demo-site](http://grav.haywire.me/) with new url.

# v0.2.1
## 03/11/2017

1. [](#improved)
    * Yarn -> npm
    * Laravel Elixir -> Laravel Mix

# v0.2.0
## 02/26/2017

1. [](#improved)
    * Add [vuejs](http://vuejs.org/)
    * Add vue example component (`/js/vue/components/Example.vue`)
    * Support `.vue` files
2. [](#bugfix)
    * Remove footer from item template

# v0.1.9
## 02/24/2017

1. [](#improved)
    * Remove bower (use yarn instead) [PR #3](https://github.com/robbinfellow/haywire-grav/pull/3)
    * Modify gulp imports [PR #3](https://github.com/robbinfellow/haywire-grav/pull/3)
    * Improve `item.yaml` template
2. [](#bugfix)
    * Gulp should require jquery first [PR #3](https://github.com/robbinfellow/haywire-grav/pull/3)

# v0.1.8
## 02/18/2017

1. [](#bugfix)
    * Add correct devDependencies in `package.json`
    * Fix typo in docs
    * Modify theme description

# v0.1.7
## 02/17/2017

1. [](#bugfix)
    * Fix path to blogitems
    * Force update of theme screenshot
    * Minify assets

# v0.1.6
## 02/17/2017

1. [](#new)
    * Ability to toggle featured image on items from backend
    * Placeholder image for featured image when empty
    * Title of blogposts is now wrapped with a link to the post
    * Navigation list items gets the class of their slug
    * Class `.dropdown` is added to navigation submenus
    * Custom blueprint for external pages
    * External pages in navigation opens in a new window
2. [](#improved)
    * Minor update to item template layout
    * Navigation submenu is now enabled by default
    * Clean up navigation twig template
    * Updated demo content
    * Updated theme details
    * Global style/layout updates

# v0.1.5
## 02/14/2017

1. [](#bugfix)
    * Fix path to featured image

# v0.1.4
## 02/14/2017

1. [](#new)
    * Added custom blueprints
    * Added custom language settings
    * Added featured image to blog item
2. [](#improved)
    * Restructured twig templates
    * Cleaner base twig template
    * Better blog functionality
    * New theme thumbnail
    * New theme screenshot
    * Updated demo site
    * Updated `_demo`
3. [](#bugfix)
    * Removed unused scss files

# v0.1.3
## 02/10/2017

1. [](#new)
    * Demo content of pages > `_demo/pages/` - [#1](https://github.com/robbinfellow/haywire-grav/issues/1)
    * Added [live demo](http://haywire.me/haywire-grav-demo/) - [#2](https://github.com/robbinfellow/haywire-grav/issues/2)
2. [](#improved)
    * Updated theme specific details for better overview
    * Updated changelog to correct formats

# v0.1.2
## 01/31/2017

1. [](#new)
    * Display date created on each post at homepage
2. [](#improved)
    * Remove unused gulp dependencies from `package.json`
    * Better thumbnail image
    * More accurate theme description

# v0.1.1
## 01/31/2017

1. [](#improved)
    * Update theme details & clean up
