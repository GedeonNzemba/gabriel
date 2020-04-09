# gabriel
project given by a small starter-up company. 

########  first commit  #######

1. used the react  " create-react-app " to get the auto-setup folder structure to this react project.
## gathered the fonts required
## gathered all required images
## made changes in the App.js file :
  >> Set the class "  App " to be the wrapper for the entire website.
  >>  Added a child component inside the App.js render method.
         this child component " <Navbar />  " returns the top navigation of the website and it's logo there within.
>> made changes in the " src " folder :
     Added a folder with the name " Components ".
> made changes inside the Components folder :
   Created a file with the name of Navbar.js.
  This file returns all the code written for the top navigation bar and the logo 

##### Top Navigation bar finished. ####
#Created the **Header.js** file inside of the **Component folder**
# Changes made to the **App.js** render method
Want the Navbar ` <Nav /> ` to be rendered inside the Header **` <Header /> `** in the **App.js** render return method.
Therefore i had to create a **variable** that will hold the `<Nav />` inside of the **render()** method just before the return method.
```
render() {
    const element = <Navbar 
    home={this.state.Home}
    location={this.state.Location}
    space={this.state.Spaces}
    vision={this.state.Vision}
    contact={this.state.Contact}
    svgD={this.state.SvgD}
    />
    }
    
```
This **element** variable will then be passed to the **<Header />** as a prop which will be used **inside** of the **Header component**, in the render return method.

```
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

```

##In the Header.js file
Created a **.header** class to wrap the everything tha's inside of the header component.
Inside of the render return method, i have passed the **{this.props.Ngbar}** which is a prop that holds the variable **element** that returns the entire **<Navbar />**. By doing this, the navigation bar will be inside of the Header with a **position: fixed;**
```
render(){
        return(
            <div className="header">
                {/* NAVBAR */}
                <div className="navigation-bar">
                    {this.props.Ngbar}
                </div>
               

```

##The Header Component
Created the header with all of its props values 
Just keep in in mind that the **.header** has a style of **display: flex;** and **flex-direction: column;**

```
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


```

























