//key Api: bvLpWUPXIn28zW9eB3uHujx8UC4eqo7f


// var nytimesURL = 'https://api.nytimes.com/svc/books/v3/lists/current/mass-market-monthly.json?api-key=';
// var nytimesURL = 'https://api.nytimes.com/svc/topstories/v2/art.json';
var currentSearchWord = 'fashion';
 var nytimesURL = `https://api.nytimes.com/svc/topstories/v2/${currentSearchWord}.json?api-key=`;
var apiKey = 'bvLpWUPXIn28zW9eB3uHujx8UC4eqo7f';
var reqURL = nytimesURL + apiKey;


fetch(reqURL).
then(response=>response.json()).then(data=>{
    console.log (data);
    let title =document.getElementById('title');
    let abstract =document.getElementById('abstract');

    title.innerHTML = data.results[0].title;
    abstract.innerHTML = data.results[0].abstract;
  
})


let btn=document.getElementById('btn');
let i=0;
btn.addEventListener('click',()=>{
  if(i<10){
    i++;
    fetch(reqURL).
    then(response=>response.json()).then(data=>{
      
        let title =document.getElementById('title');
        let abstract =document.getElementById('abstract');
    
        title.innerHTML = data.results[i].title;
        abstract.innerHTML = data.results[i].abstract;
      
    })

   };if(i==10){
       i=0;
   }
}

   )