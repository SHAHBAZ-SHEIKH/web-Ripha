

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


// function eidCountDown(){

//     var d = document.getElementById("days")
    
//     var h = document.getElementById("hours")
//     var m = document.getElementById("min")
//     var s = document.getElementById("sec")

//     var today = new Date()
// var eidDate = new Date("june 7,2025")
// // console.log(today.getTime())
// // console.log(eidDate.getTime())
// var diff = eidDate - today

// //days
// var days = Math.floor(diff/ (1000 * 60 * 60 * 24))
// //hours
// var hours = Math.floor(diff/(1000*60*60) % 24)

// //minutes
// var min = Math.floor(diff/(1000*60) % 60)

// //sec
// var sec = Math.floor(diff/(1000) % 60)

// d.innerText = days
// h.innerText = hours
// m.innerText = min
// s.innerText = sec

// }


// setInterval(eidCountDown,1000)



// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// console.log(days[today.getDay()])


// var count = 0

// var id  = setInterval(function(){
//     count++

//     document.write(`<h1>${count}</h1>`)
//     if(count ==5){
//         clearInterval(id)
//     }

// },1000)

 
// var name = "Shahbaz"

// function addNumer(a,b){
    
//     var result = a + b

//     console.log("result===>",result)

//     return result

    
    

// }

//console.log(result)

//var arr = ["Apple","Banana"]

// var myFunction = addNumer(2,5) // 7

// console.log(myFunction)


// function largestNumber(){
//     var num = [10,20,30,50,70,90,2,4,5]
//     var max = num[0]

//     for(var i=0; i<num.length; i++){
//         if(num[i] > max){
//             max = num[i]
//         }
//     }
//     return max
// }

// var result = largestNumber()
// console.log("Largest Number is ",result)

// function lasrgestWor(str){
//     var word = str.split(" ")
//     var find = ""
//     console.log(word)

//     for(var i=0; i<word.length; i++){
//         if(word[i].length > find.length ){
//             find = word[i]
//         }
//     }

//     return find

// }
// console.log(lasrgestWor("web Development"))


// function largestNumber(){
//     var  num = [12,13,14,70,60,80,2,4,5,100,7,8]
//     var max = num[0]

//     for(var i=0; i<num.length; i++){

//         if(num[i] > max){
//             max = num[i]
//         }

//     }

//     console.log(max)
// }

// largestNumber()

function largestNumber(){
    var  num = [12,13,14,70,60,80,2,4,5,100,7,8]
    var min = num[0]

    for(var i=0; i<num.length; i++){

        if(num[i] < min){
            min = num[i]
        }

    }

    console.log(min)
}

largestNumber()