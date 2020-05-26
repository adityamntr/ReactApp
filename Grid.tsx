import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datastore';

class Grid extends React.Component<{}, {}>{
    public render() {
        return <GridComponent dataSource={employeeData}>
            
        </GridComponent>
    }
}
export default Grid; 

