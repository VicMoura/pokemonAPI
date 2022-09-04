angular.module("pokemon").controller("pokemonCtrl", function ($scope, $http) {


  //Onde iremos armazenas os dados dos Pokemons
  $scope.pokemonDados = [];
 


  //Colocando a api de cada pokemon (251 pokemons)
  function generatePokemonDados() {
    var i;
    for (i = 1; i <= 251; i++) {
      var endPoint = '//pokeapi.co/api/v2/pokemon/' + i;
      $scope.pokemonDados.push({ endPoint: endPoint });
    }
  }


  //Obtendo os dados do pokemon 
  function getStats(pokemonIndex) {
    var pokemon = $scope.pokemonDados[pokemonIndex];
    $http.get(pokemon.endPoint)
      .then(function (res) {
        pokemon.pokemonName = res.data.name;
        pokemon.pokemonImage = res.data.sprites.front_default;
        pokemon.pokemonID = res.data.id;
      });
  }



  //Obtendo os  251 pokemons
  function popular() {
    var i;
    for (i = 0; i < $scope.pokemonDados.length; i++) {
      getStats(i);
    }
  }



  //Chamando as funções para popular 
  generatePokemonDados();
  popular();

 

}); 