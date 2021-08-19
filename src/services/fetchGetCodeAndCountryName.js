

export const fetchGetCodeAndCountryName = async() => {

    const url = 'https://restcountries.eu/rest/v2/all';

    const resp = await fetch( url );
    const data = resp.json();

    return data;
}
