// Name check

let admin = prompt('Input Your Name To Checking Admin');

if(admin == 'hasan'){
    document.getElementById('admin').innerHTML = 'Hellow Admin';
    console.log('Hellow Admin')
} else {
    document.getElementById('admin').innerHTML = "I Don't Khow You";
    console.log("I don't khow you")
}


// Age check

let age = prompt('Input Your Age');

age = Number(age);

if(isNaN(age)){
    document.getElementById('boyos').innerHTML = "Please Input Number";
    console.log('Please Input Number');
} else if (age < 18) {
    document.getElementById('boyos').innerHTML = "You are Young";
    console.log('You are Young')
} else if(age >= 18 && age < 32){
    document.getElementById('boyos').innerHTML = "You are Matured";
    console.log('You are Matured')
} else{
    document.getElementById('boyos').innerHTML = "You are Old";
    console.log('You are Old')
};


// Password check

let pass = prompt('Input Your Password')

if(pass == 'Love You'){
    document.getElementById("pass").innerHTML = "Login Success!";
    console.log('Login Success')
} else {
    document.getElementById("pass").innerHTML = "Password Incorret!";
    console.log('Password Incorret')
}

alert('Thank You All Submited');



