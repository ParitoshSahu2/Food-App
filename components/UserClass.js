import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);  
        
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            },
        };
    };
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/ParitoshSahu2");
        const json=await data.json();
        console.log(json);

        this.setState({
            userInfo:json,
            
        });
    }
   
    
    render(){
        const {login,location,avatar_url}=this.state.userInfo;
        return(
            <div>
               <img src={avatar_url}></img>
                <h2>Name:{login}</h2>
                <h3>Location:{location}</h3>
                
            </div>
        );
    }
}
export default UserClass; 