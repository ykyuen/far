# Foundation + AngularJS + RequireJS

## [Outstanding problem](#gulp-optimize)

## Getting Started

1. Check out the project.

1. Move to the project root directory.

1. Install the node modules.

  ```
  npm install
  ```

1. Install the bower packages.

  ```
  bower install
  ```

1. Build the project and start the dev server

  ```
  gulp
  ```

1. Open the browser and visit [http://localhost:10000](http://localhost:10000).

## Build logic

### gulp clean

Clean the project assets including:

* css
* libs

### gulp libs

Copy the libraries from **bower_components** to the *www/assets/libs* folder.

### gulp zf

Copy the foundation **_settings.scss** and **_functions.scss** to the assets scss folder if it doesn't exist. In other words, it only copies if it is a fresh checkout.

You can override the Foundation variables in this **_settings.scss** instead of the one comes with the bower package.

### gulp jsmin

Minified the js files inside the *www/assets/libs* folder. It only minifies without concatenating them.

### gulp sass

Compiled the **app.scss** in *www/assets/scss* and livereload it in dev mode.

### gulp reload

Livereload when there is changes in **.html** or **.js**.

### gulp watch

Watch the **.html**, **.scss** and **.js** files and trigger liverelaod when they are modified in dev mode.

### gulp optimize

**NOT YET IMPLEMENTED**

I need help as i have tried both [gulp-requirejs-optimize](https://www.npmjs.com/package/gulp-requirejs-optimize) and [amd-optimize](https://github.com/scalableminds/amd-optimize) but neither of them could compile all js files into a single file.

## Development with Foundation

I follow the [Drupal ZURB Foundation](https://www.drupal.org/project/zurb_foundation) theme setup and setup the [SMACSS](https://smacss.com/) folder structure. You could add your own **.scss** files in the follower folders under the SMACSS](https://smacss.com/) architecture and import them in **app.scss**.

* www/assets/scss/base
* www/assets/scss/layout
* www/assets/scss/module
* www/assets/scss/state
* www/assets/scss/theme

As mentioned before, you could also update the *www/assets/scss/foundation/_settings.scss* to override the default Foundation variables.

Instead of using the standard foundation syntax. It is suggest to use angular directives to implement those Foundation components otherwise you have to re-initialize the foundation everytime when the view is updated. Please refer to the following post about how to setup Foundation directives in AngularJS.

[AngularJS directives of Foundation | Eureka!](http://eureka.ykyuen.info/2014/07/17/angularjs-directives-of-foundation/)

## Routing Framework

[AngularUI Router](https://github.com/angular-ui/ui-router)

## Reference

Thanks the authors of the following articles which are very helpful.

* [Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
* [AngularJS Best Practices: Directory Structure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)
* [Using RequireJS in AngularJS Applications](http://www.sitepoint.com/using-requirejs-angularjs-applications/)
* [AngularJS + RequireJS](https://www.startersquad.com/blog/angularjs-requirejs/)

