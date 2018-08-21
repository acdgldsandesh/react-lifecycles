import React, { Component} from 'react';
import './App.css';

//Server List Component
class ServerList extends Component{
    render(){
        //gets Server data in array and edit event handler from props
        const {Servers,onEditing} = this.props;
    
        return (
            <table border="1">                    
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Server Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Servers.map((server,index) => {
                        return(
                            <tr key={`${index}`}>
                                <td>{index+1}</td>
                                <td><input name="servername" type="text" value={server.name} onChange={(e) => onEditing(e,index)}/></td>
                                <td><input name="serverdesc" type="text" value={server.desc} onChange={(e) => onEditing(e,index)}/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default ServerList;