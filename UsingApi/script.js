
function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'ef61230e',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function(i, data) {
                    $('#movie-list').append(`
                            <div class="col-md-3">
                                <div class="card mb-3">
                                    <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">`+ data.Title +`</h5>
                                        <h6 class="card-text">`+ data.Year +`</h6>
                                        <p>`+ data.Type +`</p>
                                        <a href="#" class="btn btn-primary">Click for Information</a>
                                    </div>
                                </div>
                            </div>  
                    `)
                });

                $('#search-input').val('');

            } else {
                $('#movie-list').html('<h1>' + result.Error + '</h1>')
            }
        }
    });

}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (event) {
    if (event.keyCode === 13) {
        searchMovie();
    }
})