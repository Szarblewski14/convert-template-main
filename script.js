// Cotação da moeda
const USD = 6.10
const EUR = 6.26
const GBP = 7.4

const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")



//Valida para apenas aparecer números no input
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

//Capturando o evento submit do formulário
form.addEventListener("submit", (e) => {
    e.preventDefault()

    switch (  currency.value ) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    } 
})

// Convertendo moeda
function convertCurrency(amount, price, symbol){
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // calcula o total
        let total = amount * price
        // Formatar o valor total
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibe o resultado total
        result.textContent = `${total} Reais`

        // Aplica uma classe que exibe o footer
        footer.classList.add("show-result")
    } catch (error) {
        // Remove uma classe que exibe o footer
        console.log(error);
        alert("Não foi possivel converter")
        footer.classList.remove("show-result")
    }
}

//Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
