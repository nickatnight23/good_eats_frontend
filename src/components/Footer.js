import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4>GOOD EATS INC</h4>
                        <ul className="list-unstyled">
                            <li>707-123-456</li>
                            <li>Fairfield, California</li>
                            <li>123 Street South North</li>
                
                        </ul>

                    </div>
                    {/* Column 2 */}
                    <div className="col">
                        <h4>STUFF</h4>
                        <ul className="list-unstyled">
                            <li>Great Food</li>
                            <li>Other Stuff</li>
                            <li>Good Stuff</li>

                        </ul>

                    </div>
                    {/* Column 3 */}
                    <div className="col">
                        <h4>Another Column</h4>
                        <ul className="list-unstyled">
                            <li>Great Food</li>
                            <li>Other Stuff</li>
                            <li>Good Stuff</li>

                        </ul>

                    </div>

                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} GOOD EATS INC | All rights reserved| Terms of service|Privacy
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Footer