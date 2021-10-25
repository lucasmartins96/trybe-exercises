Antes de começar faça o setup básico para sua aplicação ter a comunicação do socket preparada do lado do cliente e do lado do servidor.

1. Faça com que quando o cliente clicar no elemento com o id likeIcon , seja emitido um evento likePost para o servidor.

2. Do lado do servidor faça um listener para capturar o evento likePost que vai incrementar a quantidade atual de likes do post.

# 3. Emita um evento updateLikes apenas para o cliente que enviou o like enviando a quantidade atual de likes.

4. Modifique o código feito no exercício anterior para com que o evento updateLikes seja enviado para todos os clientes conectados.
5. Faça com que o ícone com id starIcon emita um evento starPost e atualize a quantidade diretamente pelo front-end.
6. No servidor implemente um listener para o evento starPost e emita um evento updateStars com a quantidade para todos os clientes exceto o cliente que enviou o evento.
7. Implemente um listener para o evento updateStars para atualizar a quantidade atual de estrelas.
