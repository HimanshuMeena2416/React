function customRender(reactElement, Container) {
  /* const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    Container.appendChild(domElement);
*/
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  Container.appendChild(domElement);
}

const reactElement = {
  //ye voh elemet hai jo react khud se banata hai jb fun import hokr yaha aata
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit Google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer); //reactElement ko main container me inject kr dega
