function createElement(data) {
    const paragraph = document.createElement("p"); 
    paragraph.textContent = data;                  
    document.body.appendChild(paragraph);          
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open("GET", url, true); 
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText); 
            const page = response.query.pages;
            const extract = page[Object.keys(page)[0]].extract; 
            callback(extract); 
        }
    };
    xhr.send(); 
}


queryWikipedia(createElement);

