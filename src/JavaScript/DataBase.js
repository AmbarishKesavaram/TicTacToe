import userDB, {
    insert
} from './Module.js';

let db=userDB('userData',{
    userDetails:'++id,userName,Password,EmailId'
});


    //input

    const user = document.getElementById("userName");
    const password = document.getElementById("password");
    const email = document.getElementById("email");

    //buttons
    const register = document.getElementById("register");
    const login = document.getElementById("login");


    register.onclick=(event)=>{
        let flag=insert(db.userDetails,{
            userName: user.value,
            Password: password.value,
            EmailId: email.value
        })
        user.value=password.value=email.value="";
        getUser();
    };

    const getUser = () => {
        let i =0;
        let obj={};
        console.log(db.userDetails.userName)
        }
    
               