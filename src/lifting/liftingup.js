import React  from 'react'

 class Liftingup extends React.Component {
        constructor(props) {
        super(props);
        this.state = {temperature: ''};
      }

      handleChange= (event) =>{
        this.props.onClickTemperature( event.target.value)
      }
  render() {
    return (
      <div>
       <label>
        Input field:
       </label>
       <input type='text' value={this.props.temperature} onChange={this.handleChange}/>
      </div>
    )
  }
}
export default Liftingup