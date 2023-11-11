 //1. ways to print javascript
    // console.log("Hello world");
    // alert("me");
    // document.write("This is document write")

    //2. Javascript console API
   //   console.log("Hello world");
   //   console.warn("this is warning");
   //   console.error("this is an error");

   /* Multi 
   line 
   comment
   */

     //3. Javascript variables
     var number1 = 56
     var number2 = 34
   //   console.log(number1 + number2);

     //4. Data type in Javascript
     // Number
     var num1 = 455;
     var num2 = 56.25;

     // String
     var str1 = "this is string";
     var srt2 = 'this is also a string';

     // Object
     var marks = {
      sanu :54,
      hanu :74,
      rubi :56.21
     }

   //   console.log(marks);

     // Booleans
    // var a = True;
    // var b = False;
   //   console.log(a);

     // var und = undefined
     var und;
   //   console.log(und);

     var n = null;
   //   console.log(n);

     // Array
     var arr = [1,2,3,4,5]
   //   console.log(arr)

   // Operators in Javascript
   // Arithmatic operation

   var a = 34;
   var b = 56;
  //  console.log("The value of a + b is", a+b);
  //  console.log("The value of a - b is", a-b);
  //  console.log("The value of a * b is", a*b);
  //  console.log("The value of a / b is", a/b);

   // Assignment operation
   var c = b;
  // c += 2;  c + 2 = 12
   // c -= 2;
  // console.log(c);

   // comparision operators
   var x = 34;
   var y = 56;
   // console.log(x ==y);
   // console.log(x >= y);
   // console.log(x <= y);
   // console.log(x > y);
   // console.log(x < y);

   // logical operators
   // logical and
   // console.log(true && true);
   // console.log(true && false);
   // console.log(false && true);
   // console.log(false && false);

  // logical or
   // console.log(true || true);
   // console.log(true || false);
   // console.log(false || true);
   // console.log(false || false);

   // logical not
   //console.log(!false);
   //console.log(!false);

   // functions in Javascript 
   function avg(a,b){
      c = (a + b)/2;
      return c;
      
   }
// Dry = do not repeat yourself
   c1 = (4,6);
   c2 = (14,16);
   //console.log(c1,c2);


   // conditionals in Javascript
   
   /*
   var age = 41;
   // single if statement
   if (age > 2){
      console.log("you cannot drink water");
   }
    
   // if - else satement
   if (age > 2){
    console.log("you cannot drink a water");
 }
   else{
    console.log('you can drink water'); 
   }

   var age = 31;
   // if- else ladder
   if(age > 32){
    console.log("you are a kid");
   }
   else if(age > 26){
    console.log("bacche nahi rahe");
   }
   else if(age > 22){
    console.log("yes bacche nahi rahe");
   }
   else if(age > 18){
    console.log("18 bacche nahi rahe");
   }
   else{
    console.log("bacche rahe");
   }
   console.log("end the game");
   */
   
   // for loop
   var arr = [1,2,3,4,5,6,7];
   // console.log(arr);
  //  for(var i=0;i<arr.length;i++){
  //    if (i ==2){
  //     break;
  //    }
  //  console.log(arr[i])
  //  }

  // arr.forEach(function(element){
  //   console.log(element)
  // })

  // while loop
  // let j = 0;
  // while(j<arr.length){
  //   console.log(arr[j]);
  //   j ++;
  // }

let myarr = ["fan", "camera", 34, null, true];
// array methods
//console.log(myarr.length);
// myarr.pop();
// myarr.push("harry");
// myarr.shift();
// console.log(myarr);

let string = "haniya is a good girl"
//console.log(string.length);
//console.log(string.indexOf("good"));

let mydate = new Date();
console.log(mydate);
console.log(mydate.getFullYear());

