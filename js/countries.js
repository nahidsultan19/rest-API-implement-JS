const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    // console.log(countries);
    const CountriesContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h2>${country.name}</h2>
        <h4>${country.capital}</h4>
        <button onclick="countryByName('${country.name}')">Detail</button>
        `;
        CountriesContainer.appendChild(div);
    })

}

const countryByName = name => {
    const url = `https://restcountries.com/v2/name/${name}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetail(data[0]))
    // console.log(name)
}

const displayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-details');
    const div = document.createElement('div');
    div.classList.add('country')
    div.innerHTML = `
    <h2>${country.name}</h2>
    <h4>Currency: ${country.currencies[0].code}</h4>
    <img src="${country.flags.png}"/>
    `;
    countryDetail.appendChild(div);
}


