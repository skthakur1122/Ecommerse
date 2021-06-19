import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

  import {auth ,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
constructor(props){
super(props);

this.state = {

    email:'',

    password: ''
};

}

handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try{
     await auth.signInWithEmailAndPassword(email,password);
     this.setState({email:'', password:''});
     

    }catch (error){
      console.log(error);
    }

    
};


handleChange = event => {

    const {value,name} = event.target;

    this.setState({[name]:value});
};



render(){

    // return(

    //     <div className='sign-in'>
    //     <h2> Already have an account</h2>
    //     <span>Sign in with your email and password</span>

    //     <form onSubmit={this.handleSubmit}>
    //     <label>Email</label>
    //     <FormInput 
    //     name='email' 
    //     type='email'  
    //     handleChang={this.handleChange}
    //     value={this.state.email}
    //     label='email'
    //    required


    //     />
    
    //     <label>Password</label>
    //     <FormInput
    //     name='password'
    //     type='password'
    //     value={this.state.password}
    //     handleChang={this.handleChange}
    //     label='password'
    //     required
        
    //     />
        
        
    //     <input type='submit' value='submit'></input>

        
    //     </form>


    //     </div>
    // );

    return (
        <div className='sign-in'>
          <h2 > Already have an account</h2>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
           <div className='buttons'>
           <CustomButton type='submit' >Signin</CustomButton>
            <CustomButton  onClick={signInWithGoogle} isGoogleSignIn >
            
            Signin with Google
            </CustomButton>
           </div>
            
          
          </form>
        </div>
      );
}


}

export default SignIn;