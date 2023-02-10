import { useState } from 'react';
import './App.css';

const DICTIONARY = {
  username: {
    aria: 'Enter username',
    displayText: "Username:",
  },
  password: {
    aria: 'Enter password',
    displayText: "Password:",
  },
  confirmedPassword: {
    aria: 'Confirm Password:',
    displayText: "Confirm Password:",
  }
};

function App() {
  const [username, setUsername]= useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const renderPasswordMatch = () => {
    if(password && confirmedPassword && (password === confirmedPassword)){
      return (
        <div className='passwordMatch'>
        Looks good!
        </div>
      )
    }

    return (
      <div  className='passwordMatch'>
      <p>Please ensure that passwords match and all fields are filled.</p>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Welcome. Please enter a username and Password.</h1>
      <form className='form'>
        <label>
          {DICTIONARY.username.displayText}
          <input 
          type='text' 
          value={username} 
          onChange={(e)  => setUsername(e.target.value)} 
          aria-label={DICTIONARY?.username?.aria}
          />
        </label>
        <label>
          {DICTIONARY.password.displayText}
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label={DICTIONARY?.password?.aria}
          />
        </label>
        <label>
          {DICTIONARY.confirmedPassword.displayText}
          <input
          type="password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          aria-label={DICTIONARY?.confirmedPassword?.aria}
          />
        </label>
        <input
          type="submit"
          value="Submit"
        />
      </form>
      {renderPasswordMatch()}
    </div>
  );
}

export default App;
