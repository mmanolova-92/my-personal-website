import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import Carousel from 'react-bootstrap/Carousel';
import './Sections.css';

class Services extends Component {

  render() {

    return (

      <Flexbox id="section_services" flexDirection="column">
        <Flexbox className="section_box" flexDirection="row">
          <Flexbox className="section_component" flexDirection="column">
            <div className="services_carousel">
              <strong><p style={{fontSize: '1.35vw', color: '#000'}}>Services</p></strong>
              <Carousel>
                <Carousel.Item>
                  <img
                    src="./icons/gis.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p style={{fontSize: '1.35vw', fontWeight: '500'}}>Geographic Information Systems</p>
                    <p>Collecting, modeling, analyzing and visualizing various types of geospatial data.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./icons/requirements_analysis.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p style={{fontSize: '1.35vw', fontWeight: '500'}}>Requirements Analysis</p>
                    <p>Communicating with internal and external stakeholders to determine the user expectations for a new product.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./icons/ui_ux_design.png"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p style={{fontSize: '1.35vw', fontWeight: '500'}}>UI/UX Design</p>
                    <p>Designing user-friendly interfaces for web and mobile applications.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./icons/web_development.png"
                    alt="Fourth slide"
                  />
                  <Carousel.Caption>
                    <p style={{fontSize: '1.35vw', fontWeight: '500'}}>Web Design & Development</p>
                    <p>Building web applications by using modern technologies like HTML, CSS, JavaScript, React and Three.js.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <hr/>
            </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    )
  }
}

export default Services;
