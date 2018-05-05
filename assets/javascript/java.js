$(document).ready(function() {
    var queryURL="https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //variables
    var fqstring="afganistan";
    //Format: YYYYMMDD
    var bdate="20010801";
    var edate="20011101";
    //newest or oldest
    var sort="oldest";
    var results;


    //building the queryurl
    queryURL+= '?' + $.param({
        'api-key': "1d7cba9250e144ab8fd63760964840f3",
        'fq': fqstring,
        'begin_date': bdate,
        'end_date': edate,
        'sort': sort
    });

    console.log(queryURL);
    //
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          results=response.response.docs;
          console.log(results);
          for(var i=0; i<results.length; i++){
            console.log(results[i].headline.kicker);
            console.log(results[i].headline.main);
            console.log(results[i].byline.original);
              console.log(results[i].abstract);
              console.log(results[i].multimedia.web_url);
          }
      });




});