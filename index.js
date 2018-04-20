$(function () { 
    var renderMovieCards = function (arr) {
        $('.card-deck').empty();
        arr.forEach(function (thisMovie) {
            $(".card-deck").append('<div class="card border-dark mt-3 mb-3" style="max-width: 33%; min-width: 20%;"><img class= "card-img-top poster" style = "width:100%;" src = "' + thisMovie.Poster + '" ><div class="card-body"><h5 class="card-title" style="font-weight:bold;"><span>' + thisMovie.Title + ' </span><span>(' + thisMovie.Year + ')</span></h5><button type="button" class="btn btn-default btn-sm add-button" data-id="' + thisMovie.imdbID +'"><i class="far fa-thumbs-up"></i> Add</button></div></div >');
        });
    };

    $('form').on('submit', function (e) { 
        e.preventDefault();
        var searchString = $('.search-bar').val();
        var urlEncodedSearchString = encodeURIComponent(searchString);
        $.ajax({
            method: "GET",
            url: "https://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString,
            success: function(response) {
                var searchArray = response.Search;
                movieData = response.Search;
                renderMovieCards(searchArray);
            },
        });    
    });

    $('.movies-container').on('click','.add-button', function(){
        var imdbID = $(this).data('id');
        var movie = movieData.find(function (thisMovie) {
            return thisMovie.imdbID == imdbID;
        });
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
        if (watchlist === null) {
            var watchlist = [];
        };
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    });
});