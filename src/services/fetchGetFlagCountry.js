

export const fetchGetFlagCountry = async ( callCode ) => {

    const result = await fetch( `https://restcountries.eu/rest/v2/callingcode/${ callCode }` )
    const data =  await result.json()
    const {alpha2Code } = data[ 0 ]
    const urlFlag = `https://www.countryflags.io/${ alpha2Code }/flat/64.png`
    return urlFlag;
    
}
