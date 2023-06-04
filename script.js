/*let endpointUrl = "https://jsonplaceholder.typicode.com/users";
let allName = document.getElementById("rowName");
let myData = [];
let inputValue = document.getElementById("inputValue");
const userValue = localStorage.getItem("param");
let buttonName = document.getElementById("buttonName");
let buttonEmail = document.getElementById("buttonEmail");
let buttonUsername = document.getElementById("buttonUsername");



//funzione async per ottenere i dati attraverso chiamata fetch()

async function getData (){
  try {
    const res = await fetch(endpointUrl);
    const json = await res.json();
    myData = json;
    createParams(myData);
  } catch (error) {
    console.log(error);
  }
}



function createParams(jsonData) {
    myData = jsonData;
    let myListName= document.getElementById("listName");
    let myListUsername= document.getElementById("userName");

    let myListEmail= document.getElementById("email");

    jsonData.forEach(element => {
        let myName= document.createElement("li")
        myName.textContent = element.name;
        myListName.appendChild(myName);

        let myUsername= document.createElement("li");
        myUsername.textContent = element.username;
        myListUsername.appendChild(myUsername); 

        let myEmail= document.createElement("li")
        myEmail.textContent = element.email;
        myListEmail.appendChild(myEmail); 
        console.log(myData); 
    });
    allName.appendChild(myListName)
    
}

getData()


buttonName.addEventListener("click", () => {
    myData.forEach((element) => {
      if (element.username.includes(userValue)) {
        let elementUsername = element.username;
        createResult(elementUsername);
      }
    });
  });
  
  buttonUsername.addEventListener("click", () => {
    myData.forEach((element) => {
      if (element.name.includes(userValue)) {
        let elementName = element.name;
        createResult(elementName);
      }
    });
  });
  
  buttonEmail.addEventListener("click", () => {
    myData.forEach((element) => {
      if (element.email.includes(userValue)) {
        let elementEmail = element.email;
        createResult(elementEmail);
      }
    });
  });


function procedi(){
    let valore = inputValue.value;
    localStorage.setItem("param", valore);
    console.log("ciaoo");    
    inputValue.value = " ";

}
function createResult(res) {
    let resultList = document.getElementById("Result");
    let result = document.createElement("li");
    result.innerText = res;
    resultList.appendChild(result);
}


/*const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(item => {
  item.addEventListener("click", function() {
    createResult(item.textContent);
  });
}); 

myData.forEach(element=>{
        if ((element.name.includes(userValue))) {
            let elementName = element.name;
            createResult(elementName);
        } else if (element.email.includes(userValue)) {
            let elementEmail = element.email;
            createResult(elementEmail)
        } else if (element.username.includes(userValue)){
            let elementUsername = element.username;
            createResult(elementUsername);
        }
    })*/

    let endpointUrl = "https://jsonplaceholder.typicode.com/users";
let allName = document.getElementById("rowName");
let myData = [];
let inputValue = document.getElementById("inputValue");
const userValue = localStorage.getItem("param");
let buttonName = document.getElementById("buttonName");
let buttonEmail = document.getElementById("buttonEmail");
let buttonUsername = document.getElementById("buttonUsername");

async function getData() {
  try {
    const res = await fetch(endpointUrl);
    const json = await res.json();
    myData = json;
    createParams(myData);
  } catch (error) {
    console.log(error);
  }
}

function createParams(jsonData) {
  myData = jsonData;
  let myListName = document.getElementById("listName");
  let myListUsername = document.getElementById("userName");
  let myListEmail = document.getElementById("email");

  jsonData.forEach((element) => {
    let myName = document.createElement("li");
    myName.textContent = element.name;
    myListName.appendChild(myName);

    let myUsername = document.createElement("li");
    myUsername.textContent = element.username;
    myListUsername.appendChild(myUsername);

    let myEmail = document.createElement("li");
    myEmail.textContent = element.email;
    myListEmail.appendChild(myEmail);
    console.log(myData);
  });
  allName.appendChild(myListName);
}

buttonName.addEventListener("click", () => {
  myData.forEach((element) => {
    if (element.username.includes(userValue)) {
      let elementUsername = element.username;
      createResult(elementUsername);
    }
  });
});

buttonUsername.addEventListener("click", () => {
  myData.forEach((element) => {
    if (element.name.includes(userValue)) {
      let elementName = element.name;
      createResult(elementName);
    }
  });
});

buttonEmail.addEventListener("click", () => {
  myData.forEach((element) => {
    if (element.email.includes(userValue)) {
      let elementEmail = element.email;
      createResult(elementEmail);
    }
  });
});

function procedi() {
  let valore = inputValue.value;
  localStorage.setItem("param", valore);
  console.log("ciaoo");
  inputValue.value = "";
}

function createResult(res) {
  let resultList = document.getElementById("Result");
  let result = document.createElement("li");
  result.innerText = res;
  resultList.appendChild(result);
}

getData();

