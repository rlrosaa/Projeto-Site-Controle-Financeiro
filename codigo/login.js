function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUsuario = []

    let userValid = {
        nome: '',
        usuario:'',
        senha:''
    }
    
    

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuarios'))

    listaUsuario.forEach((item) => {
        if(usuario.value == item.usuarioCadastrado && senha.value == item.senhaCadastrada){
            userValid = {
                nome: item.nomeCadastrado,
                usuario: item.usuarioCadastrado,
                senha: item.senhaCadastrada
            }
        }
    })
    console.log(usuario.value)
    if(usuario.value == userValid.usuario && senha.value == userValid.senha){
        window.location.href = 'diw2.html'
    }
    else{
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário e/ou senha incorreto(s), tente novamente'
        usuario.focus()
    }
    
}