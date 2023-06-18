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

document.getElementById('clear-all').addEventListener('click', function () {
    document.getElementById('text-area').value = ""

})

document.getElementById('capitalize').addEventListener('click', function () {
    const mySentence = document.getElementById('text-area').value
    const words = mySentence.split(" ")
    if (document.getElementById('text-area').dataset.capitalize == '1') {
        for (let i = 0; i < words.length; i++) {
            if (words[i] != "") words[i] = words[i][0].toLowerCase() + words[i].substr(1)
        }
        document.getElementById('text-area').value = words.join(" ")

        const mySentence2 = document.getElementById('text-area').value
        const words2 = mySentence2.split(/\r?\n/)
        console.log(words2)
        for (let i = 0; i < words2.length; i++) {
            if (words2[i] != "") words2[i] = words2[i][0].toLowerCase() + words2[i].substr(1)
        }
        document.getElementById('text-area').value = words2.join("\n")
        document.getElementById('text-area').dataset.capitalize = '0'
    } else {
        for (let i = 0; i < words.length; i++) {
            if (words[i] != "") words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
        document.getElementById('text-area').value = words.join(" ")
        const mySentence2 = document.getElementById('text-area').value
        const words2 = mySentence2.split(/\r?\n/)
        console.log(words2)
        for (let i = 0; i < words2.length; i++) {
            if (words2[i] != "") words2[i] = words2[i][0].toUpperCase() + words2[i].substr(1)
        }
        document.getElementById('text-area').value = words2.join("\n")
        document.getElementById('text-area').dataset.capitalize = '1'
    }
})


document.getElementById('sort').addEventListener('click', function () {
    document.getElementById('text-area').value = document.getElementById('text-area').value.trim()

    const sortLines = str => document.getElementById('text-area').value.split(/\r?\n/).sort().join('\n');
    document.getElementById('text-area').value = sortLines(document.getElementById('text-area').value)
})

document.getElementById('reverse').addEventListener('click', function () {
    document.getElementById('text-area').value = document.getElementById('text-area').value.trim()
    const sortLines = str => document.getElementById('text-area').value.split(/\r?\n/).reverse().join('\n');
    document.getElementById('text-area').value = sortLines(document.getElementById('text-area').value)
})

document.getElementById('strip-blank').addEventListener('click', function () {
    document.getElementById('text-area').value = document.getElementById('text-area').value.trim()
    document.getElementById('text-area').value = document.getElementById('text-area').value.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "")
})

document.getElementById('add-numbers').addEventListener('click', function () {
    const mySentence2 = document.getElementById('text-area').value
    const words2 = mySentence2.split(/\r?\n/)
    const newWords = words2.map(el => '6' + el)
    document.getElementById('text-area').value = newWords.join('\n')
})


document.getElementById('shuffle').addEventListener('click', function () {
    const mySentence2 = document.getElementById('text-area').value
    const words2 = mySentence2.split(/\r?\n/)
    const newar = words2.sort(() => Math.random() - 0.5);
    document.getElementById('text-area').value = newar.join('\n')
    
})







