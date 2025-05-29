import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
return(
<div>
    <h1>About section</h1>
    <User name={"Paritosh Sahu(Function)"}/>
    <UserClass  name={"Paritosh Sahu(class)"} location={"Indore(class)"}/>
</div>
);
};

export default About;