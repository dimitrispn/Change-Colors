const blueButton = document.querySelector("#blue-btn")
const redButton = document.querySelector("#red-btn")
const greenButton = document.querySelector("#green-btn")
const colorInput = document.querySelector("#color-input")


colorInput.addEventListener("change", () => {
  console.log(colorInput.value);
  document.body.style.backgroundColor = colorInput.value;
})



//αν βάλουμε αντί για "change" το "click", η αλλαγή θα γίνεται όχι με την επιλογή του χρώματος αλλά με το κλικ  πάνω στο κουτάκι.

// blueButton.addEventListener("click", ()=>{
//   document.body.style.backgroundColor = "blue";
// })

// redButton.addEventListener("click", ()=>{
//   document.body.style.backgroundColor = "red";
// })

// greenButton.addEventListener("click", ()=>{
//   document.body.style.backgroundColor = "green";
// })

const buttonsInitialState = [{
    id: "blue",
    button: blueButton,
    pressed: false,
    initialColor: "#0d6efd"
  },
  {
    id: "red",
    button: redButton,
    pressed: false,
    initialColor: "#dc3545"
  },
  {
    id: "green",
    button: greenButton,
    pressed: false,
    initialColor: "#198754"
  },
]


const buttons = [...buttonsInitialState]

function changeColor(buttonObject, color) {
  buttonObject.button.addEventListener("click", () => {
    buttonObject.pressed = true
    document.body.style.backgroundColor = color;
    buttonObject.button.style.backgroundColor = 'white'
    buttonObject.button.style.color = color;

    for (let i in buttons) {
      if (buttonObject.id !== buttons[i].id) {
        buttons[i] = {...buttonsInitialState[i]}
        console.log( buttons[i]);
        console.log(buttonsInitialState[i]);
      }
    }

  })


}

changeColor(buttons[0], "blue")
changeColor(buttons[1], "red")
changeColor(buttons[2], "green")