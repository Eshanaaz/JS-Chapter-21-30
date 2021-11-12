



/////////////////////////////////////////////////CHAPTER 21-25 //////////////////////////////////////////////////////////



////////QUESTION 01/////////

// var firstName=prompt("enter first name");
// var lastName=prompt("enter last name");
// var fullname=firstName+lastName

// alert(fullname+"\nHave a good day")


// //////QUESTION 02/////////

// var str=prompt("Your favorite mobile phone model ?")
// document.write("My favorite mobile phone model is:"+  " " + str+  "<br>")
// // var a=str.length
// // document.write("Lenght of string:" +" " + a)




////////QUESTION 03/////////

 
// var a="Pakistani"

// document.write("String:"+ " "+ a + "<br>");
// document.write("Index of 'n':"+ " "+ a.indexOf("n"))



////////QUESTION 04/////////



// var a="Hellw World"
// document.write("String:"+ " "+ a + "<br>");
// document.write("Last index of  'l':"+ " "+ a.lastIndexOf("l"));


////////QUESTION 05/////////

 
// var a="Pakistani"
// document.write("String:"+ " "+ a + "<br>");
// document.write("Character at index 3:"+ " " + a.charAt(3));




////////QUESTION 06/////////

// var firstName=prompt("enter first name");
// var lastName=prompt("enter last name");
// var fullname=firstName+lastName

// alert(fullname+"\nHave a good day")





////////QUESTION 07/////////


// var a= "Hyder, Islam"


// var city = "Hyderabad."

// document.write("City:"+ " "+ city + "<br>")


// city = city.replace(/Hyder/g , "Islam")

// document.write( "After Replacement=>>" ,city)






////////QUESTION 08/////////



// var para = "Ali and Sami are best friends. They play cricket and football together."

// document.write(para + "<br>")


// para = para.replace(/and/g , "&")

// document.write( "replace=>>>>" ,para)



////////QUESTION 09/////////

// var a="472"
// document.write( "Value:"  + " " +a + "<br>")
// document.write("Type:"+ " "+ "String <br> ")


// var b=472
// document.write( "Value:"  + " " +b+ "<br>")
// document.write("Type:"+ " "+ "Number"+ "<br>")



////////QUESTION 10/////////


// var userInp="peanuts".toLowerCase()
// document.write("User Input:"+ userInp + "<br>");
// var uppEr="peanuts".toUpperCase();
// document.write("Upper Case:"+ uppEr);

//////////////////OR/////////////




// var user=prompt("Enter name").toUpperCase();
// document.write(user)


//////QUESTION 11/////////

// var firstName=prompt("Enter your name");
// var firstChar=firstName.slice(0,1).toUpperCase();
// var lastChar=firstName.slice(1).toLowerCase();
// firstName=firstChar+lastChar;
// document.write(firstName);



////////QUESTION 12/////////

// var num="35.36"
// document.write( "Number:" + " "+ num + "<br>")
// var num1=num.slice(0,2)
// var num2=num.slice(3,5)
// numBer=num1+num2
// document.write( "Result:"+ numBer)


////////QUESTION 13/////////

// var userName=prompt("Enter name");
// for (var i=0; i<userName.length; i++){
//     if(userName[i].charCodeAt() === 33  || userName[i].charCodeAt() === 44 || userName[i].charCodeAt() === 46 || userName[i].charCodeAt() === 64){
//         alert("Please enter a valid Username")
//     }
// }
// document.write(userName);


////////QUESTION 14/////////



// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("What you want to order:").toLowerCase();
// var indeNum = bakeryItems.indexOf(searchItem)
// console.log(indeNum)
// if(bakeryItems.indexOf(searchItem) !== -1){
//         document.write(`${searchItem} is Available at Index ${bakeryItems.indexOf(searchItem)} in our Bakery`)

        
// }

// else{
//         document.write(`${searchItem} is Not Available in our Bakery`)

// }





////////QUESTION 15/////////

// var pass=prompt("Enter pswd")
// var pswdValid=/^[a-zA-Z0-9!$@]{1,}$/
// if (pass !== ""){
//     if(!pass.match(pswdValid)){
//         alert("Enter a valid Password")
//     }
//     else{
//         alert("Your Password is Correct")
//     }
// }
// else{
//     alert("Plz fill up pasword field")
// }


////////QUESTION 16/////////



// let a="University of Karachi"
// document.write(a[0] + "<br>")
// document.write(a[1] + "<br>")
// document.write(a[2] + "<br>")
// document.write(a[3] + "<br>")
// document.write(a[4] + "<br>")
// document.write(a[5] + "<br>")
// document.write(a[6] + "<br>")
// document.write(a[7] + "<br>")
// document.write(a[8] + "<br>")
// document.write(a[9] + "<br>")
// document.write(a[10] + "<br>")
// document.write(a[11] + "<br>")
// document.write(a[12] + "<br>")
// document.write(a[13] + "<br>")
// document.write(a[14] + "<br>")
// document.write(a[15] + "<br>")
// document.write(a[16] + "<br>")
// document.write(a[17] + "<br>")
// document.write(a[18] + "<br>")
// document.write(a[19] + "<br>")
// document.write(a[20] + "<br>")


////////QUESTION 17/////////


// var user = prompt("enter word");
// document.write( "user Input: " + user + "<br />" + "Last Character of input : "  + user.slice(user.length-1))




////////QUESTION 18/////////



// var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var count = string.match(/the/g)
// document.write(count.length)

/////////////////////////////////////////////////CHAPTER 26-30 //////////////////////////////////////////////////////////



////////QUESTION 01/////////
// 

// var num = +prompt("Enter Positive Integer Number");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);

// document.write("Number:" + " "+  num+   "<br>")
// document.write( "Round off value:" + " "+ round +  "<br>")
// document.write("Floor value:" + " "+  floor+  "<br>")
// document.write("Floor value:" + " "+ceil+  "<br>")




////////QUESTION 02/////////


// var num = +prompt("Enter Negative Integer Number");
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num);

// document.write("Number:" + " "+  num+   "<br>")
// document.write( "Round off value:" + " "+ round +  "<br>")
// document.write("Floor value:" + " "+  floor+  "<br>")
// document.write("Floor value:" + " "+ceil+  "<br>")


////////QUESTION 03/////////


// var num = +prompt("absolute num");
// var abs = Math.abs(num);
// document.write("The absolute Value of:" + num + " "+ "is" + " " +   abs+   "<br>")



////////QUESTION 04/////////


// var random=Math.floor(Math.random()*6+1)
// document.write( "Random dice value is:" + " "+ random)


////////QUESTION 05/////////


// var random=Math.floor(Math.random()*2+1);
// if(random==2){
//     document.write(random + "<br>"+ "Random coins value is:" + " "+ "Heads" )
// }
// else{
//     document.write(random + "<br>"+ "Random coins value is:" + " "+ "Tails" )

// }



////////QUESTION 06/////////


// var random=Math.floor(Math.random()*100+1)
// document.write( "Random number between 1 and 100:" + " "+  random)



////////QUESTION 07/////////


// var user=prompt("Enter your weight in kilograms");
// document.write("The weight of user is "+ " "+ user+ "kgs")


////////QUESTION 08/////////


// var secRan=5
// var guesNum=prompt("Enter any number between 1 and 10");
// if(guesNum==5){
//     document.write("CONGRATULATIONS");
    
// }
// else{
//     document.write("Try again")
// }
