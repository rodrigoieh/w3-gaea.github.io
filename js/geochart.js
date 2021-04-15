// References
// https://developers.google.com/chart/interactive/docs/gallery/geomap
// https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings

google.charts.load('current', {
    'packages': ['geochart'],
	// Note: you will need to get a mapsApiKey for your project.
	// mapsApiKey: https://developers.google.com/chart/interactive/docs/gallery/geochart
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    // TODO: debug country_count_group_by_continent
    // from data/country.js {code_count, country_count, country_count_group_by_continent, country_count_clean}
    var data_country_count = google.visualization.arrayToDataTable(country_count);
    var data_code_count = google.visualization.arrayToDataTable(code_count);

    var options = {
        // dataMode: 'regions',
        legend: 'none',
        // displayMode: 'text'
        colorAxis: {
            colors: ['darkblue']
        }
    };

    var chart_country_count = new google.visualization.GeoChart(document.getElementById('div_geochart_country_count'));
    var chart_code_count = new google.visualization.GeoChart(document.getElementById('div_geochart_code_count'));

    chart_country_count.draw(data_country_count, options);
//    chart_code_count.draw(data_code_count, options);
};
