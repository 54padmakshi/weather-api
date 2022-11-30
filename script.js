
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
 
      console.log(l1);
      console.log(ac1);
      
     const url = "http://api.weatherstack.com/current?access_key= "+ac1+ "&query="+l1+ "api.weatherstack.com/current?access_key= "+ac1+ "&query="+l1;
     console.log(url);
     getapi(url);
     async function getapi(url1) {
        const response = await fetch(url1);
        var data =await response.json();
        console.log(data);
        show(data);
     }
     function show(data) {
        var loc = data.location.name+","+data.location.country;
        var lat=data.location.lat;
        var long = data.location.lon;
        var re =data.location.region; //added extra
        var tz = data.location.timezone_id;
        var lt = data.location.localtime; //added extra
        var lte =data.location.localtime_epoch; //added extra
        var hm = data.current.humidity;
        var ws = data.current.wind_speed;
        var ps =data.current.pressure;
        var wd = data.current.wind_dir;
        var uv = data.current.uv_index;
        var fe = data.current.feelslike;
        var clo = data.current.cloudcover; //added extra


        document.getElementById("loc").innerHTML +=loc;
        document.getElementById("lat").innerHTML =lat;
        document.getElementById("long").innerHTML =long;
        document.getElementById("re").innerHTML +=re;
        document.getElementById("tz").innerHTML +=tz;
        document.getElementById("lt").innerHTML +=lt;
        document.getElementById("lte").innerHTML +=lte;
        document.getElementById("hu").innerHTML +=hm;

        document.getElementById("ws").innerHTML +=ws;
        document.getElementById("pr").innerHTML +=ps;
        document.getElementById("wd").innerHTML +=wd;
        document.getElementById("ui").innerHTML +=uv;
        document.getElementById("fl").innerHTML +=fe;
        document.getElementById("ccover").innerHTML +=clo;
        
     }
     
      
    }

}
