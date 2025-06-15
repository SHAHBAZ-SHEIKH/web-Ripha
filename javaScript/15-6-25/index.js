// document.getElementById('submitHandler').addEventListener('submit', function(event) {
//     event.preventDefault()

//     var name = document.getElementById("name").value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById("password").value;
//     var cpassword = document.getElementById("cpassword").value;

//     if (!name || !email || !password || !cpassword) {
//         alert("All fields are required");
//         return;
//     }

//     // Email regex check
//     let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!regex.test(email)) {
//         alert("Invalid email address");
//         return;
//     }

//     if (password.length < 6) {
//         alert("Password should be at least 6 characters long");
//         return;
//     }

//     if (password !== cpassword) {
//         alert("Password and Confirm Password do not match");
//         return;
//     }

//     var users = JSON.parse(localStorage.getItem("user")) || [];

                                                                                                                                       
//     users.push({
//         name: name,
//         email: email,
//         password: password
//     });

//     setTimeout(function() {
//         localStorage.setItem('user', JSON.stringify(users));
//         alert("User signed up successfully");
//         window.location.href = "login.html"
//     }, 1000);

//     console.log(name, email, password, cpassword);
// });




// function prepareFood(callback) {
//   callback(); // calling the passed function
// }

// function makeBurger() {
//   console.log("Burger is ready!");
// }

// prepareFood(makeBurger); // Burger is ready!



// var abc = name=>"Shahbaz"


// console.log(abc("Ahmed"))


//ForEach

// var arr = ["Apple","banana","Graphes","Mango"]

// var newArr = arr.forEach((item,index)=>{
//     console.log(item,index)

// })

// console.log(newArr)


// var num = [1,2,3,4,5,6,7,8]

// var newNum = num.map((value)=>{
//     return value %2 ==0
// })

// console.log(newNum)

// var marks = [70,60,80,50,80,70]

// var filterMarks = marks.filter((mark)=> mark > 60)
// console.log("filterMarks===>",filterMarks)


// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" }
// ];

// let user = users.find(u => u.id === 2);
// console.log(user); // { id: 2, name: "Sara" }


// console.log("start")

// setTimeout(()=>{
//     console.log("After 5 Sec")
// },5000)



// console.log("end")


// var userPrmomise = new Promise((resolve,reject)=>{

//     var sucess = false

//     if(sucess){
//         resolve("My Promise is Fullfiled")
//     }
//     else{
//         reject("My Promise id Reject")
//     }

// })

// userPrmomise
// .then((msg)=> console.log(msg))
// .catch((err)=>console.log(err))


var githubSearch = async ()=>{

    var cardContainer = document.querySelector(".cardContainer")
    var userProfile = document.getElementById("userProfile").value


    try {

        var res = await fetch(`https://api.github.com/users/${userProfile}`)
        var result = await res.json()
        console.log(result)

        cardContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src=${result.avatar_url} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${result.name}</h5>
    
    <p class="card-text">${result.bio}</p>
    <a href=${result.html_url} target="_blank" class="btn btn-primary">Go to Github Profile</a>
  </div>
</div>
        
        `
        
    } catch (error) {
        console.log(error)
        
    }
}



