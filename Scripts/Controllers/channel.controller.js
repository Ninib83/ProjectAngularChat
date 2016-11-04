/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("ChannelController", [
        "$scope",
        "$routeParams",
        "serverApi",
        "$rootScope",
        "Hub",
        function ($scope, $routeParams, serverApi, $rootScope, Hub) {
            $scope.title = "Channel";
            $scope.newMessage = {};



            // API Länk för signalR
            var path = 'http://dummyapi.kodalagom.se/signalr';

            // API HUB
            var hub = new Hub('chatHub', {

                rootPath: path,

                listeners: {
                    'recieveMessage': function (message) {
                        $scope.$apply(function () {
                            $scope.data.channel.messages.push(message);
                        });

                        console.log('recieved: ' + message);
                    }

                },

                //Kollar alla kontakt errors
                errorHandler: function (error) {
                    console.error(error);
                },
                stateChanged: function (state) {
                    switch (state.newState) {
                        case $.signalR.connectionState.connecting:
                            console.log("signalR.connectionState.connecting" + state.newState);
                            //your code here
                            break;
                        case $.signalR.connectionState.connected:
                            console.log("signalR.connectionState.connected" + state.newState);
                            //your code here
                            break;
                        case $.signalR.connectionState.reconnecting:
                            console.log("signalR.connectionState.reconnecting" + state.newState);
                            //your code here
                            break;
                        case $.signalR.connectionState.disconnected:
                            console.log("signalR.connectionState.disconnected" + state.newState);
                            //your code here
                            break;
                    }
                }

            });
            
            // tittar på en variabel och reagerar på ändringar (uppdaterar feed efter ny infornmation)
            $scope.$watch("data.channels", function (channels) {
                $scope.data.channel = $scope.data.channels.filter(function (channel) {
                    return channel.id == $routeParams.id;
                })[0];
            });


            //Lägga till ett medelande
            $scope.addMessage = function () {
                $scope.newMessage.channelId = $scope.data.channel.id;
                serverApi.addMessage($scope.newMessage)
                    .then(function (data) {
                        //if (data != null)
                            //$scope.channel.messages.push(data);
                        $scope.newMessage = {};
                    });
            };
        }
    ]);
