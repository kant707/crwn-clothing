import React from 'react';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch(error) {
      console.log(error);
    }

    this.setState({
      email: '',
      password: '',
    })
  }

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState(
      {
        [name]: value
      }
    )
  }

  render() {

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <h2>Sign in with your email and password</h2>

        <form action="" onSubmit={this.handleSubmit}>
          <FromInput 
            type="text" 
            name="email" 
            value={this.state.email} 
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FromInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="Password"
            required 
          />
          <div className="buttons">
            <CustomButton  type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn;