const btnClicked = () =>{
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    console.log(inputText);
    inputField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch (url)
    .then (res => res.json())
    .then (data => displaySearchResult(data.data))
} 

const displaySearchResult = data =>{
    console.log(data);
}