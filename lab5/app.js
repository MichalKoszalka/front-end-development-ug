var q = $('#q');

var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function(x) {
    console.log("Item from keyup")
        return q.val();
    })
    .switchMap(function(result) {
        return searchWikipedia(result);
    })
    .map(function (result) {
        var record = []
        result[1].forEach(function (item, i) {
            record.push([result[1][i], result[2][i], result[3][i]]);
        });
        return record;
    })
    .subscribe(function(result) {
        $("#results").children().remove();
        result.forEach(function(record) {
        $('#results').append(`<li><a href="${record[2]}">${record[0]}</a></li>`);
        });
    });

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}

