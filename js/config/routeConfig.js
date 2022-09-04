
angular.module("pokemon").config(function($routeProvider) {

    //Botando a rota para onde temos todos os pokemons e a buca
    $routeProvider.when("/pokemonsView", {
        templateUrl: "view/pokemonsView.html",
        controller:  "pokemonCtrl"
    });

    // Rota para a info, passando id como parâmetro 
    $routeProvider.when("/info/:id", {
        templateUrl: "view/info.html",
        controller:  "infoPokemonCtrl"
    });

    //Tela com infos sobre o site
    $routeProvider.when("/about", {
        templateUrl: "view/about.html",

    });

    //Colocando que qualquer outra rota diferente vai para a principal. 
    $routeProvider.otherwise({redirectTo: "/pokemonsView"});


});