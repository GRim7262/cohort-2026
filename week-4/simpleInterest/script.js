const calculateInterest = async () => {
    const principal = Number(document.getElementById("principal").value)
    const rate = Number(document.getElementById("rate").value)
    const time = Number(document.getElementById("time").value)

    const response = await fetch(`https://sum-server-9unv.onrender.com/interest?principal=${principal}&rate=${rate}&time=${time}`)
    const data = await response.json()
    console.log(data);

    document.getElementById("finalSum").innerHTML = `Total: ${data.total}, Interest: ${data.interest}`;
}