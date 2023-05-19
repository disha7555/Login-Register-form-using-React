import React from 'react';
import './login.css';
function Login1(){
    const[text,setText]=React.useState();
    const[text2,setText2]=React.useState();

    const handleChange1=(e)=>{
      console.log(e.target.value);
      setText(e.target.value);
    }
    const handleChange2=(e)=>{
      console.log(e.target.value);
      setText2(e.target.value);
    }
    const handleButtonClickLoginSubmit=()=>{
        let username1=localStorage.getItem('Username');
        let password1=localStorage.getItem('Password');
        if(text===username1 && text2===password1)
        {
            alert("Login successful");
        }
        else{
            alert("login failed, please check your credentials");
        }
        
        
  }
    return(
        <>
        <div className="content">
        <div className="form_content" style={{height:'500px',width:'500px',marginLeft:'400px',marginTop:'200px'}}>
                    
                
                    <form className="form-floating" style={{border:'5px solid white',padding:'20px',justifyContent:'center',alignItems:'center',borderRadius:'10px',boxShadow:'inset'}}>
                        <div className="title1" style={{textAlign:'center',fontSize:'30px'}}>
                            Login
                        </div>
                        <div className="row" id="row1" >
                            
                            
                        <div className="col-md-5">
                            <div className="form-floating">
                            <input type="text"  className="form-control form-control2" id="u_name"  placeholder="User Name" onChange={(e)=>handleChange1(e)}/>
                            <label for="u_name">User Name</label>
                            </div>
                        </div>
                        </div>
                        <div className="row" id="row1">
                    

                       

                        <div className="col-md-5">
                            <div className="form-floating">
                            <input type="password"  className="form-control form-control2" id="p"  placeholder="Password" onChange={(e)=>handleChange2(e)}/>
                            <label for="p">Password</label>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="row">
                        <div className="sub_button">
                            <input type="submit"  className="form-control form-control2" id="submit" onClick={()=>handleButtonClickLoginSubmit()}/>
                            <label for="submit"></label>
                        </div>
                        </div>
                        
                </form>
                
            
        </div>
    </div>

        </>
    );
}
export default Login1;