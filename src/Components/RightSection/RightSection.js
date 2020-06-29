import React, { Component } from 'react';
import Repository from '../Repository/Repository';
//import './LeftSection.css';

class RightSection extends Component{
   
    render(){
        return ( <div style={{overflow:"hidden", border:"1px solid black" }} >
            <div >
            <button>Overview</button>
            <button>Repositories 11</button>
            <button>Stars 5</button>
            <button>Followers 2</button>
            <button>Following 2</button>
            </div>   
            <div>
            <Repository/></div>  
        </div>
  );
    }
  
}

export default RightSection;