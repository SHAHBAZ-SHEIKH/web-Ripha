

var allUser = JSON.parse(localStorage.getItem("user"))

console.log("allUser====>",allUser)




document.getElementById("loginHandler").addEventListener('click',function(){

    console.log("teszt")
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var isSearch = false
    

    for(var i=0; i<allUser.length; i++){
        

        if(allUser[i].email == email && allUser[i].password == password){
            isSearch = true
             break

        }
    }

    if(isSearch){
        alert("usr login")
    }
    else{
        alert("invalid Credinatials")
    }

    



})