import userDB, {
    insert,
    getData
} from './Module.js';

let db = userDB('userData', {
    userDetails: '++id,userName,Password,EmailId'
});


//input

const user = document.getElementById("userName");
const password = document.getElementById("password");
const email = document.getElementById("email");
const userNameLogin = document.getElementById("userNameLogin");
const passwordLogin = document.getElementById("passwordLogin");

//buttons
const register = document.getElementById("register");
const login = document.getElementById("login");


register.onclick = (event) => {
    let flag = insert(db.userDetails, {
        userName: user.value,
        Password: password.value,
        EmailId: email.value
    })
    user.value = password.value = email.value = "";

};

login.onclick = (event) => {

    getData(db.userDetails, data => {
        if(data.userName == userNameLogin.value && data.password == passwordLogin.value)
        {
            console.log('aaaaa');
            document.getElementById('error').style.display="hide";
            location.href('src\index.html');
            return;
        }

        else{
            document.getElementById('error').style.display="block";
        }
    });

};


/*
      login.onclick=(event)=>{

    getData(db.userDetails, data => {
        let users = [];
        users = data.userName
        users.forEach(element => {
            if(userNameLogin.value == element){
                console.log(data);
            }
        });
        console.log(users);
      });
    
    };
      */