import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";

function RegisterPage() {

    const { signUp } = useContext(AppContext); 
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();     
        const { username, email, password } = Object.fromEntries(
          new FormData(event.currentTarget)
        )
    
        let { error } = await signUp({
          email,
          password,
          options: {
            data: {
              username
            }
          }
        })
        if (error) {
          alert(error.error_description || error.message)
        } else {
          navigate('/account');
        }
      }
    
    return(
        <div className="container">
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <div className="form-container my-5">
                    <form onSubmit={handleRegister} className="form ">
                    <h1 className="text-dark">Registrati</h1>
                        <div className="form-group">
                        <label htmlFor="email">Inserisci Username</label>
                        <input name="username" id="username" type="text" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="email">Inserisci Email</label>
                        <input name="email" id="email" type="text" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Inserisci Password</label>
                        <input name="password" id="password" type="text" />
                        </div>
                        <button type="submit" className="form-submit-btn">Registrati</button>
                        <p>Ho gia un account, vai a <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RegisterPage;