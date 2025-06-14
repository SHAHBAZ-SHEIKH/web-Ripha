


// var students = {
//     name:"Shahbaz",
//     email:"ashab@gmail.com",
//     isactive:true,
//     phone:123445,
//     classDays:['Saturday',"Sunday"],
//     addres:{
//         city:"karachi"
//     },
//     getName:function(){
//         console.log("Test")

//         console.log(this.phone)
//     }

// }




//  console.log(students.getName())



//  function abc(){
//     console.log(this)
//  }

//  abc()

// students.education = "BS"

// console.log(students)

console.log(document)

// function changeText(){
//     var p = document.querySelector(".para")

//     p.innerText = "hello Shabaz"
    
//     p.classList.("second")
    

// }



// function imageSWap(event){
//     console.log("test",event.target)
//     if(event.type == "mouseover"){
//         event.target.src = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202506/virat-kohli-025515730-16x9_0.jpg?VersionId=j5_skzvJ7TnwNDZr7QrmT37P_SF67ZCb&size=690:388"
//     }
//     else{
//         event.target.src = "https://blogs.a-sports.tv/wp-content/uploads/2025/06/babar-azam-reacts-after-signing-with-sydney-sixers-for-bbl-15.jpg"
//     }
// }


function userVlaue(event){
    
    if(event.keyCode ==13){
        console.log("Enter Button Click",event.target.value)
    }
}

