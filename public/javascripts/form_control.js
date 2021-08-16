function changePasswordChecked(){
    
}

function passwordEquals(){
    let senha = document.getElementsByName('senha').value;
    let contraSenha = document.getElementsByName('confirma_senha').value;
    if(senha !== contraSenha && senha !== '' && contraSenha !== ''){
       return false;
    } else { 
        return true;
    }

}
function checkEmpty(){
    let nome = document.getElementsByName('nome_completo').value;
    let email = document.getElementsByName('email').value;
    let response = null;
    if(nome === '' && email === ''){
      response = false;
    } else { response = true;}
   return response
}
function message(){
  return  alert('javascript carregado');
}

function checkFormAction(){
    alert('registrado');
    e.preventDefault();
    let form = document.querySelector("form");
        if(passwordEquals() && checkEmpty()){
         return form.submit();
        } else {
          return  alert('Preencha os dados de nome e email, além do mais, digite senhas identicas');
        }
   
}