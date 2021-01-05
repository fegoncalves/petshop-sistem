
function preenchimentoCampos(registroPet, nomePet, tipoPet, idadePet) {
  let registro = document.getElementById(registroPet).value;
  let nome = document.getElementById(nomePet).value;
  let tipo = document.getElementById(tipoPet).value;
  let idade = document.getElementById(idadePet).value;
  cadastrarPet(registro, nome, tipo, idade);
}




function cadastrarPet(registro, nome, tipo, idade) {
  let petCadastro = { register: registro, name: nome, type: tipo, age: idade };
  let cadastros = localStorage.getItem("dadosCadastros"); 
  if (cadastros == null) cadastros = [];
  else cadastros = JSON.parse(cadastros);
  cadastros.push(petCadastro);
  localStorage.setItem("dadosCadastros", JSON.stringify(cadastros)) 
  alert("O cadastro do pet " + nome + " foi feito com sucesso!");
  location.reload();
}




function listarCadastros() {
  let cadastros = localStorage.getItem("dadosCadastros");
  document.write("<h1>Consulta de Cadastros:</h1>")
  if (cadastros == null)
    document.write("<h3>Ainda não há cadastros realizados para consultar.</h3>");
  else {
    cadastros = JSON.parse(cadastros);
    cadastros.forEach(cadastro => {
      document.write("<ul>");
      document.write("<li>Código de Registro: " + cadastro.register + "</li>");
      document.write("<li>Nome do Pet: " + cadastro.name + "</li>");
      document.write("<li>Tipo do Pet: " + cadastro.type + "</li>");
      document.write("<li>Idade do Pet: " + cadastro.age + "</li>");
      document.write("</ul><p></p>");
    });
  }
}



function limparStorage(limpar){
  localStorage.clear(limpar);
  window.location = window.location;
}