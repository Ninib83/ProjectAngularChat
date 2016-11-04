angular.module("mainModule")
    .service("censorGenerator", [
        function () {
            //Här anges symboler som ersätter bokstäver som det censurerade ordet.
            this.generateString = function (length) {
                var chars = [
                    "#", "&", "%", "*", "!", "?", "@"
                ];

                var censor = [];

                // Här loopas ordet igenom och ersätts med symboler.
                for (var i = 0; i < length; i++) {
                    censor.push(chars[Math.floor(Math.random() * (chars.length - 1))]);
                }

                return censor.join("");
            }


        }
    ]);