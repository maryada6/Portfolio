import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_tBKqt79rugK2nYgnFgPsx");
class Contactform extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'maryada@student.tce.edu',
      subject: subject,
      message
     }
     
     emailjs.send(
      'service_0htmtdt',
      'template_ysg9x3k',
       templateParams,
      'user_tBKqt79rugK2nYgnFgPsx'
     ).then(result=>{alert("Mail sent")})
     .catch(err=>alert("Mail not sent"))
     this.resetform()
 }
resetform() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
      
     <div className="about-container">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="contain-input">
              
              <label className="email" htmlFor="text-input">Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                className="input email-input"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
              <label className="name" htmlFor="text-input">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                className="input name-input"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
              <label className="subject" htmlFor="text-input">Subject:</label>
              <input
                type="text"
                name="subject"
                className="input subject-input"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
              <label className="message" htmlFor="textarea">Message:</label>
              <textarea
                type="textarea"
                name="message"
                className="input message-input"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
               </div>
                <div className="email-button-holder">
                <button className="email-button" variant="primary" type="submit">
                Submit
              </button>
              </div>
            </form>
            </div>
      </>
    )
  }
}
export default Contactform