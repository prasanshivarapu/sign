import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "./index.css";
import Sign from "../file2";

function Signup() {
    const  navigate = useNavigate()
const [first,setFirst]=useState("")
const [last,setLast]=useState("")
const [emaiL,setEmail]=useState("")
const [passworD,setPassword]=useState("")
const [error1,setError1]=useState("")
const [error2,setError2]=useState("")
const [error3,setError3]=useState("")
const [error4,setError4]=useState("")
const [sub,setSub] = useState("")
const signin = ()=>{
    
    navigate('/signin')
}
const [formData, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
const firstname = (event)=>{
    setFirst(event.target.value)
    if (event.target.value !== "") {
        setError1("")
      }
      setData((prev) => ({
        ...prev,
        firstname: event.target.value,
      }));
}
const lastname = (event)=>{
    setLast(event.target.value)
    if (event.target.value !== "") {
        setError2("")
      }
      setData((prev) => ({
        ...prev,
        lastname: event.target.value,
      }));
}
const email = (event)=>{
    setEmail(event.target.value)
    if (event.target.value !== "") {
        setError3("")
      }
      setData((prev) => ({
        ...prev,
        email: event.target.value,
      }));
}
const password= (event)=>{
    setPassword(event.target.value)
    if (event.target.value !== "") {
        setError4("") 
      }
      setData((prev) => ({
        ...prev,
        password: event.target.value,
      }));
}
const submit = (event) => {
    event.preventDefault();
    let isError = false;
  
    if (first === "") {
      setError1("First name is required");
      isError = true;
    } else if (first.length <= 3) {
      setError1("Firstname should contain a minimum of 3 characters");
      isError = true;
    
    } else {
      setError1("");
    }
  
    if (last === "") {
      setError2("Last name is required");
      isError = true;
    } else if(last.length<=3){
        setError2("Lastname should contain more  than 3 characters");
        isError = true;
    } else {
      setError2("");
    }
  
    if (emaiL === "") {
      setError3("Email is required");
      isError = true;
    } else {
      setError3("");
    }
  
    if (passworD === "") {
      setError4("Password is required");
      isError = true;
    } else if(passworD.length<=5){
        setError4("password should contain more  than 4 characters");
        isError = true;
    } else {
      setError4("");
    }
  
    if (!isError) {
      const formD = {
        firstname: first,
        lastname: last,
        email: emaiL,
        password: passworD,
      };
  
      
      let exist = JSON.parse(localStorage.getItem("Formdata"))|| [];
  
     if (!Array.isArray(exist)) {
        exist = [];
      }
   
  
     
      localStorage.setItem("Formdata", JSON.stringify([...exist, formD]));
  
      setSub("Successfully registered");
      setEmail("");
      setLast("");
      setFirst("");
      setPassword("");
      setData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      }); 
      setError1("")
      setError2("")
      setError3("")
      setError4("")
      
    }
    setTimeout(() => {
      setSub("");
    }, 6000);
  
  };
  
    return (
        <div className="main ">
            <h1>Signup Form</h1>
            <form onSubmit={submit}>
                <div>
                    <label className="first" htmlFor="firstName">First Name:</label> <br/>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="input"
                        value={first}
                        onChange={firstname}
                        
                        
                    />
                    <p className="error">{error1}</p>
                </div>
                <div>
                    <label  className="first" htmlFor="lastName">Last Name:</label><br/>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={last}
                        className="input"
                        onChange={lastname}
                      
                    />
                     <p className="error">{error2}</p>
                </div>
                <div>
                    <label className="first" htmlFor="email">Email:</label><br/>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input"
                        value={emaiL}
                        onChange={email}
                      
                    />
                     <p className="error">{error3}</p>
                </div>
                <div>
                    <label className="first" htmlFor="password">Password:</label><br/>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input"
                        value={passworD}
                        onChange={password}
                        
                    />
                     <p className="error">{error4}</p>
                </div>
                <div className="button">
                    <button className="but" type="submit">Submit</button>

                 <button className="but2" onClick={signin}>SignIn</button>
                </div>
                
            </form>
            <p className="sub">{sub}</p>
           
        </div>
    );
}
export default Signup;
