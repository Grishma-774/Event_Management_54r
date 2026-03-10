let ename=document.getElementById("ename")
let pwd=document.getElementById("pwd")

let msg=document.getElementsByClassName("success")[0]
let btn=document.getElementById("btn")

let err=document.getElementsByClassName("err")

// if(!localStorage.getItem("isSignedUp")){
//     window.location.href="signup.html"
// }

btn.addEventListener("click",function(){
    let enamevalue=ename.value
    let pwdvalue=pwd.value
    let isvalid=true
    let stored_email=localStorage.getItem("email")
    let stored_password=localStorage.getItem("password")
    if(enamevalue==""){
        err[0].textContent="Email required"
        err[0].classList.add("show")
        isvalid=false
    }
    else{
        err[0].textContent=""
        err[0].classList.remove("show")
    }

    if(pwdvalue==""){
        err[1].textContent="Password required"
        err[1].classList.add("show")
        isvalid=false
    }
    else{
        err[1].textContent=""
        err[1].classList.remove("show")
    }

    if(isvalid){

        if(enamevalue===stored_email && pwdvalue===stored_password){
            localStorage.setItem("isLoggedIn","true")
            err[1].textContent=""
            err[1].classList.remove("show")
            msg.classList.add("show_success")
            setTimeout(function(){
                window.location.href="index.html"
            },1000)
        }
        else{
            err[1].textContent="Invalid email or password"
            err[1].classList.add("show")
        }

    }
})

let signupbtn=document.getElementById("signup")

signupbtn.addEventListener("click",function(){
    window.location.href="signup.html"
})