import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './Sections.css';

class About extends Component {

  render() {

    return (
      <Flexbox id="section_about" flexDirection="column">
        <Flexbox className="section_box" flexDirection="row">
          <Flexbox className="section_component" flexDirection="column">
            <div>
              <Flexbox className="section_parts" flexDirection="row">
                <Flexbox className="profile" flexDirection="column">
                  <div className="image_wrapper" style={{backgroundImage: 'url("/profile_picture.jpg")'}}></div>
                  <div className="text">
                    <div className="name">
                      <p>Manuela Manolova</p>
                    </div>
                    <div className="title">
                      <p>Geomatics Engineer</p>
                    </div>
                  </div>
                </Flexbox>
                <Flexbox className="about" flexDirection="column">
                  <div className="info">
                    <p>Hi! I am Manuela and I am a dedicated Geomatics Engineer with affinity for web design and development. I am an organized and hard-working individual who strives to achieve optimal results.<br/><br/>

                      Having worked for international companies across multiple sectors such as Geo-ICT, navigation systems, architecture and construction, I have a broad knowledge in modeling, manipulation, and analysis of geospatial data, web and mobile app development, product design, and prototype development, while also being able to work in an agile way and communicate effectively with internal and external stakeholders. Furthermore, my recent experience has allowed me to gain exposure and eventually master process automation by using Python. Among other traits, I identify myself as a good communicator and team player, a critical thinker and practical problem-solver with strong time management skills.<br/><br/>

                      I am very interested in the development of web-based tools and solutions and their optimization, as I am confident that digital technologies play an essential role in the development of smart cities. To get a better insight of my work, please check my portfolio.</p><br/>
                    <a className="btn btn-primary btn-lg" href="https://github.com/mmanolova-92" role="button">Discover now</a>
                  </div>
                </Flexbox>
              </Flexbox>
              <hr/>
            </div>
          </Flexbox>
        </Flexbox>
      </Flexbox>

    )
  }
}

export default About;
