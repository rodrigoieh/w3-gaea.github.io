google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

google.charts.setOnLoadCallback(drawRegionsMap);

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