import React from "react";
import "./style.css";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, } from "mdbreact";






  export default class Homepage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
          acount : ''
        }
        this.state ={
          password : '',
          clicklog : '',
        }
        this.ac = this.ac.bind(this);
        this.pw = this.pw.bind(this);
      }
      ac(event) {
        this.setState({acount: event.target.value })
      }

      pw(event) { this.setState({password: event.target.value }) };

      login   (){
        if(this.state.acount === 'a' && this.state.password === '1' )
                
          {
            this.setState({clicklog: '/homepage'})
          }else{
            
            alert('wrong id or password');
            
          }}


      render(){
        return(
        <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          
            <p className="h4 text-center mb-4">Sign in</p>
           
            <label id="username" htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Acount
            </label>
            <input
              type="email"
              id="defaultFormLoginEmailEx"
              className="form-control"
              value= {this.state.acount}
              onChange={this.ac}
            />
            <br />
            <label  id="password" htmlFor="defaultFormLoginPasswordEx" className="grey-text">
               password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              value = {this.state.password}
              onChange={this.pw}
            />
            
            <div className="text-center mt-4">
              <MDBBtn color="indigo" type="submit" href={this.state.clicklog} onClick = { this.login.bind(this) }>Login</MDBBtn>
            </div>
           <label>
             Do not have a acount? <a className="blue-text" href="/register">Resigter</a>
           </label>
          
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
}
  }



