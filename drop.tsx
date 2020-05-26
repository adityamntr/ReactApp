import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

 class Drop extends React.Component<{}, {}> {
    // country DropDownList instance
    private countryObj: any;

    // state DropDownList instance
    private stateObj: any;

    // city DropDownList instance
    private cityObj: any;

    // define the country DropDownList data
    private countryData: { [key: string]: Object }[] = [
        { CountryName: 'Australia', CountryId: '2' },
        { CountryName: 'United States', CountryId: '1' }
    ];

    // define the state DropDownList data
    private stateData: { [key: string]: Object }[] = [
        { StateName: 'New York', CountryId: '1', StateId: '101' },
        { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
        { StateName: 'Tasmania ', CountryId: '2', StateId: '105' }
    ];

    // define the city DropDownList data
    private cityData: { [key: string]: Object }[] = [
        { CityName: 'Albany', StateId: '101', CityId: 201 },
        { CityName: 'Beacon ', StateId: '101', CityId: 202 },
        { CityName: 'Emporia', StateId: '102', CityId: 206 },
        { CityName: 'Hampton ', StateId: '102', CityId: 205 },
        { CityName: 'Hobart', StateId: '105', CityId: 213 },
        { CityName: 'Launceston ', StateId: '105', CityId: 214 }
    ];

    // maps the country column to fields property
    private countryField: object = { value: 'CountryId', text: 'CountryName' };

    // maps the state column to fields property
    private stateField: object = { value: 'StateId', text: 'StateName' };

    // maps the city column to fields property
    private cityField: object = { text: 'CityName', value: 'CityId' };

    public onCountryChange() {
        // query the data source based on country DropDownList selected value
        this.stateObj.query = new Query().where('CountryId', 'equal', this.countryObj.value);
        // enable the state DropDownList
        this.stateObj.enabled = true;
        // clear the existing selection.
        this.stateObj.text = null;
        // bind the property changes to state DropDownList
        this.stateObj.dataBind();
        // clear the existing selection in city DropDownList
        this.cityObj.text = null;
        // disable the city DropDownList
        this.cityObj.enabled = false;
        // bind the property change to City DropDownList
        this.cityObj.dataBind();
    }
    public onStateChange() {
        // query the data source based on state DropDownList selected value
        this.cityObj.query = new Query().where('StateId', 'equal', this.stateObj.value);
        // enable the city DropDownList
        this.cityObj.enabled = true;
        // clear the existing selection
        this.cityObj.text = null;
        // bind the property change to city DropDownList
        this.cityObj.dataBind();
    }

    public render() {
        return (
            <div>
                {/* specifies the tag for render the country DropDownList component */}
                <DropDownListComponent id="country-ddl" ref={(scope) => { this.countryObj = scope; }} fields={this.countryField} dataSource={this.countryData} placeholder='Select a country' change={this.onCountryChange = this.onCountryChange.bind(this)} />
                <br />

                 {/* specifies the tag for render the state DropDownList component */}
                 <DropDownListComponent id="state-ddl" ref={(scope) => { this.stateObj = scope; }} enabled={false} fields={this.stateField} dataSource={this.stateData} placeholder='Select a state' change={this.onStateChange = this.onStateChange.bind(this)} />
                <br />

                 {/* specifies the tag for render the city DropDownList component */}
                <DropDownListComponent id="city-ddl" ref={(scope) => { this.cityObj = scope; }} enabled={false} fields={this.cityField} dataSource={this.cityData} placeholder='Select a city' />
            </div>
        );
    }
}

export default Drop;