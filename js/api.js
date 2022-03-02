/* Fetch API data from server after clicking the "Search" button */
const btnClicked = () =>{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    console.log(searchFieldText);
/*------ clearing previous input field data :--------  */
    searchField.value = '';
/*-------- clearing total area after a new search : -------- */
    const phoneDetails = document.getElementById('phone-detail-area');
    phoneDetails.innerHTML = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchResults(data.data.slice(0, 20)))
};

/* Seaching phones by their name: */

const searchResults = data =>{
    const searchResultsArea = document.getElementById('search-result-area');
/*---------- clearing previous search result information form website:---------  */
    searchResultsArea.textContent = '';

    if (data.length !== 0){
        data?.forEach(afterLoopData => {   /* including optional chaining ( ?.) */
            console.log(afterLoopData);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card border border-dark border-1 rounded w-100">
            <img src="${afterLoopData.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5>Phone Name: ${afterLoopData.phone_name}</h5>
              <h5>Brand: ${afterLoopData.brand}</h5>
              <button onClick="phoneDetails('${afterLoopData.slug}')" type="button" class="btn btn-dark">Details</button>
            </div>
          </div>
            `;
            searchResultsArea.appendChild(div);
        });
      } else {
          const h3 = document.createElement('h3');
          h3.innerText = "The Phone You Want Is Not Found. Write Something Valid to Search."
          searchResultsArea.appendChild(h3);
      } 
    }

/* Details About a phone:  */

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
    phoneDetailsArea.textContent = ''; /* Clearing previous phone details */
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
       <h2 class="text-center">Detail informaiton about the phone you want</h2>
       <div class="col-md-4">
          <img src="${aPhoneDetaildata.image}" class="img-fluid rounded-start" alt="...">
       </div>
       <div class="col-md-8">
          <div class="card-body">

              <h5> <span class="bg-info rounded"> Brand: </span> ${aPhoneDetaildata.brand}</h5>
              <h5> <span class="bg-info rounded"> Release Date: </span> ${aPhoneDetaildata.releaseDate ? aPhoneDetaildata.releaseDate: 'Not Found' }</h5>
              <h5> <span class="bg-info rounded"> MainFeatures: </span> <br> <strong>ChipSet:</strong> ${aPhoneDetaildata.mainFeatures.chipSet},<br> <strong>DisplaySize:</strong> ${aPhoneDetaildata.mainFeatures.displaySize},<br> <strong> Memory:</strong> ${aPhoneDetaildata.mainFeatures.memory}<br></h5>
 
         </div> 
       </div>
    `;
    phoneDetailsArea.appendChild(div);
};