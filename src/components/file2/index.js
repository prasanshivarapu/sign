import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "./index.css";


function Sign() {
    const  navigate = useNavigate()
// const [data,setData]=useState(JSON.parse(localStorage.getItem("Formdata")))
const [emaiL,setEmail]=useState("")
const [passworD,setPassword]=useState("")

const [error3,setError3]=useState("")
const [error4,setError4]=useState("")
const [sub,setSub] = useState("")
const register = ()=>{
    
    navigate('/welcome')
}
// if(true){
//     const a = JSON.parse(localStorage.getItem("Formdata"))
//     a.map((each)=>console.log(each.email.includes()))
// }
const email = (event)=>{
    setEmail(event.target.value)
    if (event.target.value !== "") {
        setError3("")
      }
      
}
const password= (event)=>{
    setPassword(event.target.value)
    if (event.target.value !== "") {
        setError4("") 
      }
     
}
const apple = ()=>{
    navigate("/welcome")
}
const submit = (event) => {
    event.preventDefault();
   
    const a = JSON.parse(localStorage.getItem("Formdata"))
    const mapE = a.map(function(each){
        if(each.email.includes(emaiL) && each.password.includes(passworD)){
            return apple() 
        } else{
            setSub("Invalid credentials")
            setEmail("")
            setPassword("")
        }   
    })
    a.map((each)=>console.log(each.email.includes(emaiL) && each.password.includes(passworD) ))

  
  
      
      
      
    

  
  };
  
    return (
        <div className="main ">
            <h1>SignIn form</h1>
            <form onSubmit={submit}>
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

                 <button className="but2" onClick={register}>Register</button>
                </div>
                
            </form>
            <p className="error">{sub}</p>
           
        </div>
    );
}
export default Sign;
