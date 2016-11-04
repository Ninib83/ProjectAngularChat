angular.module("mainModule")
    .filter("censor", [
        "censorGenerator",
        function (censorGenerator) {
            return function (input) {
                var output = input;

                var blacklist = [
                    "Idiot",
                    "Fan",
                    "Cp",
                    "Knäpp",

                ];

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