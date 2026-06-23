const calculateSum = async () => {
    const firstNumber = Number(document.getElementById("firstNumber").value)
    const secondNumber = Number(document.getElementById("secondNumber").value)

    // fetch(`https://sum-server-9unv.onrender.com/sum?a=${firstNumber}&b=${secondNumber}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         const value = document.getElementById("finalSum")
    //         value.innerHTML = `Sum: ${data}`
    //     })

    const response = await fetch(`https://sum-server-9unv.onrender.com/sum?a=${firstNumber}&b=${secondNumber}`);
    const data = await response.text()

    const value = document.getElementById("finalSum")
    value.innerHTML = `Sum: ${data}`
}
