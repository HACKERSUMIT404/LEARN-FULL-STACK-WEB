import React from "react";
import ReactDOM from "react-dom/client";
import{jsx as _jsx} from "react/jsx-runtime"
import App from './App.jsx'

// function myApp(){
//   return(
//     <>
//     <h2>react</h2>
//     </>
//   )
// }

// const reactElement = { 
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   Children: "click me to visist google",
// };

const anotherElement = (
<a href="https://www.google.com" target="_blank">click me to visist google</a>
);

const anotherUser ="chai ar simit"
const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  'click me to visist google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <myApp />
  reactElement
  // <App />
)
