import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const navSlide=()=>{
  const burger=document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks= document.querySelectorAll(".nav-links li")
  burger.addEventListener("click",()=>{
    nav.classList.toggle("nav-active")
    burger.classList.toggle("anime")
    //animate
    navLinks.forEach((navLink,index)=>{
    if( navLink.style.animation){
     navLink.style.animation='';
   } 
   else{
     navLink.style.animation=`navLinkFade 0.5s ease forwards ${index/7 + .4}s`
   }
  })
  })
}
navSlide();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
