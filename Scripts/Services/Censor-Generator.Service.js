angular.module("mainModule")
    .service("censorGenerator", [
        function () {
            this.generateString = function (length) {
                var chars = [
                    "#", "&", "%", "*", "!", "?", "@"
                ];

                var censor = [];

                for (var i = 0; i < length; i++) {
                    censor.push(chars[Math.floor(Math.random() * (chars.length - 1))]);
                }

                return censor.join("");
            }


        }
    ]);