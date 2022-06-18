import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Switch from "react-switch";
// import { scroller } from "react-scroll";
// import FontAwesome from "react-fontawesome";

// Clase principal paara el Switch - PROXIMAAMENTE
/*class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <Switch
        checked={this.state.checked}
        onChange={this.handleChange}
        handleDiameter={22}
        offColor="#212121"
        onColor="#f2f2f2"
        offHandleColor="#fff"
        onHandleColor="#212121"
        height={30}
        width={50}
        borderRadius={15}
        activeBoxShadow="0px 0px 20px -5px #000"
        uncheckedIcon={
          <svg viewBox="0 0 10 10" height="1%" width="1%" fill="#212121">
            <circle r={3} cx={5} cy={5} />
          </svg>
        }
        checkedIcon={
          <svg viewBox="0 0 10 10" height="1%" width="1%" fill="#f2f2f2">
            <circle r={3} cx={5} cy={5} />
          </svg>
        }
        // Iconos opcionales
        uncheckedHandleIcon={
          <svg viewBox="0 0 10 10" height="1%" width="1%" fill="#f2f2f2">
            <circle r={3} cx={5} cy={5} />
          </svg>
        }
        checkedHandleIcon={
          <svg viewBox="0 0 10 10" height="1%" width="1%" fill="#212121">
            <circle r={3} cx={5} cy={5} />
          </svg>
        }
        className="react-switch"
        id="small-radius-switch"
      />
    );
  }
}
*/

const Menu = () => {
  return (
    <>
      <Navbar className="navBar">
        <Navbar.Brand href="/" className="navBar_h1">
          Natalio Rabasco
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="navBar_ul">
            <Nav.Link href="#proyectos" className="navBar_li">
              Proyectos
            </Nav.Link>
            <Nav.Link href="/sobre-mi" className="navBar_li">
              Sobre Mi
            </Nav.Link>
            <Nav.Link href="#footer" className="navBar_li">
              Contacto
            </Nav.Link>
            {/*<div className="navBar_Switch">
              <FontAwesome className="sun" name="sun" size="1x" />
              &nbsp; &nbsp;
              <SwitchExample />
              &nbsp; &nbsp;
              <FontAwesome className="moon" name="moon" size="1x" />
              </div>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Menu;
