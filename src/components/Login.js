import React, { useEffect , useState} from "react";
import axiosWithAuth from '../auth/axiosWithAuth'

const credentials = {
  username: "",
  password: "",

}

const Login = () => {
  const [babyCreditals, setBabyCredials] = useState(credentials)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setBabyCredials({
      ...babyCreditals,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    axiosWithAuth().post('/api/login', babyCreditals)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload)
        window.location.href = '/BubblePage'
      })
      .catch(err => console.log(err))



  }


  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <form onSubmit={onSubmit}>
        
          <label>
            UserName:
            <input type="text" name="username" onChange={onChangeHandle} value={babyCreditals.username} />
          </label>
          
          <label>
            Password:
            <input type="password" name="password" onChange={onChangeHandle} value={babyCreditals.password} />
          </label>

          <button>Sign in</button>

        </form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.