$(function () {
    var renderMyMovieCards = function () {
        $('.card-deck').empty();
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
        watchlist.forEach(function (thisMovie) {
            $(".card-deck").append('<div class="card border-dark mt-3 mb-3" style="max-width: 33%; min-width: 20%;"><img class= "card-img-top poster" style = "width:100%;" src = "' + thisMovie.Poster + '" ><div class="card-body"><h5 class="card-title" style="font-weight:bold;"><span>' + thisMovie.Title + ' </span><span>(' + thisMovie.Year + ')</span></h5><button type="button" class="btn btn-default btn-sm add-button" data-id="' + thisMovie.imdbID + '"><i class="far fa-thumbs-up"></i> Add</button></div></div >');
        });
    };
    renderMyMovieCards();
});