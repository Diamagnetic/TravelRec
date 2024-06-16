function searchKeyword() {
    const navbarInput = document.getElementById('navbarSearch').querySelector('#search').value.trim().toLowerCase();
    const resultDiv = document.getElementById('searchResults');
    resultDiv.innerHTML = '';
    
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        let stringToCall = '';
        let resultData = [];

        if(navbarInput.match(/beach(es)?.*/)) {
            stringToCall = 'beaches';
        } else if(/countr(?:y|ies).*/.exec(navbarInput)) {
            stringToCall = 'countries';
    
            data.countries.forEach((country) => resultData.push(...country.cities));
        } else if(/temple(s)?.*/.exec(navbarInput)) {
            stringToCall = 'temples';
        } else {
            resultDiv.innerHTML = `<div class = 'errorBox'>No result found for ${stringToCall}</div>`;
            throw new Error('No result found for ' + stringToCall);
        }

        if(stringToCall !== 'countries') {
            resultData.push(...data[stringToCall]);
        }

        resultData.forEach((result, index) => {
            resultDiv.innerHTML += 
                `<div class = 'searchResult' id = 'seachResult: ${index}'>
                    <img src = './images/${result.imageUrl}'>
                    <h3>${result.name}</h3>
                    <p>${result.description}</p>
                    <input type = 'button' value = 'Visit'/>
                </div>`;
        });
    })
    .catch((error) => {
        console.log('Error: ' + error)
    });
}

function resetSearch() {
    document.getElementById('searchResults').innerHTML = '';
}