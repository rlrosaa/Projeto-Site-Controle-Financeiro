let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario

let confirmaSenha = document.querySelector('#confirmasenha')
let labelConfirmaSenha = document.querySelector('#labelConfirmaSenha')
let validConfirmaSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')



nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    }
    else{
        labelNome.setAttribute('style','color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})


usuario.addEventListener('keyup',() => {
    if(usuario.value.length <= 3){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no mínimo 4 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    }
    else{
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})


senha.addEventListener('keyup',() => {
    if(senha.value.length <= 5){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    }
    else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})


confirmaSenha.addEventListener('keyup', () => {
    if(senha.value != confirmaSenha.value){
        labelConfirmaSenha.setAttribute('style', 'color: red')
        labelConfirmaSenha.innerHTML = 'Confirme a senha *Senhas diferentes'
        confirmaSenha.setAttribute('style', 'border-color: red')
        validConfirmaSenha = false
    }
    else{
        labelConfirmaSenha.setAttribute('style', 'color: green')
        labelConfirmaSenha.innerHTML = 'Confirme a senha'
        confirmaSenha.setAttribute('style', 'border-color: green')
        validConfirmaSenha = true
    }
})






function cadastrar(){
if(validConfirmaSenha && validNome && validUsuario && validSenha){
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]')

    listaUsuarios.push(
        {
            nomeCadastrado: nome.value,
            usuarioCadastrado: usuario.value,
            senhaCadastrada: senha.value
        }
    )
    
   

    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios))


    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong> Cadastrado com sucesso! Redirecionando para a página de login</strong>'
    msgError.innerHTML = ''
    msgError.setAttribute('style', 'display: none')

    setTimeout(() => {
        window.location.href = 'login.html'
    }, 4000)


}
else{
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong> Preencha os campos corretamente </strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
}
}

