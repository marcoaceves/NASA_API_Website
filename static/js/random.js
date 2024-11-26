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
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${my_ran_date}&concept_tags=True`)
    const nasa_data = await response.json()
    console.log('random', nasa_data)
  console.log(nasa_data, "random data");
            
    console.log(nasa_data["url"], 'URLLLLL')
    var myhtml=""
    let result = nasa_data["url"].includes("youtube");
        if(result===false){myhtml+= "<div class='nasa_container'><a href="+nasa_data['url']+"><img class='nasa_img' id='picture' src="+nasa_data['url']+"></a> <p>"+nasa_data['title']+"</p><p>"+nasa_data['date']+"</p><p>"+nasa_data['explanation']+"</p><p>"+nasa_data['copyright']+"</p></div>" }
        else{
            myhtml +="<div class='nasa_container'><iframe src="+nasa_data['url']+" title='YouTube video player' frameborder='0'  class='nasa_img' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><p>"+nasa_data['title']+"</p><p>"+nasa_data['date']+"</p><p>"+nasa_data['explanation']+"</p><p>"+nasa_data['copyright']+"</p></div>"

        }
        
    
      document.getElementById("seven").innerHTML = myhtml;
      
      } catch (error) {
        console.log(error)
      }
    }

function randomDate(start, end, startHour=0, endHour=23) {
    function randomValueBetween(min, max) {
      return Math.random() * (max - min) + min;
    }
    var date1 = date1 || '06-20-1995'
    var date2 = date2 || new Date().toLocaleDateString()
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
    if( date1<date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString()   
    } else{
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  
  
    }
  }
  
  function random_nasa() {
    var d1 = "06/20/1995"
    var todayran = new Date();
    console.log(d1, "d1");
    var d2= (todayran.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
   
    console.log(d2, "d2");
    input = randomDate(d1, d2);

    my_ran_date = input.split("/").reverse();
    var tmp = my_ran_date[2];
    console.log(my_ran_date, "random date1");
    my_ran_date[2] = my_ran_date[1];
    console.log(my_ran_date, "random date2");
    my_ran_date[1] = tmp;
    console.log(my_ran_date, "random date3");
    my_ran_date = my_ran_date.join("-")

    
    console.log(my_ran_date, "random date!");
  
}
random_nasa()
fetchNASAData()

  


  

