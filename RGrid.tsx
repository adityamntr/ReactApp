import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, WebApiAdaptor, Query, DataOptions } from '@syncfusion/ej2-data';


class RemoteDataBinding extends React.Component<{}, {}> {
    public hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    public data = new DataManager({ url: this.hostUrl + 'api/Orders', adaptor: new WebApiAdaptor  });

    render() {
        return <GridComponent dataSource={this.data}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
    </GridComponent>
    }
}

export default RemoteDataBinding;