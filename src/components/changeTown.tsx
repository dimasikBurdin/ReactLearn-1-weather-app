import React from "react";
import { Select } from "antd";
import 'antd/dist/antd.min.css'

const {Option} = Select;

export const ChangeTown: React.FC = React.memo(() => {
    return <>
        Город:
        <Select
            showSearch
            optionFilterProp="children"
            style={{width: 100}}           
          >
            <Option>Екатеринбург</Option>
            <Option>Москва</Option>
            <Option>Спб</Option>
        </Select>
    </>
})