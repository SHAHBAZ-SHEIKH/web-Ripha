
// var num = prompt("Enter A table number")
// var tableLen = prompt("Enter Table Length")
// for(var i=1; i<=tableLen; i++){
    
//     document.write(num +"*"+ i +  "=" + (num * i) + "<br>" )

    
// }


// for(var i=1; i<100; i=i+10){

//     console.log(i)

//     for(var j=i; j<i+10; j++){

//         document.write(j + "   ")

//     }
//     document.write("<br>")



// }


// for(var i=0; i<50; i=i +5){
//     console.log(i)
// }


// var cityName = ["karachi","lahore","Islamabad","Quetta","Multan"]
// var isSearchingCity=false

// for(var i=0; i<cityName.length; i++){

//     if(cityName[i]=="peshawar"){
//         isSearchingCity=true
//         break
//     }
 
    
// }

// if(isSearchingCity){
//     console.log("Found")
// }
// else{
//     console.log("Not Found")
// }


var num = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16]
var even =[]

for(var i=0; i<num.length; i++){
    
    if(num[i] %2==0){
        even.push(num[i])
    }

}

console.log(even)

function palindromeHandler(){
    // var myName = "chair"
var reverseWord = '';

var uservalue = document.getElementById("uservalue").value

// console.log(myName.length - 1)

for(var i=uservalue.length -1; i>=0; i--){
    // console.log(myName[i])
    reverseWord = reverseWord + uservalue[i]


}
if(reverseWord == uservalue){
    console.log("word is Palindrome")
    document.querySelector(".result").innerHTML = "word is Palindrome"
    document.querySelector(".result").style.display = "block"

}
else{
    console.log("not Palindrome")
    document.querySelector(".result").innerHTML = "word is not Palindrome"
    document.querySelector(".result").style.display = "block"
}

    

}





//console.log("reverseWord======>",reverseWord)


function abc(){
    console.log("Hello")
    for(var i=0; i<=10;i++){
        console.log(i)
    }
}

abc()
abc()
abc()