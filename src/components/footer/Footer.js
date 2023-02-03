import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
          <div className="col">
            <h6>THICC MEMES INC</h6>
            <h4 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5>Stuff</h5>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          <div className="col">
            <h6>WELL ANOTHER COLUMN</h6>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
