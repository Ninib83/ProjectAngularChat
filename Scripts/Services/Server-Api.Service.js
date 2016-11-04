angular.module("mainModule")
    .service("serverApi", [
        "$http",
        "$q",
        function ($http, $q) {

            // hämtar API ifrån denna länk
            var api = "http://dummyapi.kodalagom.se/api";
            var channels = api + "/channels";
            var messages = api + "/messages";


            // hämta medelanden
            this.getMessages = function () {
                var deferred = $q.defer();

                $http.get(messages)
					.then(function (response) {
					    deferred.resolve(response.data);
					}, function (response) {
					    deferred.resolve([]);
					});
                return deferred.promise;
            };


            // Lägg till medelanden
            this.addMessage = function (newMessage) {
                var deferred = $q.defer();

                $http.post(messages, newMessage)
					.then(function (response) {
					    deferred.resolve(response.data);

					}, function () {

					    deferred.resolve([]);

					});
                return deferred.promise;
            };


            // hämta kanaler
            this.getChannels = function () {
                var deferred = $q.defer();

                $http.get(channels)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };


            // Lägg till kanaler
            this.addChannel = function (newChannel) {
                var deferred = $q.defer();

                $http.post(channels, newChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });
                return deferred.promise;
            };


            // Ta bort kanaler
            this.deleteChannel = function (id) {
                var deferred = $q.defer();

                $http.delete(channels + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });
                return deferred.promise;
            };
        }
    ]);