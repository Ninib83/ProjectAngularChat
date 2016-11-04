angular.module("mainModule")
    .directive("scrollButton", function () {
        return {
            scope: {            
                scrollButton: "="            
            },
            link: function (scope, element) {
                scope.$watchCollection('scrollButton', function (newValue) {
                    if (newValue) {
                        $(element).scrollTop($(element)[0].scrollHeight);
                    }
                });
            }
        }
    });