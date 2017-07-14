angular.module('app.main')
    .controller('SignInCntl', function ($scope, $location, appContext, signIn) {
        'use strict';

        function signInSuccessCallback() {
            appContext.getCurrentUser().then(function (currentUser) {
                $location.url(currentUser.getHomeDialogPath());
                console.log("controller signin");
                //$location.url("dashboard");
            });
        }
        this.getLoginForm = function() {
            return $scope.loginForm;
        };
        signIn(this, signInSuccessCallback);
    });
