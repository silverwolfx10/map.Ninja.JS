/**
 * $map
 *
 * Invoca a função callback passada por argumento para cada elemento
 * do Array e devolve um novo Array como resultado a funcao curry
 *
 * @module $map
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $map([1, 2, 3], $lambda('(a) => a * 2'));
 *
 */
Ninja.module('$map', ['$curry'], function ($curry) {
  
  /**
   * Invoca a função callback passada por argumento para cada elemento do Array
   * e devolve um novo Array como resultado
   *
   * @public
   * @method map
   * @param {Array} a Colecao de valores
   * @param {Array} b Funcao callback que manipula cada item do array
   * @return {Array} Novo array
   * @example
   * 
   *        $map([1, 2, 3], $lambda('(a) => a * 2'));
   *
   */
  function map(a, b) {
    return a.map(b);
  }
    
  /**
   * Revelacao do servico $map, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(map);
});
