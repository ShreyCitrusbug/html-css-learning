window.alert("welcome to web!!!")
const ele=document.getElementsByClassName('asian-community-text').length;
const elem=document.getElementsByClassName('asian-community-text');
elem[0].style.backgroundColor="#3DE";
document.getElementById('with-team').innerHTML = 'Hello World!!';
document.getElementById('with-team').innerHTML= ele;
const b=document.getElementsByName('try');
let arr=document.getElementsByTagName("*");
let tag=""
for (let i=0; i<arr.length;i++)
{
  tag += arr[i].tagName+"<br/>";
}
document.getElementById('exp-res').innerHTML = tag;
b[0].style.backgroundColor="";
let a=10;
function f()
{
  document.getElementById('with-team').innerHTML = "Hello!!!!"
  if (true)
  {
    let b=23;
    console.log(b);
  }
  console.log(a);
  console.log(b);
  console.log(a>>b);
}
f();
function myFun(p1,p2)
{
  return p1+p2;
}
const person={name:"Sachin",age:42,lastName:"Tendulkar",runs:18000};
let x=myFun(4,5);
let text="The sum of two numbers:" + x;
document.getElementById("with-team").innerHTML = "God of Cricket is "+ person.name + person.lastName + " He has " + person.runs+ " International Runs."; 