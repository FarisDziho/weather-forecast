
 const button=document.getElementById("fetch");
 button.addEventListener("click"  , getData);
 document.getElementById("unos").addEventListener("keypress" , function(e){
    if(e.key==='Enter')
      getData();
 })

function getData(){
  let loader=' <i class="fas fa-spinner fa-spin"></i>';
  var output=document.getElementById("output");
  output.innerHTML=loader;
  const unos=document.getElementById("unos");
  var city=unos.value;
   
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b7007fa38e2860a6672825ba0ea1b573&units=metric")
    .then((response)=>response.json())
    .then((data)=>{
      var weather=data.name + " | " + " temp: " + data.main.temp + " deg C°" + " | " + "<img src=http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png >";
      output.innerHTML=weather;
     
     
    })
    .catch((error) => {
      output.innerHTML="Greska, neispravno ime grada";
      console.log(error);
    })
 }






