angular.module("mainModule")
    .directive("successButton", [
        function () {
            return {
                restrict: "E",
                scope: {
                    clicked: "=ngModel"
                },
                templateUrl: "Scripts/Directives/Success-Button/Success-Button.html"
            };
        }
    ]);