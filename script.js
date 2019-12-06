

// returns all animes from 1-setNumber made in a given year
function searchAnimeYear()
{

for (let i=1; i<200; i++)
    {

$.ajax({
    url: "https://kitsu.io/api/edge/anime/" + [i],
    method: "GET",
       })
.then(function(response)
        {
// console.log(response);
            if(response.data.attributes.startDate.split("-")[0] == 1996){
     
    console.log(response.data.attributes.canonicalTitle);
    console.log(response.data.attributes.startDate.split("-")[0]);
    console.log(response.data.attributes.posterImage.original);
    console.log(response.data.attributes.averageRating)
            }
            
        })
    }
}
searchAnimeYear(); 




// returns all anime of a given genre *needs work
function searchAnimeGenre()
{

$.ajax({
    url: "https://kitsu.io/api/edge/anime/?filter[genres]=action,comedy,sci-fi",
    // need sort??
    method: "GET",
       })
.then(function(response)
        {
 
console.log(response);

        })
    
}
searchAnimeGenre(); 





// returns the GENRE DATA of animes from 1-setNumber
function searchGenres()
{

    for(let i=1; i<10; i++ )
    {
        $.ajax({
            url: "https://kitsu.io/api/edge/anime/" + [i] + "/genres",
            method: "GET"
        })
        .then(function(response)
            {
            let array = response.data
            for (i=0; i<array.length; i++){
                console.log(array[i].attributes.name);
                console.log(i);
    
            }
        
            })
    }
}
// searchGenres();





// OMDB movie search returns year, genre
function searchMovies() {

    // let queryurl= "http://www.omdbapi.com/?t=good+will+hunting"
    // let apikey= "?apikey=c98f9918"

    $.ajax({
        url:"http://www.omdbapi.com/?t=fargo&apikey=c98f9918",
        method: "GET"
    })
    .then(function(response){
        console.log(response)
        console.log(response.Year)
        console.log(response.Genre)
        console.log(response.Genre.split(" "))
    })
}
searchMovies(); 
