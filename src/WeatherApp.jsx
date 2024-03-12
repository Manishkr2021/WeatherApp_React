import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    const updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateWeatherInfo} />
            {weatherInfo && <InfoBox info={weatherInfo} />}
        </div>
    );
}
