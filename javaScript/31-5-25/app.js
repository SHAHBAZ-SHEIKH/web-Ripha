

//console.log(Math.random() * 5)
//console.log(Math.round(3.4))
//console.log(Math.ceil(7.4))

// var aar = ["Shahbaz","Zubair","Saad","Moiz"]

// for(var i=0; i<aar.length; i++){
     
//     var indexNo = Math.floor(Math.random() * aar.length)

//     console.log(indexNo)

// }

// function changeColor(){
//     var result = document.getElementById("result")


// var arrColor = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
// var hexCode = ""

// for(var i=0; i<6; i++){
//     var randomIndex = Math.floor((Math.random()) * arrColor.length)
//     hexCode = hexCode + arrColor[randomIndex]

    
// }
// document.body.style.backgroundColor = "#" + hexCode
// console.log("hexCode====>",hexCode)
// result.innerHTML = "BackGround Color Code" + "#" + hexCode
// }

var today = new Date()
var eidDate = new Date("june 7,2025")
// console.log(today.getTime())
// console.log(eidDate.getTime())
var diff = eidDate - today
//days
console.log(Math.floor(diff/ (1000 * 60 * 60 * 24)))
//hours
console.log(Math.floor(diff/(1000*60*60) % 24))

//minutes
console.log(Math.floor(diff/(1000*60) % 60))

// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// console.log(days[today.getDay()])


// setTimeout(function(){
//     console.log("hello")

// },3000)