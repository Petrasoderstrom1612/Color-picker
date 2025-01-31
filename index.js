const colorPickerForm = document.getElementById("color-picker-form")
const colorInput = document.getElementById("color-input")
const schemeOptions = document.getElementById("scheme-options")
const allColorsBox = document.getElementById("all-colors-box")

colorPickerForm.addEventListener("submit", (e) => {
    e.preventDefault(); //ensures the color does not disappear straight a way
    let chosenColor = colorInput.value.split("#")[1]
    console.log(chosenColor)
    let chosenScheme = schemeOptions.value
    console.log(chosenScheme)

    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&format=json&mode=${chosenScheme}&count=6`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let html = ""
        for(let oneColor of data.colors){
            html += `
            <div class="one-color-components">
                <div class="one-color-box" style="background-color:${oneColor.hex.value}"></div>
                <p class="color-text">${oneColor.hex.value}</p>
            </div>
            `
        }
        allColorsBox.innerHTML = html
    })
})