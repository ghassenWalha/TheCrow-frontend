const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

// const config = require('config');

const complexityOptions = {
    min:8,
    max:30,
    lowerCase:1,
    upperCase:1,
    symbol:1,
    requirementCount: 2,

};


const emailValidation = (email) => Joi.validate(email, Joi.string()
    .email({
        minDomainSegments: 2,
        tlds: {
            allow: ['com', 'net']
        }
    }).required().label('email'));
const usernameValidation = (username) => Joi.validate(username, Joi.string().min(3).max(255).required());

const passwordValidation = (password) =>{
   const validation= passwordComplexity(complexityOptions, "password").validate(password);
  if ( validation.error )
  {
    validation.error.details = validation.error.details.map(detail => 
        {
            detail.path = "password" ;
            return detail;
        }) ;
  
       

  }

  return validation;
} 

const confirmPasswordValidation = (confirmPassword) =>Joi.validate(confirmPassword, Joi.string()); 


export default {
    email: emailValidation,
    username: usernameValidation,
    password: passwordValidation,
    confirmPassword:confirmPasswordValidation
}