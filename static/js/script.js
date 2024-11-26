var date = new Date()
var today=new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
                    console.log(today);
var week_ago = new Date();
week_ago.setDate(week_ago.getDate() - 7);

var week=new Date(week_ago.getTime() - (week_ago.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
console.log(week_ago);
console.log(week);
console.log(today);



const fetchNASAData = async () => {
    try {api_key = "5E6KemwPXBdicGMsGiD4aSqeX2R7beYRMkF1e9xz";
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${week}&end_date=${today}`)
      const nasa_data = await response.json()
      // console.log('NASA APOD data', nasa_data)

      const picture = nasa_data[1]["url"]
      document.getElementById("picture").src = picture;//Now you get the js variable inside your form element
      
      var myhtml=""
      for (i = 0; i < 7; i++) {
        
        let result = nasa_data[i]["url"].includes("youtube");
        if(result===false){myhtml+= "<div class='nasa_container'><a href="+nasa_data[i]['url']+"><img class='nasa_img' id='picture' src="+nasa_data[i]['url']+"></a> <p>"+nasa_data[i]['title']+"</p><p>"+nasa_data[i]['date']+"</p><p>"+nasa_data[i]['explanation']+"</p><p>"+nasa_data[i]['copyright']+"</p></div>" }
        else{
            myhtml +="<div class='nasa_container'><iframe src="+nasa_data[i]["url"]+" id='picture' title='YouTube video player' frameborder='0'class='nasa_img' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><p>"+nasa_data[i]['title']+"</p><p>"+nasa_data[i]['date']+"</p><p>"+nasa_data[i]['explanation']+"</p><p>"+nasa_data[i]['copyright']+"</p></div>"

        }
        
    }
      document.getElementById("seven").innerHTML = myhtml;//Now you get the js variable inside your form element

      
  // console.log(nasa_data[1])
  // console.log("picture",picture)
    } catch (error) {
      console.log(error)
    }
  }
  fetchNASAData()

function randomDate(start, end, startHour=0, endHour=23) {
  function randomValueBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  var date1 = date1 || '01-01-1970'
  var date2 = date2 || new Date().toLocaleDateString()
  date1 = new Date(date1).getTime()
  date2 = new Date(date2).getTime()
  if( date1>date2){
      return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
  } else{
      return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  

  }
}


