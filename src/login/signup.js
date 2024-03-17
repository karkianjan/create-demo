

import React, { Component } from 'react'

 class Multiple extends React.Component {
    
        constructor(props) {
            super(props);
            this.state = { 
              data : {firstName:'', lastName:'', age:0, email:'', address:'', citizenshipNumber:0, genderSelect:'', password:'', number:'' }
        };
      }

        handleChange = (event) => {
            
        const name= event.target.name
        
        this.setState({
          data: {
              ...this.state.data,
              [name]: event.target.value
          }
      });
    }
      
      handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.data);
        localStorage.setItem('data', JSON.stringify(this.state.data))
        alert("Form submitted!")

      };
     
      
  render() {
    return (
      <div>
        <h1 style={{marginLeft:'500px', color:'blue'}}> SignUp Page</h1>
<form onSubmit={this.handleSubmit} style={{border:'1px solid black ', padding:"10px", margin:'20px', color:'red', fontFamily:'poppins', fontSize:'20px' ,borderRadius:'20px', paddingRight:'300px' }}>

<label>
           Enter your First Name:
          <input type="text" name='firstName' value={this.state.data.firstName} onChange={this.handleChange} />
        </label>
        <br></br><br></br>
<label>
        Enter Your  Last  Name:
          <input type="text" name='lastName' value={this.state.data.lastName} onChange={this.handleChange} />
        </label>
        <br></br><br></br>
        <label>Enter a new password:</label>
  <input type='password' name= 'password' value={this.state.data.password} onChange={this.handleChange}/>
<br></br><br></br>

        <label>
        Enter Your age  :
          <input type="number" name='age' value={this.state.data.age} onChange={this.handleChange} />
        </label>
        <br></br><br></br>

        <label>
         Enter Your email:
          <input type="email" name='email' value={this.state.data.email} onChange={this.handleChange} />
        </label>
        <br></br><br></br>
        <label>
         Enter Your mailing address:
          <input type="text" name='address' value={this.state.data.address} onChange={this.handleChange} />
        </label>
        <br></br><br></br>

        <label>
        Enter Your citizenship number :
          <input type="number" name='citizenshipNumber' value={this.state.data.citizenshipNumber} onChange={this.handleChange} />
        </label>
        <br></br><br></br>
<label>Please Select Your Gender:</label>
        <select name='genderSelect' value={this.state.data.genderSelect} onChange={this.handleChange}>
  <option value="Male">Male</option>
  <option value="female">Female</option>
  <option selected value="others">Others</option>
  </select><br></br><br></br>
  
  <label>Enter Your phone No:</label>
  <input type='number' name='number' value={this.state.data.number} onChange={this.handleChange}/>
<br></br><br></br>
<input type='submit'style={{marginLeft:'300px' }}/>
</form>



  </div>
    )
  }
}
export default Multiple