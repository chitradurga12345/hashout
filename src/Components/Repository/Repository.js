import React, { Component } from 'react';
import axios from 'axios';
import ChildRepo from '../ChildRepo/ChildRepo';


class Repository extends Component{
    constructor(props){
        super(props);
        this.state={
            Repository:[]
        }
    }
    componentDidMount(){
            axios.get( "https://api.github.com/users/supreetsingh247/repos")
            .then(response=>{
           // console.log(response.data);
            const Repo = response.data;
            this.setState({
                Repository : Repo
            });   
          });
        }
    render(){
        return ( <div >
                <div>
                    <input type="text" placeholder="Search repositories"/>
                    <select>
                        <option>Type</option>
                    </select>
                    <select>
                        <option>Language</option>
                    </select>
                    <button>New</button>
                </div>
                {this.state.Repository.map((obj)=>
                  <ChildRepo  key={obj.id}
                              name ={obj.name}
                              description={obj.description}
                              language={obj.language}
                              starCount={obj.stargazers_count}
                              license ={obj.license}/>
                )}
                </div>
          );
    }
  
}

export default Repository;