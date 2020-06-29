import React, { Component } from 'react';

class ChildRepo extends Component{
   
    
    render(){
        return ( <div style={{border:"1px solid black", width:"90%", margin: "5px", padding: "10px", float:"right", textAlign:"left"}}>
                  <div style={{color:"blue" ,fontSize:"20px"}}> {this.props.name}</div> 
                  <div> {this.props.description}</div> 
                  <div> {this.props.language} 
                    {`Updated ago`}
                    {this.props.starCount}</div>
                    {//this.props.license
                    }
                    
                </div>
          );
    }
  
}

export default ChildRepo;