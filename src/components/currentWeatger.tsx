import React from "react";

export const CurrentWeather: React.FC = React.memo(() => {
    return <>
        <img alt="Картинка текущей погоды"></img>
        Текущая погода
    </>
})