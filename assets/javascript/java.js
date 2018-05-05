$(document).ready(function() {
    var queryURL="https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //variables
    var fqstring="afganistan";
    //Format: YYYYMMDD
    var bdate="20010801";
    var edate="20101101";
    //newest or oldest
    var sort="oldest";
    var results;
    var number_results=10;

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
          $("#search").on("click", function(){
              var search = $(".form-control").val();
              console.log(search)

              



          })
          for(var i=0; i<results.length; i++)
          {
            console.log(results[i].headline.kicker);
            console.log(results[i].headline.main);
              console.log(results[i].abstract);
              console.log(results[i].web_url);
              console.log(results[i].snippet);
              var storydiv=$("<div>");
              console.log(i);
              if (results[i].byline==undefined){
                  console.log("case byline undefined");
              storydiv.html("<h3><a href='"+results[i].web_url+"' target='_blank'>"+results[i].headline.main+"</a></h3><p>"+results[i].snippet+"</p>");
              }
              else if (results[i].byline!==undefined){
                console.log("case byline present");
                storydiv.html("<h3><a href='"+results[i].web_url+"' target='_blank'>"+results[i].headline.main+"</a></h3><h6>"+results[i].byline.original+"</h6><p>"+results[i].snippet+"</p>");
              }
              $("#results").append(storydiv);    
          }
      }).fail(function(err) {
        throw err;
      });




});