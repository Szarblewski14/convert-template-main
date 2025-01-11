const amount = document.getElementById("amount")


amount.addEventListener("input", () => {

    //Valida para apenas aparecer números no input
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})