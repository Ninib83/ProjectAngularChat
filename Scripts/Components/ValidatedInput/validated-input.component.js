angular.module("mainModule")
    .component("validatedInput", {
        templateUrl: "Scripts/Components/ValidatedInput/ValidatedInput.html",
        controller: function () {
            var ctrl = this;

            ctrl.setValid = function (isValid) {
                console.log(isValid);
            }
        },
        bindings: {
            type: "<",
            id: "<",
            label: "<",
            model: "=",
            isValid: "=",
            min: "<"
        }
    });