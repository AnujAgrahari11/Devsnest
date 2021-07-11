function myclick(){
    console.log("I am clicked");
}

function blurr(){
    if(!document.querySelector('.input').classList.contains('blue')){
        document.querySelector('.input').classList.add('blue')
    }
    else{
        document.querySelector('.input').classList.remove('blue');
    }
    console.log("Add Last Name");
}

function offline(){
    console.log("You are offline")
}

function canplay(){
    console.log("Ready to play");
}

function volchange(){
    console.log("Volume was changed");
}

function change(){
    console.log("add Age");
}

function added(){
    console.log("Age added");
}
