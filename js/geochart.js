(function () {
    google.charts.load('current', {
        'packages': ['geochart'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });

    google.charts.setOnLoadCallback(drawRegionsMap);

    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
        let viewportmeta = document.querySelector('meta[name="viewport"]');
        if (viewportmeta) {
            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
            document.body.addEventListener('gesturestart', () => {
                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
            }, false);
        }
    }
}());

function drawRegionsMap() {
    const countriesDataTable = google.visualization.arrayToDataTable(countries);
    const options = {
        legend: 'none',
        colorAxis: {
            colors: ['rgb(8,45,54)']
        }
    };
    const geochartDiv = document.getElementById('geochart');
    const geochart = new google.visualization.GeoChart(geochartDiv);
    geochart.draw(countriesDataTable, options);
}

