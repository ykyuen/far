require.config({

  paths: {
    // AngularJS
    'angular'           : '../assets/libs/angular/angular',
    "uiRouter"          : '../assets/libs/angular-ui-router/release/angular-ui-router',
    // RequireJS
    'domReady'          : '../assets/libs/requirejs-domready/domReady',
    // Foundation
    "foundation"        : '../assets/libs/foundation/js/foundation',
    'fastclick'         : '../assets/libs/fastclick/lib/fastclick', // TODO: Needs to verify if it is really working in mobile.
    'jquery'            : '../assets/libs/jquery/dist/jquery',
    'jquery.cookie'     : '../assets/libs/jquery.cookie/jquery.cookie',
    'jquery-placeholder': '../assets/libs/jquery-placeholder/jquery.placeholder',
    // Hajime
    'hajime'            : '../assets/js/hajime'
  },

  /**
   * For libs that either do not support AMD out of the box, or
   * require some fine tuning to dependency managnment
   */
  shim: {
    // AngularJS
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    // Foundation
    'foundation': {
      deps: ['fastclick', 'jquery', 'jquery.cookie', 'jquery-placeholder']
    },
    'jquery.cookie': {
      deps: ['jquery']
    },
    'jquery-placeholder': {
      deps: ['jquery']
    },
    // Hajime
    'hajime': {
      deps: ['foundation'],
      exports : 'Hajime'
    }
  },
  
  /**
   * Kick start application... see bootstrap.js
   */
  deps: [
    './bootstrap'
  ]
});