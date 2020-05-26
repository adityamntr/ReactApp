import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { hardwareData } from './datasource.ts';
class QueryBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.animationSettings = { effect: 'Zoom', duration: 400, delay: 0 };
        this.columnData = [
            { field: 'TaskID', label: 'Task ID', type: 'number' },
            { field: 'Name', label: 'Name', type: 'string' },
            { field: 'Category', label: 'Category', type: 'string' },
            { field: 'SerialNo', label: 'Serial No', type: 'string' },
            { field: 'InvoiceNo', label: 'Invoice No', type: 'string' },
            { field: 'Status', label: 'Status', type: 'string' }
        ];
        this.importRules = {
            'condition': 'or',
            'rules': [{
                    'field': 'Category',
                    'label': 'Category',
                    'operator': 'equal',
                    'type': 'string',
                    'value': 'Laptop'
                }]
        };
        this.getSql = this.getSql.bind(this);
        this.getRule = this.getRule.bind(this);
    }
    getSql() {
        this.dialogInstance.content = this.qryBldrObj.getSqlFromRules(this.qryBldrObj.getRules());
        // console.log(this.dialogInstance.content);
        this.dialogInstance.show();
        var dataset_name = "Minerva";
        this.dialogInstance.content = "SELECT * FROM " + dataset_name + " WHERE " + this.dialogInstance.content;
        console.log(this.dialogInstance.content);
        
    }

    getRule() {
        const validRule = this.qryBldrObj.getValidRules(this.qryBldrObj.rule);
        this.dialogInstance.content = '<pre>' + JSON.stringify(validRule, null, 4) + '</pre>';
        this.dialogInstance.show();
    }

    
    render() {
        return (<div>
                <QueryBuilderComponent width='30%' dataSource={hardwareData} ref={(scope) => { this.qryBldrObj = scope; }} columns={this.columnData} rule={this.importRules}  displayMode='Vertical'/>
                <div className="e-qb-button">
                    <ButtonComponent cssClass='e-primary' content='Get Sql' onClick={this.getSql}/>
                    <ButtonComponent cssClass='e-primary' content='Get Rule' onClick={this.getRule}/>
                </div>
                <DialogComponent id="defaultdialog" showCloseIcon={true} animationSettings={this.animationSettings} ref={dialog => this.dialogInstance = dialog} height='auto' header='Querybuilder' visible={false} width='50%'/>
            </div>);
    }
}
// ReactDom.render(<QueryBuilder />, document.getElementById('querybuilder'));

export default QueryBuilder;