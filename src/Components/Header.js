import React from 'react';
import { App } from '../App.js';
import { Navbar } from './Navbar';
import '../App.css';

export class Header extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }


    render(){
        return(
            <div className="header">
                {/* NAVBAR */}
                <div className="navigation-bar">
                    {this.props.Ngbar}
                </div>
                {/* SVG */}
                <div className="header-svg">
                    <div className="top-right-svg">{this.props.svgF}</div>
                    <div className="bottom-left-svg">{this.props.svgG}</div>
                </div>
                <div className="header-title-wrapper">
                    <div className="header-inner-wrap">
                            <h3 className="header-title_1">
                                {this.props.Ftitle}
                            </h3>
                            <h3 className="header-title_2">
                                {this.props.Stitle}
                            </h3>
                            <h3 className="header-title_3">
                                {this.props.Ttitle}
                            </h3>
                    </div>
                </div>

                <div className="social-media">
                    <div className="media-wrap">
                        <figure id="insta">{this.props.svgB}</figure>
                        <figure id="facebook">{this.props.svgC}</figure>
                        <figure id="web-logo">{this.props.svgD}</figure>
                    </div>
                    <div className="sub-title">
                        <h4>Student Accomodation</h4>
                    </div>
                </div>
            </div>
        );
    }
}