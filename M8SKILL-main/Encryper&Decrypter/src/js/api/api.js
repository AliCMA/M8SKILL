//Hier defineer ik de class API 
//De getData maakt een URL die  gebruikt om gegevens op te halen van die specifieke URL.

class API{
    async getData(url) {
        let dataToBeReturned = {}
        await fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then((data) => {
            dataToBeReturned = data.data;
        })
        return dataToBeReturned;
    }
}