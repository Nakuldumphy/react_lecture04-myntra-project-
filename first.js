import React from "react";  // node module me react hai usse import krr lo
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>;
const obj = {name:"Rohit Negi", age:"23"}; // obj error dega , obj.name will is exression since it can be replaced by 'Rohit Negi'
const arr = [20,30,"Rohit",98,obj.name]; // ek ek krke sbko show krega // obj yaha bhi work nhi krega // obj.name work krega

function greet(name){
    return <h2>Ram Ram Bhaiya Ji {arr}</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(greet("Nakul"));

