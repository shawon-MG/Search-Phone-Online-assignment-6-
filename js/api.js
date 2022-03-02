const btnClicked = () =>{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    console.log(searchFieldText);
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResults(data.data))
};

const searchResults = data =>{
    const searchResultsArea = document.getElementById('search-result-area');
    data.forEach(afterLoopData => {
        console.log(afterLoopData);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <img src="${afterLoopData.image}" class="card-img-top w-75" alt="...">
        <div class="card-body">
          <h5>Phone Name: ${afterLoopData.phone_name}</h5>
          <h5>Brand: ${afterLoopData.brand}</h5>
          <button onClick="phoneDetails('${afterLoopData.slug}')" type="button" class="btn btn-dark">Details</button>
        </div>
      </div>
        `;
        searchResultsArea.appendChild(div);
    });
}; 
const phoneDetails = detailData =>{
    console.log(detailData);
    const url = `https://openapi.programming-hero.com/api/phone/${detailData}`;
    fetch(url)
    .then(res => res.json())
    .then(aPhoneDetaildata => detailSearchResultArea(aPhoneDetaildata.data))
};
const detailSearchResultArea = aPhoneDetaildata =>{
    console.log(aPhoneDetaildata);
    const phoneDetailsArea = document.getElementById('phone-detail-area');
    aPhoneDetaildata.forEach(afterLoopPhoneDetailData =>{
        console.log(afterLoopPhoneDetailData);
    })
};