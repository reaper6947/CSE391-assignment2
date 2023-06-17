document.addEventListener("DOMContentLoaded", function (event) {
    const quote = quoteArr[Math.floor(Math.random() * quoteArr.length)];

    const quoteTextElm = document.getElementById('quote-text')
    const quoteAutherElm = document.getElementById('quote-author')
    if (quote.author == null) quote.author = "unknown"
    quoteTextElm.innerText = quote.text
    quoteAutherElm.innerText = quote.author

});

document.querySelectorAll(".corner").forEach((elem) => {

    elem.addEventListener("click", function (elem) {

        document.getElementById('ct').style.background = elem.target.style.background
        document.getElementById('quote-text').style.color = elem.target.dataset.font
        document.getElementById('ct').style.borderColor = elem.target.dataset.border
        document.getElementById('ct').style.borderWidth = "0.4rem"
    })

})

document.querySelector('.convert-btn').addEventListener("click", function () {
    const convertTo = document.querySelector('.ct2-select').value
    const convertInput = document.querySelector('.search-input').value
    if (convertTo == "kg-to-lb") {
        document.querySelector(".convert-text").innerText = eval(convertInput + " * " + "2.2046")
    }

    if (convertTo == "lb-to-kg") {
        document.querySelector(".convert-text").innerText = eval(convertInput + " * " + "0.4536")
    }
})

document.querySelector('.list-input').addEventListener('input', function () {
    const inputText = document.querySelector('.list-input').value

    const elemArr = inputText.split(',').map(Number)

    const maxVal = document.getElementById('max-val')
    const minVal = document.getElementById('min-val')
    const sumVal = document.getElementById('sum-val')
    const averageVal = document.getElementById('average-val')
    const reverseVal = document.getElementById('reverse-val')

    maxVal.innerText = elemArr.sort()[elemArr.length - 1]
    minVal.innerText = elemArr.sort()[0]
    sumVal.innerText = elemArr.reduce((a, b) => a + b, 0)
    averageVal.innerText = sumVal.innerText / elemArr.length

    reverseVal.innerText = [...inputText.split(',')].reverse().join(',')


})

