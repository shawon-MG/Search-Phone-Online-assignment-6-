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
    const searchResult = document.getElementById('search-result');
    data.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col>
        <div class="card h-100">
        <img src="${data.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h6 class="card-title">Phone Name: ${data.phone_name}<h6>
          <h6 class="card-title">Brand: ${data.brand}</h6>
        </div>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">                      
            <button type="button" class="btn btn-warning rounded-pill m-4">Details</button>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}