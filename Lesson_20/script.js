function checkEmail(location){
    let email = /^[A-Za-z]*@/;
    if(location.id == 'email'){        
        return email.test(location.value);
    }else{
        return email.test(location.value);
    }    
}
function checkfirstName(location){
    let firstName = /^[a-zA-Z]{1,20}$/;
    if(location.id == 'firstname'){        
        return firstName.test(location.value);
    }else{
        return firstName.test(location.value);
    }
}
function checklastName(location){
    let lastName = /^[a-zA-Z]{1,20}$/;
    if(location.id == 'lastname'){        
        return lastName.test(location.value);
    }else{
        return lastName.test(location.value);
    }    
}
function checkPassword(location){
    let password = /^[a-zA-Z0-9]{8,15}$/;
    if(location.id == 'password'){        
        return password.test(location.value);
    }else{
        return password.test(location.value);
    }
}

function createErrorElement(location){
    if(location.nextelementSibling.className != 'error'){
        let div = document.createElement('div');
        div.classList.add('error');
        div.innerText = `Please provide a valid  ${location.placeholder}`;
        location.after(div);
    }

}
function removeErrorElement(location){
    if(location.nextelementSibling.tagName == 'DIV'){
        location.nextelementSibling.remove();
    }else{        
        flag = 'no error element';
    }
}
function activateButton() {
    let button = document.querySelector('#signIn');
    button.disabled = false;
}

document.forms.signUp.onchange = function (e) {
    let targ = e.target;
    let flag = 0;
    if (targ.tagName == 'INPUT') {
        if (checkEmail(targ) || checkfirstName(targ) || checklastName(targ) || checkPassword(targ)) {
            removeErrorElement(targ);
            console.log('flag', flag);
        } else {
            createErrorElement(targ);
            console.log('flag', flag);
        }
    } else {
        return;
    }
}


