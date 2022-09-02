var searchHistory = [];
var weatherApiUrl = 'https://home.openweathermap.org';
var weatherApiKey = '280759b6f404505df2f7d3c548f75b94';

var searchForm = document.querySelector('search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var forecastContainer = document.querySelector('#forecast');
var searchHistoryContainer = document.querySelector('#history');

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displaySearchHistory(){
    searchHistoryContainer.innerHTML = '';

    for(var i = 0; i < searchHistory.length - 1; i >= 0; i--){  
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-controls', 'today forecast');
        btn.classList.add('history-btn', 'btn-history');

        btn.setAttribute('data-search', searchHistory[i]);
        btn.textContent = searchHistory[i];
        searchHistoryContainer.append(btn);
    }
}