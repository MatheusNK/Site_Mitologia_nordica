let button = document.getElementById('popuser') /* variavel do botao */
let modal = document.getElementById('popup') /* variavel da janela popup */
let fechar = document.getElementById('fechar') /* variavel que vai fechar o popup */

button.onclick = function(){ /* quando cliclar na variavel botao */
  modal.showModal() /* abre o popup */
}

fechar.onclick = function(){ /* quando cliclar na variavel fechar */
  modal.close() /* fecha o popup */
}