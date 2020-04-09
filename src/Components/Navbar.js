import React from 'react';
import '../App.css';

export class Navbar extends React.Component {
    



    render(){
        return(
            <div className="navbar-wrap">
                <figure className="logo-wrap">
                    {this.props.svgD}
                </figure>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li id=""><a id="link" href="#">{this.props.contact}</a></li>
                            <li id=""><a id="link" href="#">{this.props.vision}</a></li>
                            <li id=""><a id="link" href="#">{this.props.space}</a></li>
                            <li id=""><a id="link" href="#">{this.props.location}</a></li>
                            <li id=""><a id="link" className="" href="#">{this.props.home}</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}