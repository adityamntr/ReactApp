import { DataManager } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

 class Weather extends React.Component<{}, {}>{
    public data = new DataManager({
                      url: 'https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=439d4b804bc8187953eb36d2a8c26a02'
                    });
    public render() {
        return <GridComponent dataSource={this.data} height={315}>
               
               </GridComponent>
    }
}

export default Weather;