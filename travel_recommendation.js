function searchKeyword() {
    const navbarInput = document.getElementById('navbarSearch').trim().toLowerCase();
    const resultDiv = document.getElementById('searchResults');

    let stringToCall = '';
    
    if(/beach(es).*/.exec(navbarInput)) {

    } else if(/countr(?:y|ies).*/.exec(navbarInput)) {

    } else if(/temple(s).*/.exec(navbarInput)) {

    } else {
        resultDiv.innerHTML = `<div class = 'errorBox'>No result found for ${stringToCall}</div>`;
    }
}