const cityName =  document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide =  document.querySelector('.middle_layer');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please Write The Name Before Search";
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=41578f2e6f2dca3cce44ded4d4a00545`;
            const responce = await fetch(url);
            const data = await responce.json();
            const arrData = [data];

            city_name.innerText =  `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText =  arrData[0].main.temp;

            const tempMode =arrData[0].weather[0].main;
            if(tempMode == " Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
           else if(tempMode == " Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
            }
            else if(tempMode == " Rain"){
                temp_status.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be'></i>"
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = "Please Enter City Name Properly"; 
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);