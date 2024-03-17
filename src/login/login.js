
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: {
        password: "",
        email: "",
      
      },
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      date: { ...this.state.date, [name]: event.target.value },
    });
  };
  handleSubmit = (event) => {
    
    const items = JSON.parse(localStorage.getItem('items'));
    if(items.email === this.state.date.email && items.password === this.state.date.password){
        alert('Login successfully')
        
    }
    else{
        alert('Please! signup first')
    }
    
    
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          padding: "20px",
          border: "5px solid blue",
          paddingLeft: "40%",
          paddingTop: "5%",
          paddingBottom: "4%",
          borderRadius: "28px",
        }}
      >
        <h2 style={{ color: "blue", paddingLeft: "25px" }}>Login page</h2>
        
        <>
          <label for password>
            password:
          </label>
          <br></br>
          <input
            type="password"
            name="password"
            value={this.state.date.password}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <br></br>
        </>
        <>
          <label for email>
            email:
          </label>
          <br></br>
          <input
            type="email"
            name="email"
            value={this.state.date.email}
            onChange={this.handleChange}
          ></input>
        <br></br><br></br>
  
          <input
            type="submit"
            value="submit"
            style={{color:'red'}}
          ></input>
        </>
      </form>
    );
  }
}
export default Login;
