let uname=document.getElementById("uname")
let ename=document.getElementById("ename")
let pwd=document.getElementById("pwd")
let cpwd=document.getElementById("cpwd")

let cabtn=document.getElementById("btn")

let msg=document.getElementsByClassName("success")[0]

let err=document.getElementsByClassName("err")

// if(localStorage.getItem("isSignedUp")){
//     window.location.href="login.html"
// }

cabtn.addEventListener("click",function(){
    let uname_value=uname.value
    let ename_value=ename.value
    let pwd_value=pwd.value
    let cpwd_value=cpwd.value
    let isvalid=true
    if(uname_value == ""){
        err[0].textContent="username required"
        err[0].classList.add("show")
        isvalid=false
    }
    else{
        err[0].classList.remove("show")
    }

    if(ename_value== ""){
        err[1].textContent="email required"
        err[1].classList.add("show")
        isvalid=false
    }
    else{
        err[1].classList.remove("show")
    }

    if(pwd_value == ""){
         err[2].textContent="password required"
         err[2].classList.add("show")
        isvalid=false
    }
    else{
        err[2].classList.remove("show")
    }

    if(cpwd_value == ""){
        err[3].textContent=" confirm password required"
        err[3].classList.add("show")
        isvalid=false
    }
    else if(pwd_value!==cpwd_value){
        err[3].textContent="Passwords do not match"
        err[3].classList.add("show")
        isvalid=false
    }
    else{
        err[3].classList.remove("show")
    }

    if(isvalid){
        localStorage.setItem("username", uname_value)
        localStorage.setItem("email", ename_value)
        localStorage.setItem("password", pwd_value)
        localStorage.setItem("isSignedUp","true")
        msg.classList.add("show_success")
        setTimeout(function(){
            window.location.href = "login.html"
        },1000)
    }
})

let loginbtn=document.getElementById("login")

loginbtn.addEventListener("click",function(){
    window.location.href="login.html"
})