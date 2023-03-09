let myDom = document; //document es un objeto global

let name = "Firlais";

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name": "Kity"
};

console.log(myDog.name);
console.log(myCat.name);

/*
class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/


function Mouse(name, age) {
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("Perez", 4);

class Button {
    constructor(parentID, text) {
      this.parentID = parentID;
      this.text = text;
    }

    render() {
      let myApp = document.getElementById(this.parentID);
      let button = document.createElement("button");
      button.innerText = this.text;
      button.addEventListener("click", () => {
        console.log("¡Haz hecho clic en el botón!");
      });
      myApp.appendChild(button);
    }
  }

  class TextInput {
    constructor(parentID, label) {
      this.parentID = parentID;
      this.label = label;
    }

    render() {
      let myApp = document.getElementById(this.parentID);
      let label = document.createElement("label");
      label.innerText = this.label;
      let input = document.createElement("input");
      input.type = "text";
      input.addEventListener("input", (event) => {
        console.log(`El usuario ha escrito ${event.target.value}`);
      });
      myApp.appendChild(label);
      myApp.appendChild(input);
    }
  }

  // Crear un nuevo botón y agregarlo a la página
  let myButton = new Button("my-app", "Click me!");
  myButton.render();

  // Crear una nueva entrada de texto y agregarla a la página
  let myInput = new TextInput("my-app", "Nombre:");
  myInput.render();
// Construir el objeto boton
// y llamar al metodo render de ese objeto.
// let myButon = new ....
// myButon.metodoQueSea()