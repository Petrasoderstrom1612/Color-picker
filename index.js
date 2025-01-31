const colorPickerForm = document.getElementById("color-picker-form")
const colorInput = document.getElementById("color-input")
const schemeOptions = document.getElementById("scheme-options")

colorPickerForm.addEventListener("submit", (e) => {
    e.preventDefault(); //ensures the color does not disappear straight a way
    let chosenColor = colorInput.value.split("#")[1]
    console.log(chosenColor)
    let chosenScheme = schemeOptions.value
    console.log(chosenScheme)

    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&format=json&mode=${chosenScheme}&count=6`)
    .then(res => res.json())
    .then(data => {console.log(data)})
})