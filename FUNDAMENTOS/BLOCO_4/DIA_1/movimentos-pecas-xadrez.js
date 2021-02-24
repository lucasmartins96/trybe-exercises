let pecaXadrez;
pecaXadrez = 'peÃo';

switch (pecaXadrez.toLowerCase()) {
  case 'rainha':
    console.log('Move-se em qualquer direção em qualquer quantidade de casas');
    break;
  case 'rei':
    console.log('Move-se em qualquer direção, mas somente 1 casa por jogada!');
    break;
  case 'cavalo':
    console.log('Move-se em L ou seja, 2 casas na vertical e 1 na horizontal ou 2 casas na horizontal e 1 na vertical!');
    break;
  case 'peão':
  case 'peao':
    console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas!');
    break;
  case 'bispo':
    console.log('Move-se na diagonal, quantas casas quiser!');
    break;
  case 'torre':
    console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
    break;
  default:
    console.log('Peça inválida!');
}

/*
fonte:
cavalo, peão, torre e bispo: <https://www.soxadrez.com.br/conteudos/movimentos/>
cavalo, peão, torre e bispo: <https://www.soxadrez.com.br/conteudos/movimentos/p1.php>
*/