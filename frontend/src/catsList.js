import React, { Component } from 'react';
import apiService from './apiService';  
const apiservice = new apiService();

class catsList extends Component {

constructor(props) {
    super(props);
        this.state = {
            data: [],
        };
}

render() {
    return (
        <div className='customers--list'>
            <table  className="table">
            <tr>
                <th>Text</th>
            </tr>
            <tbody>
            {this.state.catsList.map( text => 
                <td>{text}</td>
            )}
            </tbody>
			</table>
        </div>
    );
}
}
export default catsList;
