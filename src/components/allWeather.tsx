import React from "react";
import { Button } from "antd";
import 'antd/dist/antd.min.css';

export const AllWeather: React.FC = React.memo(() => {
    return<>
        <Button>Previous</Button>
        Погода сегодня
        Погода завтра
        Погода послезавтра
        <Button>Next</Button>
    </>
})