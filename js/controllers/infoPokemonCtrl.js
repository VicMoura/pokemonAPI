angular.module("pokemon").controller("infoPokemonCtrl", function ($scope, $http, $routeParams) {

    //Dados para mostrar as infos do pokemon
    $scope.pokemon = [];
    var pokemon = $scope.pokemon;

    //Pegado parametro do route
    var id = $routeParams.id;
    $http.get("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(function (res) {
            pokemon.pokemonName = res.data.name;
            pokemon.pokemonExperience = res.data.base_experience;
            pokemon.pokemonImage = res.data.sprites.front_default;
            pokemon.pokemonData = res.data;
            pokemon.pokemonID = res.data.id;
            pokemon.pokemonHabilidade = res.data.abilities;
            pokemon.pokemonTypes = res.data.types;
            pokemon.pokemonStats = res.data.stats;

        });


}); 