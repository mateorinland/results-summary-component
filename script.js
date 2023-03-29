const summarySection = document.querySelector("#summary-items-container");

fetch("/data.json")
    .then(response => response.json())
    .then(data => loadData(data))
    .catch((error) => console.log(error));

function loadData(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
        html += `
            <div class="summary-item" data-item-type="accent-${i+1}">
                <div class="flex-group">
                    <img src="${data[i].icon}" alt="An icon representing ${data[i].category}">
                    <h3 class="summary-item-title ${data[i].category}">${data[i].category}</h3>
                </div>
                <p class="summary-score"><span>${data[i].score}</span> / 100</p>
            </div>
        `
    }
    summarySection.innerHTML = html;
}