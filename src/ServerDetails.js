import React, { Component, Fragment } from 'react';
//component displaying Server details in table.
import ServerList from './ServerList';
import './App.css';

//ServerDetails Component
class ServerDetails extends Component{
    //calls at the beginning of component is created
    constructor(props){
        super(props);
        this.state = {
            Servers:[],
            servername:"",
            serverdesc:""
        }
        console.log("Component started Mounting");
    }

    //calls after component is mounted
    componentDidMount(){
        console.log("Component got Mounted-------------(3)");
    }

    //calls when component update is finished
    componentDidUpdate (){
        console.log("Component got updated--------------(3)");
    }
   
    handleSubmit = (e) => {//submit method to handle form submit
        e.preventDefault();
        if(this.state.Servers.length === 0){
            this.setState({Servers:[{name:this.state.servername,desc:this.state.serverdesc}],
                servername:"",serverdesc:""});
        }else{
            this.setState({Servers:[{name:this.state.servername,desc:this.state.serverdesc},...this.state.Servers],
                servername:"",serverdesc:""});
        }
    }

    onInputChange = (e) => {//on input change this method is invoked
        e.preventDefault();
        switch(e.target.name){
            case "servername":
                this.setState({servername:e.target.value});
                return false;
            case "serverdesc":
                this.setState({serverdesc:e.target.value});
                return false;
            default:
                return false;
        }
    }

    //handles editing inside the table showing list of servers.
    onEditing = (e, serverid) => {
        e.preventDefault();
        switch(e.target.name){
            case "servername"://edits name of the server
                this.setState({
                    Servers: this.state.Servers.map((server,index) => {
                        if(serverid === index){
                            return {
                                name:e.target.value,
                                desc:server.desc
                            }
                        }
                        return server;
                    })
                });
                return false;
            case "serverdesc"://edits description of the server
                this.setState({
                    Servers: this.state.Servers.map((server,index) => {
                        if(serverid === index){
                            return {
                                name:server.name,
                                desc:e.target.value
                            }
                        }
                        return server;
                    })
                });
                return false;
            default:
                return false;
        }
    }

    serverForm = () => {//functional form component
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Server Name:</label><br/>
                <input type="text" name="servername"  className="input" 
                onChange={this.onInputChange} value={this.state.servername}/>
                <br/>
                <label>Server Description: </label><br/>
                <textarea name="serverdesc" onChange={this.onInputChange} 
                className="input" value={this.state.serverdesc}/><br/>
                <input type="submit" className="input" />
            </form>
        )
    }

    render(){
        console.log("Component is rendering");
    
        return(
        <Fragment>
        {
            this.serverForm()
        }
        {/*display table only if Server Array is not empty*/
            this.state.Servers.length !== 0 &&
            <ServerList Servers={this.state.Servers} 
                onEditing={this.onEditing}/>
        }
        </Fragment>
        )
    }
}

export default ServerDetails;