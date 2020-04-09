import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Header } from './Components/Header';
import { render } from '@testing-library/react';







class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //NAVBAR
      Home: 'home',
      Location: 'locations',
      Spaces: 'Spaces',
      Vision: 'Vision',
      Contact: 'Contact',
      // HEADER
      Ftitle: 'Web design modern communities',
      Stitle: 'that advance the wellbeing of young',
      Ttitle: 'adults',
      SvgA: <svg xmlns="http://www.w3.org/2000/svg" width={106} height="17.18" viewBox="0 0 106 17.18">
        <g id="Group_187" data-name="Group 187" transform="translate(-238.835 -268.125)">
          <g id="Group_186" data-name="Group 186" transform="translate(238.835 268.125)">
            <path id="Path_402" data-name="Path 402" d="M244.156,268.125a3.426,3.426,0,0,1,2.548,1.134,3.8,3.8,0,0,1,0,5.32,3.425,3.425,0,0,1-2.548,1.135h-3.427v5.253h-1.894V268.125Zm0,1.751h-3.427v4.053h3.427a1.731,1.731,0,0,0,1.36-.618,2.041,2.041,0,0,0,0-2.8,1.773,1.773,0,0,0-1.36-.635" transform="translate(-238.835 -268.125)" fill="#001a7d" />
            <path id="Path_403" data-name="Path 403" d="M279.5,285.452a2.294,2.294,0,0,0-1.24-.384,2.108,2.108,0,0,0-1.515.634,2.2,2.2,0,0,0-.655,1.518v4.636h-1.722V283.6h1.722v.985a2.829,2.829,0,0,1,2.342-1.1,3.98,3.98,0,0,1,1.723.368Z" transform="translate(-264.026 -279.013)" fill="#001a7d" />
            <path id="Path_404" data-name="Path 404" d="M302.751,290.738a4.422,4.422,0,0,1-6.129,0,4.233,4.233,0,0,1,0-6.021,4.422,4.422,0,0,1,6.129,0,4.233,4.233,0,0,1,0,6.021m-1.256-1.2a2.428,2.428,0,0,0,.792-1.8,2.6,2.6,0,0,0-5.2,0,2.633,2.633,0,0,0,2.6,2.568,2.469,2.469,0,0,0,1.808-.767" transform="translate(-278.913 -279.013)" fill="#001a7d" />
            <path id="Path_405" data-name="Path 405" d="M331.232,290.973v5.221h-1.705V283.6h1.705v.884a2.66,2.66,0,0,1,.309-.283,4.636,4.636,0,0,1,.9-.434,3.824,3.824,0,0,1,1.43-.283,4.172,4.172,0,0,1,3.047,1.234,4.232,4.232,0,0,1,0,6.02,4.172,4.172,0,0,1-3.047,1.234,4.086,4.086,0,0,1-2.343-.75Zm-.017-3.252a2.46,2.46,0,0,0,.792,1.817,2.582,2.582,0,0,0,1.86.768,2.635,2.635,0,0,0,2.6-2.585,2.418,2.418,0,0,0-.775-1.8,2.45,2.45,0,0,0-1.824-.767,2.64,2.64,0,0,0-1.86.767,2.426,2.426,0,0,0-.792,1.8" transform="translate(-303.133 -279.015)" fill="#001a7d" />
            <path id="Path_406" data-name="Path 406" d="M371.74,288.549h-6.681a2.659,2.659,0,0,0,2.462,1.751,2.453,2.453,0,0,0,1.826-.767l.017-.016,1.24,1.2a4.447,4.447,0,0,1-6.148.033,4.294,4.294,0,0,1,0-6.037,4.239,4.239,0,0,1,3.065-1.235,4.285,4.285,0,0,1,4.219,5.071m-1.773-1.7a2.62,2.62,0,0,0-4.907,0Z" transform="translate(-327.017 -279.009)" fill="#001a7d" />
            <path id="Path_407" data-name="Path 407" d="M402.944,285.452a2.294,2.294,0,0,0-1.24-.384,2.107,2.107,0,0,0-1.515.634,2.2,2.2,0,0,0-.655,1.518v4.636h-1.721V283.6h1.721v.985a2.829,2.829,0,0,1,2.342-1.1,5.655,5.655,0,0,1,2.067.368Z" transform="translate(-351.545 -279.013)" fill="#001a7d" />
            <g id="Group_185" data-name="Group 185" transform="translate(61.042 0)">
              <path id="Path_408" data-name="Path 408" d="M448.579,280.969V268.126h1.895v11.208h6.181v1.635Z" transform="translate(-448.579 -268.126)" fill="#001a7d" />
              <rect id="Rectangle_79" data-name="Rectangle 79" width="1.722" height="8.256" transform="translate(10.044 4.57)" fill="#001a7d" />
              <rect id="Rectangle_80" data-name="Rectangle 80" width="1.722" height="8.256" transform="translate(23.641 4.57)" fill="#001a7d" />
              <path id="Path_409" data-name="Path 409" d="M548.046,291.858v-4.62a2.057,2.057,0,0,0-.655-1.518,2.1,2.1,0,0,0-1.549-.65,2.041,2.041,0,0,0-1.533.65,2.009,2.009,0,0,0-.637,1.5v4.636H541.95v-8.24h1.721v.968a2.827,2.827,0,0,1,2.342-1.1,3.5,3.5,0,0,1,2.686,1.068,3.768,3.768,0,0,1,1.033,2.768v4.537Z" transform="translate(-514.776 -279.015)" fill="#001a7d" />
              <path id="Path_410" data-name="Path 410" d="M582,283.6v8.389a3.961,3.961,0,0,1-1.257,2.968,4.268,4.268,0,0,1-3.064,1.235,4.187,4.187,0,0,1-3.066-1.235l1.205-1.167a2.658,2.658,0,0,0,3.7,0,2.368,2.368,0,0,0,.775-1.8v-1.018a1.934,1.934,0,0,1-.328.283,4.363,4.363,0,0,1-2.308.717,4.232,4.232,0,0,1-3.065-1.217,4.295,4.295,0,0,1,0-6.037,4.244,4.244,0,0,1,3.065-1.234,4.076,4.076,0,0,1,2.342.751l.293.25V283.6Zm-1.687,4.136a2.428,2.428,0,0,0-.792-1.8,2.6,2.6,0,0,0-1.861-.783,2.633,2.633,0,0,0-2.6,2.584,2.419,2.419,0,0,0,.775,1.8,2.453,2.453,0,0,0,1.825.768,2.644,2.644,0,0,0,1.861-.768,2.428,2.428,0,0,0,.792-1.8" transform="translate(-537.039 -279.015)" fill="#001a7d" />
              <path id="Path_411" data-name="Path 411" d="M482.482,273.92a1.131,1.131,0,0,1,0-1.584,1.157,1.157,0,0,1,1.635,0,1.073,1.073,0,0,1,0,1.584,1.224,1.224,0,0,1-1.635,0" transform="translate(-472.386 -270.871)" fill="#001a7d" />
              <path id="Path_412" data-name="Path 412" d="M529.2,273.92a1.132,1.132,0,0,1,0-1.584,1.157,1.157,0,0,1,1.635,0,1.073,1.073,0,0,1,0,1.584,1.224,1.224,0,0,1-1.635,0" transform="translate(-505.507 -270.871)" fill="#001a7d" />
            </g>
          </g>
          <path id="Path_413" data-name="Path 413" d="M498.309,292.142l-3.53-8.256h1.877l2.428,5.5,2.377-5.5h1.877l-3.5,8.256Z" transform="translate(-181.455 -11.174)" fill="#001a7d" />
        </g>
      </svg>,
      SvgB: <svg xmlns="http://www.w3.org/2000/svg" width="19.338" height="19.333" viewBox="0 0 19.338 19.333">
        <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram" d="M9.666,6.948A4.957,4.957,0,1,0,14.622,11.9,4.949,4.949,0,0,0,9.666,6.948Zm0,8.179A3.223,3.223,0,1,1,12.888,11.9a3.228,3.228,0,0,1-3.223,3.223Zm6.316-8.382a1.156,1.156,0,1,1-1.156-1.156A1.153,1.153,0,0,1,15.981,6.745Zm3.283,1.173A5.722,5.722,0,0,0,17.7,3.867a5.759,5.759,0,0,0-4.051-1.562c-1.6-.091-6.38-.091-7.977,0A5.751,5.751,0,0,0,1.624,3.863,5.74,5.74,0,0,0,.063,7.914c-.091,1.6-.091,6.38,0,7.977a5.722,5.722,0,0,0,1.562,4.051A5.766,5.766,0,0,0,5.675,21.5c1.6.091,6.38.091,7.977,0A5.722,5.722,0,0,0,17.7,19.941a5.759,5.759,0,0,0,1.562-4.051c.091-1.6.091-6.376,0-7.972ZM17.2,17.6a3.263,3.263,0,0,1-1.838,1.838c-1.273.5-4.292.388-5.7.388s-4.43.112-5.7-.388A3.263,3.263,0,0,1,2.129,17.6c-.5-1.273-.388-4.292-.388-5.7s-.112-4.431.388-5.7A3.263,3.263,0,0,1,3.967,4.368c1.273-.5,4.292-.388,5.7-.388s4.43-.112,5.7.388A3.263,3.263,0,0,1,17.2,6.206c.5,1.273.388,4.292.388,5.7S17.707,16.335,17.2,17.6Z" transform="translate(0.005 -2.238)" fill="#001a7d" />
      </svg>,
      SvgC: <svg xmlns="http://www.w3.org/2000/svg" width="19.327" height="19.327" viewBox="0 0 19.327 19.327">
        <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M17.256,2.25H2.071A2.071,2.071,0,0,0,0,4.321V19.506a2.071,2.071,0,0,0,2.071,2.071H7.992V15.006H5.274V11.913H7.992V9.556c0-2.681,1.6-4.162,4.041-4.162a16.465,16.465,0,0,1,2.4.209V8.234H13.079a1.546,1.546,0,0,0-1.744,1.671v2.008H14.3l-.475,3.093H11.335v6.571h5.921a2.071,2.071,0,0,0,2.071-2.071V4.321A2.071,2.071,0,0,0,17.256,2.25Z" transform="translate(0 -2.25)" fill="#001a7d" />
      </svg>,
      SvgD: <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 61.999 37.132">
        <path id="Path_393" data-name="Path 393" d="M387.913,276.611c-2.463-4.149-8.264-13.926-9.17-15.45-6.179-10.412-11.8-9.848-17.345-9.848-2.076,0,1.81-2.64-1.938-6.35a10.7,10.7,0,0,1-1.811-3.737.528.528,0,0,0-1,0,10.7,10.7,0,0,1-1.811,3.737c-3.748,3.711.138,6.35-1.938,6.35-5.545,0-11.166-.565-17.345,9.848-.906,1.525-6.707,11.3-9.17,15.45-1.5,2.522,4.559,1.667,7.379-3.087,1.147-1.933,2.293-4.649,5.759-4.649a5.273,5.273,0,0,0,4.533-2.581c4.921-8.285,8.408-5.076,7.258-3.138L345.776,271c-3.953,6.659,26.7,6.66,22.746,0l-5.538-7.849c-1.149-1.938,2.338-5.147,7.258,3.138a5.273,5.273,0,0,0,4.533,2.581c3.466,0,4.613,2.717,5.759,4.649C383.354,278.278,389.414,279.133,387.913,276.611Z" transform="translate(-326.149 -240.865)" fill="#001a7d" />
      </svg>,
      SvgE: <svg className="stylesheet-module--svgBase--1Ic9- stylesheet-module--svgOne--wOE7U" id="Path_401" xmlns="http://www.w3.org/2000/svg" width="558.212" height="567.028" viewBox="0 0 558.212 567.028" transition="inherit">
        <path d="M685.385,476.2S270.043,395.553,198.572,168.08" fill="none" transform="translate(-257.917 386.801) rotate(-47)" strokeWidth={1} style={{ transition: 'stroke-dashoffset 1s ease-in-out 0s', strokeDasharray: '599.477, 599.477', strokeDashoffset: 0 }} />
      </svg>,
      SvgF: <svg className="stylesheet-module--visionHeroSvgTop--sI1UH" xmlns="http://www.w3.org/2000/svg" width="299.425" height="326.69" viewBox="0 0 299.425 326.69">
              <path id="_1_vision" data-name="1_vision" d="M198.572,168.08s40.441,128.712,275.457,174.347" transform="matrix(0.559, -0.829, 0.829, 0.559, -249.994, 299.161)" fill="none" stroke="#001a7d" strokeMiterlimit={10} strokeWidth="0.5" />
            </svg>,
      SvgG: <svg className="stylesheet-module--visionHeroSvgBottom--2Bhad" xmlns="http://www.w3.org/2000/svg" width="521.684" height="89.443" viewBox="0 0 521.684 89.443">
              <path id="_2_vision" data-name="2_vision" d="M314.016,203.067c93.274-18.737,261.9-25.678,522.313-24.928" transform="translate(-333.22 -74.34) rotate(-7)" fill="none" stroke="#001a7d" strokeMiterlimit={10} strokeWidth="0.5" />
            </svg>
    }
  }

  

  render() {
    const element = <Navbar 
    home={this.state.Home}
    location={this.state.Location}
    space={this.state.Spaces}
    vision={this.state.Vision}
    contact={this.state.Contact}
    svgD={this.state.SvgD}
    />

    return (
      <div className="App">
        <Header 
          Ngbar={element}
          Ftitle={this.state.Ftitle}
          Stitle={this.state.Stitle}
          Ttitle={this.state.Ttitle}
          svgA={this.state.SvgA}
          svgB={this.state.SvgB}
          svgC={this.state.SvgC}
          svgE={this.state.SvgE}
          svgD={this.state.SvgD}
          svgF={this.state.SvgF}
          svgG={this.state.SvgG}
        />
          
        
      </div>
    );
  }
}


export default App;


