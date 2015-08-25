### $map

Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado a funcao curry

```javascript
Ninja(['$lambda', '$map'], function ($lambda, $map) {
  console.log($map([1, 2, 3], $lambda('(a) => a * 2')));
});
```
