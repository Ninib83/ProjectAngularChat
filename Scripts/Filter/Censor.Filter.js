angular.module("mainModule")
    .filter("censor", [
        "censorGenerator",
        function (censorGenerator) {
            return function (input) {
                var output = input;

                //Svart Lista (Ord som ska censureras).
                var blacklist = [
                    "Idiot",
                    "Fan",
                    "Cp",
                    "Knäpp",

                ];

                // Här kollar den igenom så att ordet matchar och sedan ersätter ordet med censur symbolerna.
                angular.forEach(output, function (word) {
                    angular.forEach(blacklist, function (blacklistedWord) {
                        for (var key in word)
                            if (word.hasOwnProperty(key) && typeof (word[key]) == typeof (""))
                                word[key] = word[key].replace(new RegExp(blacklistedWord, "i"),
                                                              censorGenerator.generateString(blacklistedWord.length));
                    });
                });

                return output;
            }
        }
    ]);