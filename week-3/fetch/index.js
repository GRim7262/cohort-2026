// const getUserData = () => {
//     const response = fetch("https://fakerapi.it/api/v2/persons")
//         .then((response) => {
//             response.json()
//                 .then((data) => {
//                     console.log(data);
//                 })
//         })
// }

const getUserData = async () => {
    const response = await fetch("https://fakerapi.it/api/v2/persons")
    const userData = await response.json();

    const outputDiv = document.getElementById("output")
    outputDiv.innerHTML = "";

    userData.data.forEach(person => {
        const p = document.createElement("p")
        p.textContent = `Name: ${person.firstname} ${person.lastname} Number: ${person.phone}`
        outputDiv.appendChild(p)
    })
}
