function leDados() { /* Função que lê os dados já existentes */
  let strDados = localStorage.getItem('telaForum');
  let objDados;

  if (strDados) {
    objDados = JSON.parse(strDados);
  }
  else {
    objDados = {
      publicacao: [
        //Area de publicação   
      ]
    }
  }

  return objDados;
}

function salvaDados(dados) { /* Função que salva os dados em formato String */
  localStorage.setItem('telaForum', JSON.stringify(dados));
}

function incluirContato() {/* Função que lê e salva os dados postados na página */
  // Ler os dados do localStorage
  let objDados = leDados();

  // Incluir um novo contato
  let strNome = document.getElementById('campoNome').value;
  let strPub = document.getElementById('pub').value;
  let novaPub = {
    Nome: strNome,
    Publicacao: strPub
  };
  objDados.publicacao.unshift(novaPub);

  // Salvar os dados no localStorage novamente
  salvaDados(objDados);

  // Atualiza os dados da tela
  imprimeDados();
}

function imprimeDados() { /* Função mostra os dados postados em uma div especifica */
  let tela = document.getElementById('verForum');
  let strHtml = '';
  let objDados = leDados();
  var count = 1;

  for (i = 0; i < objDados.publicacao.length; i++) {
    strHtml += `<div id="post${count}" class="postagem">
                        <div id="nome"><p>${objDados.publicacao[i].Nome}:</p>
                        </div><p>${objDados.publicacao[i].Publicacao}</p><br>
                        <button id="button${count}" onclick="criaResposta(this.id)"> Responder </button>
                    </div>`
    count++;
  }

  tela.innerHTML = strHtml;
}

function criaResposta(id) { //Cria a caixa de texto abaixo do topico que se deseja responder.
  id = id.replace("button", "");
  let postagem = document.getElementById("post" + id); //Numero do post pelo ID do botão

  //Cria um campo de texto para a resposta com o ID variavel de acordo com o número do post.
  let strHtml = `\n <div id="campoResp${id}" class="txtAreaResposta">  
                <br>
                <textarea name="resposta" id="respArea${id}" placeholder="Escreva aqui sua resposta."></textarea><br>
                <button id="buttonResp${id}" onclick="enviaResposta(this.id)"> Enviar </button>
                <button id="buttonCancel${id}" onclick="removeTxtResposta(this.id)"> Cancelar </button>
                </div>`
  postagem.innerHTML += strHtml;
  document.getElementById("button" + id).disabled = true;
}

function enviaResposta(id) { //Envia a resposta no seguinte formato:
  // Resposnta (numero do post) - (Numero da resposta)
  id = id.replace("buttonResp", "");

  let postagem = document.getElementById("post" + id);
  txtResp = document.getElementById("respArea" + id).value;
  var auxResp = 1;

  if (txtResp != "" && txtResp != null) {
    while (document.getElementById("resp" + id + "-" + auxResp) != null) {
      auxResp++;
    }
    let strHtml = `\n <div id="resp${id}-${auxResp}" class="resposta">
                    <br>
                    <p>
                    Resposta ${id}-${auxResp}: ${txtResp}
                    </p>
                    </div>`
    postagem.innerHTML += strHtml;
    removeTxtResposta(id);

  }
  else {
    alert("Campo de resposta vazio.");
  }
}

function removeTxtResposta(id) { //Remove o campo de texto da resposta

  id = id.replace("buttonCancel", "");
  document.getElementById("campoResp" + id).remove();
  document.getElementById("button" + id).disabled = false;
}

// Configura os botões
document.getElementById('verPub').addEventListener('click', imprimeDados);/* Botão que mostra as pub's */
document.getElementById('publicar').addEventListener('click', incluirContato);/* Botão que publica a postagem */