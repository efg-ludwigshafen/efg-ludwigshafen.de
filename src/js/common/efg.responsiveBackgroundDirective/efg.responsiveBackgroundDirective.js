'use strict';

angular
  .module('efg.responsiveBackgroundDirective', [
    'efg.responsiveService',
    'efg.responsiveFilter',
    'ng'
  ])
  .directive('responsiveBackground', function(responsive, $filter, $log) {
    var cache = {};

    return {
      restrict: 'A',
      link: function($scope, $element, $attributes) {
        /** @type {boolean} */
        var isdark = $attributes.responsiveBackgroundDark === 'true';
        /** @type {string} */
        var src = $attributes.responsiveBackground;
        /** @type {string} */
        var cacheid = $filter('responsive')(src);
        /** @type {HTMLImgElement} */
        var tmpimg;

        if (!src) {
          return;
        }

        /**
         * @param {string} path the path to the image that should become the
         * background image
         * @return {string} background image that shows the image
         */
        function backgroundImage(path) {
          return [
            isdark && 'linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.7))',
            'url(' + path + ')'
          ]
            .filter(Boolean)
            .join(',');
        }

        if (!(cacheid in cache)) {
          $element.css({
            backgroundImage: backgroundImage(
              responsive.isimage(src) && responsive.isasset(src)
                ? responsive.assetprefix +
                    'xs/' +
                    src.slice(responsive.assetprefix.length)
                : src
            )
          });
          tmpimg = document.createElement('img');
          tmpimg.style.position = 'absolute';
          tmpimg.style.top = '-100000px';
          tmpimg.src = cacheid;
          tmpimg.addEventListener('load', function() {
            $element.css({
              backgroundImage: backgroundImage(cacheid)
            });
            cache[cacheid] = true;
            document.body.removeChild(tmpimg);
          });
          document.body.appendChild(tmpimg);
        } else {
          $element.css({
            backgroundImage: backgroundImage(cacheid)
          });
        }
      }
    };
  });
