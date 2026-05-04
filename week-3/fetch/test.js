// fetch("https://fakerapi.it/api/v2/persons")

// const test = () => {
//     const callApi = fetch("https://fakerapi.it/api/v2/persons")
//         .then((response) => response.json())
//         .then((data) => console.log(data.data))
// }

// test();

const asyncTest = async () => {
    const response = await fetch("https://fakerapi.it/api/v2/persons");
    const finalData = await response.json()
    console.log(finalData.data);
}

asyncTest();