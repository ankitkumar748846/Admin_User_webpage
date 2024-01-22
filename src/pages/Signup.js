import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Discover Tomorrow's World with Maply"
      desc1="Navigate your educational journey."
      desc2="Ensuring your future is as vibrant as the discoveries you make."
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
