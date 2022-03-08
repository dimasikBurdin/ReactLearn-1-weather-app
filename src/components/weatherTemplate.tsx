import React from "react";
import { Button } from "antd";
import 'antd/dist/antd.min.css';
import { ChangeTown } from "./changeTown";
import { CurrentWeather } from "./currentWeatger";
import { AllWeather } from "./allWeather";
import { Space } from 'antd';

export const WeatherTemplate : React.FC = React.memo(() => {
    return <>
        <Space direction="vertical" style={{width: '100%'}}>
            <ChangeTown></ChangeTown>
            <CurrentWeather></CurrentWeather>
            <AllWeather></AllWeather>
        </Space>        
    </>
})