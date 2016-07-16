angular.module('app.routes', [])



    .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'menuCtrl'
    })
        .state('app.login', {
        url: "/login",
        views: {
            'menuContent' :{
                templateUrl: "templates/login.html",
                controller: 'loginCtrl'
            }
        }
    })
        .state('app.cadastro', {
        url: "/cadastro",
        views: {
            'menuContent' :{
                templateUrl: "templates/cadastro.html",
                controller: 'cadastroCtrl'
            }
        }
    })
        .state('sobre',{
        url: '/sobre',
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
    })
        .state('app.home', {
        url: "/home",
        views: {
            'menuContent' :{
                templateUrl: "templates/home.html"
            }
        }
    })
        .state('app.cadastros', {
        url: "/cadastros",
        views: {
            'menuContent' :{
                templateUrl: "templates/cadastros.html"
            }
        }
    })
        .state('app.configuracao', {
        url: "/configuracao",
        views: {
            'menuContent' :{
                templateUrl: "templates/configuracao.html"
            }
        }
    })
        .state('app.cliente', {
        url: "/cliente",
        views: {
            'menuContent' :{
                templateUrl: "templates/cliente.html"
            }
        }
    })

    $urlRouterProvider.otherwise('/app/home')

});