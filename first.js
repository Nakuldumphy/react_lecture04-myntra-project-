import React from "react";  // node module me react hai usse import krr lo
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>;
const obj = {name:"Rohit Negi", age:"23"}; // obj error dega , obj.name will is exression since it can be replaced by 'Rohit Negi'
const arr = [20,30,"Rohit",98,obj.name]; // ek ek krke sbko show krega // obj yaha bhi work nhi krega // obj.name work krega

const fun = ()=>{     // ye bhi Expression hai , since it can be replaced by return value , if return value is not given then then kuch bhi nhi aaye ga
//    console.log("parmar")     // ye console me print ho jae ga
   return 2; 
};


// JSX: JS Expression (Output laake de: Result produce)
// JSX: Statement (unko aap nahi likh sakte)

// M-1(to call a JSX function):
// function greet(name){
//     return <h2>Ram Ram Bhaiya Ji {fun()}</h2>
// }
// let element2 = greet("Nakul");

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(element2);


// M-2(to call a JSX function):
function Greet(){
    return <h2>Ram Ram Bhaiya Ji {fun()}</h2>
}
let element2 = <Greet/>;  // appka function ka first letter capital hona chaiye(but whY??) // this is the format of function in JSX // JSX ka rule hai not of react
// capital letter kyo?? // isse JSX ko pata chal jae ga ki ye user defined tag hai

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element2);