/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("AdminController", [
        "$scope",
        "$routeParams",
        "serverApi",
        function ($scope, $routeParams, serverApi) {
            $scope.title = "Admin";
            $scope.newChannel = {};
            $scope.newChannelIsValid = false;

            //Lägga till en kanal
            $scope.addChannel = function () {
                serverApi.addChannel($scope.newChannel)
                     .then(function (data) {
                         if (data != null)
                             $scope.data.channels.push(data);
                         $scope.newChannel = {};
                     });
            };
            

            //Radera en kanal
            $scope.deleteChannel = function (channel) {
                serverApi.deleteChannel(channel.id)
                    .then(function () {
                        var index = $scope.data.channels.map(function (channel) {
                            return channel.id;
                        }).indexOf(channel.id);

                        $scope.data.channels.splice(index, 1);

                    });
            };


            // Sluta följa
            $scope.unsubscribe = function (id) {
                $scope.data.subscribedChannels = $scope.data.subscribedChannels.filter(function (subscribedChannel) {
                    return subscribedChannel != id;
                });
                $scope.saveSubscriptions();
                $scope.getFeed();
            };


            // tittar på en variabel och reagerar på ändringar (uppdaterar feed efter ny infornmation)
            $scope.$watch("data.subscribedChannels", function (newValue) {
                $scope.getFeed();
            })
        }
    ]);