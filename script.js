
 let a = "working";
 console.log(a); 

const locatn = document.getElementById('location');  //variables created
const acecstoken = document.getElementById('acestoken');

const locwarning= document.getElementById('location-warning');
const actowarning = document.getElementById('acestoken - warning');




function myFunction(){

     function checkforerrors(inputvalue, warningelement){
        let error =false;
        if (inputvalue === ''){
            warningelement.innerHTML= 'Location and Acess Token field cannot be empty';
            error=true;
        }
        else{
            warningelement.innerHTML = '';
        }
        return error;
        }
      const loerro = checkforerrors(locatn.value, locwarning);
      const acto =checkforerrors(acecstoken.value,actowarning);

      if (!loerro && !acto)
      {
   
        const l1 = document.getElementById("location").value;
        const ac1= document.getElementById("acestoken").value;
      
 
      console.log(l1); //india
      console.log(ac1); //0a70adfd730c940ac0bbd06c4e12152c      S5FWJZQKK43QRRUL9YQHTUABC-india
      
     const url = " https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ "+l1+"?unitGroup=metric&key="+ac1 +"&contentType=json";
      //  access key -  S5FWJZQKK43QRRUL9YQHTUABC
     //const url = "http://api.weatherstack.com/current?access_key= "+ac1+ "&query="+l1+ "api.weatherstack.com/current?access_key= "+ac1+ "&query="+l1;
     console.log(url);
  
     async function getapi(url) {
        const response = await fetch(url);
        console.log(response);
        const data =await response.json();
        console.log(data);             
        show(data);
     }
     function show(data) {
        var loc = data.resolvedAddress;
       var lat=data.latitude;
       var long = data.longitude;
        var re =data.address;
        var tz = data.timezone;
        var lt = data.description; 
        var lte =data.currentConditions.datetimeEpoch; 
        var hm = data.currentConditions.humidity;
        var ps =data.currentConditions.pressure;
        var ws = data.currentConditions.windspeed;
        
        var wd = data.currentConditions.winddir;
        var uv = data.currentConditions.uvindex;
        var fe = data.currentConditions.feelslike;
        var clo = data.currentConditions.cloudcover;    


        document.getElementById("loc").innerHTML +=loc;
        document.getElementById("lat").innerHTML =lat;
        document.getElementById("long").innerHTML =long;
        document.getElementById("re").innerHTML +=re;
        document.getElementById("tz").innerHTML +=tz;
        document.getElementById("lt").innerHTML +=lt;
        document.getElementById("lte").innerHTML +=lte;
        document.getElementById("hu").innerHTML +=hm;
        document.getElementById("pr").innerHTML +=ps;
       document.getElementById("ws").innerHTML +=ws;
        
        document.getElementById("wd").innerHTML +=wd;
        document.getElementById("ui").innerHTML +=uv;
        document.getElementById("fl").innerHTML +=fe;
        document.getElementById("ccover").innerHTML +=clo;    
        
     }
     getapi(url);
     
    }
   if (data.resolvedAddress == '') {
    alert('wrong entry');
   }
}
