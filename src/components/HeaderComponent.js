import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Button, ModalHeader,
    Form, FormGroup, Input, Label, ModalBody, Modal} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
        constructor(props) {
        super(props);
            this.toggleNav = this.toggleNav.bind(this);
            this.toggleModal = this.toggleModal.bind(this);
            this.handleLogin = this.handleLogin.bind(this);
            this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} 
        Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }


    render() {
        return (
            <React.Fragment>

                    <div className="container-fluid jumbotron">
                        <div className="row">
                            <div className="col jumbo-title mx-auto">
                            <img className="main-crest" src="/img/ct-crest.png" href="/" height="100" width="100" alt="Skwadron Logo" />
                                <h1>Crooked Toms</h1>
                                <h2>The Ultimate Skwadron!</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid header-title">
                    <Navbar dark sticky="top" expand="md">
                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <i className="fa fa-address-card fa-lg" />  Scruggy
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/directory">
                                            <i className="fa fa-address-card fa-lg" />  Flaubert
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <i className="fa fa-address-card fa-lg" />  Skalez
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <i className="fa fa-address-card fa-lg" />  Pantslee
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <i className="fa fa-address-card fa-lg" />  Stylez
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <i className="fa fa-address-card fa-lg" />  HK
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <span className="ml-auto">
                                    <Button outline onClick={this.toggleModal}>
                                        <i className= "fa fa-sign-in fa-lg" />  LOGIN
                                    </Button>
                                </span>
                            </Collapse>
                    </Navbar>
                </div>


                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;