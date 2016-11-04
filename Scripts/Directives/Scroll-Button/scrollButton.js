angular.module("mainModule")
    .directive("scrollButton", function () {
        return {
            scope: {            
                scrollButton: "="            
            },

            //här kollas hela listan och startar ifrån 0 när ett nytt värde kommer in.
            link: function (scope, element) {
                scope.$watchCollection('scrollButton', function (newValue) {
                    if (newValue) {
                        $(element).scrollTop($(element)[0].scrollHeight);
                    }
                });
            }
        }
    });