/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "serverApi",
        function ($scope, $location, $route, serverApi) {
            $scope.$route = $route;
            $scope.formInputs = [{
                type: "text",
                id: "name",
                label: "Name",
                model: "",
                isValid: false
            }, 
            ];
            $scope.submitForm = function () {
                alert("TODO: Submit form properly");
            };

            $scope.data = {
                messages: [],
                channel: {},
                channels: [],
                subscribedChannels: [],
                feed: [],
                notes: [
                    {
                        id: 1,
                        name: "Title 1"
                    }
                ],


            };





           

            // Loppar igenom alla subscriptions i en array och anger olika världen
            $scope.getFeed = function () {
                angular.forEach($scope.data.channels, function (channel) {
                    if ($scope.data.subscribedChannels.indexOf(channel.id) != -1)
                        channel.subscribed = true;
                    else
                        channel.subscribed = false;
                });
            }


            // Hämtar channels ifrån data Api
            serverApi.getChannels()
                .then(function (data) {
                    if (data != null) {
                        $scope.data.channels = data;
                               
                    }
                });




            // Hämtar message ifrån Api
            serverApi.getMessages()
                .then(function (data) {
                    if (data != null) {
                        $scope.data.messages = data;
                    }
                });





            // Följa en kanal
            $scope.subscribe = function (id) {
                $scope.data.subscribedChannels.push(id);            
                $scope.saveSubscriptions();
                $scope.getFeed();
            };





            // ladda upp favorit med json
            $scope.loadSubscriptions = function () {
                var dataString = localStorage.getItem("subscribedChannels");
                if (dataString) {
                    $scope.data.subscribedChannels = JSON.parse(dataString);
                }
            };


            // spara favorit till jason
            $scope.saveSubscriptions = function () {
                var jsonString = JSON.stringify($scope.data.subscribedChannels);
                localStorage.setItem("subscribedChannels", jsonString);
            };

            $scope.loadSubscriptions();

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);