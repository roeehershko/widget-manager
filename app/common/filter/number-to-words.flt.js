/**
 * Created by roee on 18/04/2016.
 */
angular.module('app.common.directives')
    .filter('numberToWords', function () {
            return function(input) {
                return numberToWords.toWords(parseInt(input) || 0);
            }
        }
    );
