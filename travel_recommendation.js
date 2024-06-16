function searchKeyword() {
    const navbarInput = document.getElementById('navbarSearch').trim().toLowerCase();
    const resultDiv = document.getElementById('searchResults');
    resultDiv.innerHTML = '';
    
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        let stringToCall = '';
        let resultData = [];

        if(/beach(es).*/.exec(navbarInput)) {
            stringToCall = 'beaches';
        } else if(/countr(?:y|ies).*/.exec(navbarInput)) {
            stringToCall = 'countries';
    
            data.countries.forEach((country) => resultData.push(...country.cities));
        } else if(/temple(s).*/.exec(navbarInput)) {
            stringToCall = 'temples';
        } else {
            resultDiv.innerHTML = `<div class = 'errorBox'>No result found for ${stringToCall}</div>`;
            return ;
        }

        if(stringToCall !== 'countries') {
            resultData.push(...data.stringToCall);
        }

        resultData.forEach((result, index) => {
            resultDiv.push(
                `<div class = 'searchResult' id = 'seachResult: ${index}'>
                    <img src = './images/${result.imageUrl}'>
                    <h3>${result.city}</h3>
                    <p>${result.description}</p>
                    <input type = 'button' value = 'Visit'/>
                </div>`
            );
        });
    });
}