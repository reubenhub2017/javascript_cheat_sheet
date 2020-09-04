//Cheat Sheet for Javascript

//Beginning code for Javascript
var a = "Hello, World !"
console.log("Hello World!")
//Connected to html and css files
//Functions
function addNumbers(a,b){
  return a + b ;
}
x  = addNumbers(1,2);
//Document object element
document.getElementById("elementID").innerHTML = "Hello World!"

//if else
if ((age >= 14) && (age < 19)){
  status = "Eligible.";
}else{
  status = "Not Eligible.";
}


//Switch
switch(new Date().getDay()){
  case 6:
  text = "Saturday";
  break;
  case 0:
  text = "Sunday"
  break;
  default:
    text = "Whatever";
}
false, true //boolean
18, 3.15, 0b10011, 0xF6, NaN // numbers
"flower", 'John' //string
undefined, null, Infinity //special
//Arthmetric
a = b + c - d;
a =  b * (c/d);
x = 100 % 48;
a++; b--;

var abc = "ABDCDEFGHIJL";
var esc = "I don't know ";
var len = abc.length;
abc.indexOf("lmno");
abc.lastIndexOf("lmno");
abc.slice(3,6);
abc.replace("abc", "123");
abc.toUpperCase();
abc.toLowerCase();
abc.concat("", str2);
abc.chatAt(2);
abc[2];
abc.charCodeAt(2);
abc.split(",");
abc.split("");
//128.toString(16);

eva();
String(23);
(23).toString();

isFinite();
isNaN();
parseFloat();
parseInt();
//Loops
for(var i = 0; i < 10; i++){
  document.write(i + ": " + i * 3 + "<br/ >");
}
var sum = 0;
//for loop
for(var i = 0; i < a.length; i ++){
  sum += a[i];
}

html = " ";
//for-each loop
for(var i of custOrders){
  html += "<li>" + i "</li>";
}
//while
var i = 1;
while(i < 100){
  i *= 2;
  document.write(i, ", ");
}
//do while
var i = 2;

do {
  i *= 2;
  document.write(i + ',');
}while(i < 100)

for(var i == 0; i < 10; i++){
  if(i == 5){continue;}
  document.write(i+,",");
}
//objects
var student = {
  firstName : "Jane",
  lastName : "Doe",
  age : 18,
  height: 170,
  //object Functions
  fullName : function(){
    return firstName + " " this.lastNamel;
  }
};
student.age = 29;
student[age]++;
name = student.fullName();
