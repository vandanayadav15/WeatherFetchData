function submit() {
    const inputLocation = document.getElementById("location");
    const inputkey = document.getElementById("accesskey");
    
    if (inputLocation.value !== '' && inputkey.value !== '') {
        console.log(inputLocation.value);
        console.log(inputkey.value);

        const url = " https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=metric&key=ZQWZR7YVRKD5RNDH9NV4LH584&contentType=json"
        console.log(url);
        async function getData(url) {
            const responce = await fetch(url);
            data = await responce.json();
            console.log(data);
            console.log(data.address);
            console.log(document.getElementsByClassName('txt'));
            document.getElementsByClassName('txt')[0].innerText = `Location:${(data.address)}`;
            document.getElementsByClassName('txt')[1].innerHTML = `<pre>Lat:${data.latitude}   Long:${data.longitude}`;
            document.getElementsByClassName('txt')[2].innerText = `TimeZone:${data.timezone}`;
            document.getElementsByClassName('txt')[3].innerText = `WindSpeed:${data.currentConditions.windspeed}`;
            document.getElementsByClassName('txt')[4].innerText = `Pressure:${data.currentConditions.pressure}`;
            document.getElementsByClassName('txt')[5].innerText = `Humidity:${data.currentConditions.humidity}`;
            document.getElementsByClassName('txt')[6].innerText = `Wind Direction:${data.currentConditions.winddir}`;
            document.getElementsByClassName('txt')[7].innerText = `UV Index:${data.currentConditions.solarradiation}`;
            document.getElementsByClassName('txt')[8].innerText = `Feels Like:${data.currentConditions.feelslike}`;

        }
        getData(url);
    }
    else if (inputkey.value == '') {
        document.getElementsByTagName('h1')[0].innerHTML="No Result Found"
    }
    // else if (inputLocation.value == "") {
    //     alert("Please Enter Valid Location");
    // }
    // else if (accesskey.value == "") {
    //     alert("Please Enter Valid Access Token");
    // }
    

}
