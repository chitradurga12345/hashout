import React, { Component } from 'react';
import axios from 'axios';
import './LeftSection.css';

class LeftSection extends Component{
    constructor(props){
        super(props);
        this.state={
            person:[]
        }
    }
    componentDidMount(){
            axios.get('https://api.github.com/users/supreetsingh247')
            .then(response=>{
            //console.log(response.data);
            const persons = response.data;
            this.setState({
                person :persons
            });

            });
        }
    render(){
        return ( <div style={{float:"left"}}>
                <div></div>
                <img src={this.state.person.avatar_url} alt ="person image" style={{width:"200px"}}></img>
                <div>{this.state.person.name}</div> 
                <div>{this.state.person.login}</div>
                <div>{this.state.person.bio}</div>
                <button>Edit bio</button>
                <div>{this.state.person.company}</div>
                <div>{this.state.person.location}</div>
                </div>
          );
    }
  
}

export default LeftSection;