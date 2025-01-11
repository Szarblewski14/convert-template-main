const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")

//Valida para apenas aparecer números no input
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

//Capturando o evento submit do formulário
form.addEventListener("submit", (e) => {
    e.preventDefault()
    currency.value  
})

