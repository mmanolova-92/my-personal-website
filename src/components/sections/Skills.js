import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import { Table } from 'react-bootstrap';
import './Sections.css';

class Skills extends Component {

  render() {

    return (

      <Flexbox id="section_skills" flexDirection="column">
        <Flexbox className="section_box" flexDirection="row">
          <Flexbox className="section_component" flexDirection="column">
            <div style={{width: '100%'}}>
              <Flexbox className="section_tables" flexDirection="row">
                <Flexbox className="skills_table" flexDirection="column">
                  <Table className="table" responsive>
                    <thead>
                      <tr>
                        <th>Skills</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p>HTML, CSS, Bootstrap, JavaScript</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Python, Flask, React, React Native</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>PostgreSQL, MySQL, SQL, PL/SQL</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>ArcGIS, QGIS, PostGIS</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Node.js, Three.js, Mapbox GL</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>GitHub, Heroku, XCode</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>Oracle, Oracle APEX, Wordpress</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>C, Matlab, Adobe XD</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '45%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p>AWS, FME, Autodesk Inventor</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '35%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Flexbox>
                <Flexbox className="certificates_table" flexDirection="column">
                  <Table className="table" responsive>
                    <thead>
                      <tr>
                        <th>Certificates</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{width: '20%'}}>12/2020</td>
                        <td style={{paddingBottom: '2.5%'}}>Introduction to Computer Science<br/><span style={{color: '#A2A2A2'}}>HarvardX</span></td>
                      </tr>
                      <tr>
                        <td style={{width: '20%'}}>03/2020</td>
                        <td style={{paddingBottom: '2.5%'}}>Build a Stock Market Web App With Node and JavaScript<br/><span style={{color: '#A2A2A2'}}>Udemy</span></td>
                      </tr>
                      <tr>
                        <td style={{width: '20%'}}>11/2019</td>
                        <td style={{paddingBottom: '2.5%'}}>Python for Data Science and Machine Learning Bootcamp<br/><span style={{color: '#A2A2A2'}}>Udemy</span></td>
                      </tr>
                      <tr>
                        <td style={{width: '20%'}}>11/2018</td>
                        <td style={{paddingBottom: '2.5%'}}>Agile in the Workplace<br/><span style={{color: '#A2A2A2'}}>HERE Technologies</span></td>
                      </tr>
                      <tr>
                        <td style={{width: '20%'}}>03/2018</td>
                        <td style={{paddingBottom: '2.5%'}}>Using GIS for the Quantitative and Qualitative Landscape Analysis<br/><span style={{color: '#A2A2A2'}}>Polytechnic University of Milan</span></td>
                      </tr>
                      <tr>
                        <td style={{width: '20%'}}>11/2017</td>
                        <td style={{paddingBottom: '2.5%'}}>Create Complete Web Applications Easily with APEX 5<br/><span style={{color: '#A2A2A2'}}>Udemy</span></td>
                      </tr>
                    </tbody>
                  </Table>
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

export default Skills;
