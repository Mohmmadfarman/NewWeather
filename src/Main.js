function Main(props) {
    console.log('I am the main component');
    console.log(props.main);

    return (
        <div className="p-4">
            <div className="max-w-5xl bg-pink-500 rounded-lg flex flex-col md:flex-row justify-between flex-wrap mx-auto mt-6 p-4">

                <div className="flex flex-col mb-6 md:mb-0">
                    <h1 className="text-2xl font-bold text-white">
                        {props.main.location.name} ({props.main.location.localtime})
                    </h1>
                    <h4 className="text-xl font-bold text-white mt-4">
                        Temperature: {props.main.current.condition.feelslike_c}°C
                    </h4>
                    <h4 className="text-xl font-bold text-white mt-4">
                        Wind: {props.main.current.wind_kph} K/H
                    </h4>
                    <h4 className="text-xl font-bold text-white mt-4 mb-6">
                        Humidity: {props.main.current.humidity}
                    </h4>
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-24 h-24" src={props.main.current.condition.icon} alt="Weather Icon" />
                    <h2 className="text-xl font-light text-white mt-4">
                        {props.main.current.condition.text}
                    </h2>
                </div>
            </div>

            <h1 className="text-2xl text-black mt-6 font-bold text-center md:text-left">
                4-Day Forecast
            </h1>

            <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {props.main.forecast.forecastday.map((day, index) => (
                    <div key={index} className="w-full h-full bg-slate-500 rounded-lg p-4">
                        <h1 className="text-lg font-bold mb-3">
                            {day.date}
                        </h1>
                        <img className="mx-auto mb-3" src={day.day.condition.icon} alt="Forecast Icon" />
                        <h3 className="text-center">
                            {day.day.condition.text}
                        </h3>
                        <h3 className="mt-2">
                            Temperature: {day.day.maxtemp_c}°C
                        </h3>
                        <h3>
                            Wind: {day.day.maxwind_kph} K/H
                        </h3>
                        <h3>
                            Humidity: {day.day.avghumidity}
                        </h3>
                        <h3>
                            Rain Chance: {day.day.daily_chance_of_rain}%
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
