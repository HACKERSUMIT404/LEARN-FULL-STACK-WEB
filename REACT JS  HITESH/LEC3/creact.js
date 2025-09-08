function customRender(reactElement, mainContainer) {
    /*
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  mainContainer.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children
  for(const prop in props){
    if(prop===children)
        continue;
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "click me to visist google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
