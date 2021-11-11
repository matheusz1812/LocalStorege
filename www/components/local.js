var valor = 0;

$ (document).on("click", "#salvar", function(){
    var dados = {nome: $ ("#nome").val(), end: $ ("#endereco").val() };
    localStorage.setItem(valor, JSON.stringify(dados));
    valor++;
});

$ (document).on("click", "#buscar", function(){
  var pessoa =JSON.parse (LocalStorage.getItem($("#identificador").val()));
  $("nomeBusca").val(pessoa.nome);
   $("enderecoBusca").val(pessoa.end);
});

$ (document).on("click", "#limpar", function(){
  LocalStorage.getClear();
 LimparCampos();
});

$ (document).on("click", "#remover", function(){
  LocalStorage.removeItem($("#indentificador").val());
  LimparCampos();
});

function LimparCampos(){
    $("#nome").val("")
  $("#nomeBusca").val("");
  $("#indentificador").val("")
};