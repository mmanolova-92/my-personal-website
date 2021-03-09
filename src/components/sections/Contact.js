import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Modal, Button } from 'react-bootstrap';
import * as emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'font-awesome/css/font-awesome.min.css';
import './Sections.css';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "Submit",
      isOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.confirmSubmit = this.confirmSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ status: "Sending" });

    const templateParams = {
      from_name: this.state.name,
      from_email: this.state.email,
      to_name: 'Manuela Manolova',
      subject: this.state.subject,
      message_html: this.state.message
    };

    emailjs.send(
      'service_oijbxv9',
      'template_1vzzukc',
       templateParams,
      'user_r2jF2aWbxRezP3XTD9i0v'
    ).then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      status: "Submit",
    });
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "subject") {
      this.setState({ subject: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  confirmSubmit() {
    this.setState({ isOpen: true });
  }

  render() {

    return (
      <Flexbox id="section_contact" flexDirection="column">
        <Flexbox className="section_box" flexDirection="row">
          <Flexbox className="section_component" flexDirection="column">
            <div style={{width: '100%'}}>
              <Flexbox className="section_parts" flexDirection="row">
                <Flexbox className="contact_form" flexDirection="column">
                  <p><strong>Contact</strong></p>
                  <div className="form">
                    <div className="row">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                          <textarea rows="5" cols="50" type="text" className="form-control" id="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                      <Modal show={this.state.isOpen} onHide={this.closeModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>Message sent</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>Your message was sent successfully.</p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={this.closeModal}>OK</Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </Flexbox>
                <Flexbox className="details" flexDirection="column">
                  <div id="map">
                  <MapContainer style={{width: '90%', height: '100%'}} center={[52.533710, 13.367060]} zoom={12} scrollWheelZoom={false}>
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[52.533710, 13.367060]}>
                      <Popup>
                        Otto-Weidt-Platz 5 <br/>10557 Berlin <br/>Germany
                      </Popup>
                    </Marker>
                    </MapContainer>
                  </div>
                  <div className="container">
                    <div className="row icons">
                      <div className="col">
                        <a href="https://github.com/mmanolova-92" className="fa fa-github-square"></a>
                      </div>
                      <div className="col">
                        <a href="https://www.linkedin.com/in/mmanolova/" className="fa fa-linkedin-square"></a>
                      </div>
                      <div className="col">
                        <a href="https://www.xing.com/profile/Manuela_Manolova" className="fa fa-xing-square"></a>
                      </div>
                      <div className="col">
                        <a href="https://www.facebook.com/manuellatm" className="fa fa-facebook-square"></a>
                      </div>
                    </div>
                  </div>
                </Flexbox>
              </Flexbox>
              <br/>
            </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>

    )
  }
}

export default Contact;
