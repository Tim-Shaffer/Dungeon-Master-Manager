import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import Login from "../auth/Login";
import Register from "../auth/Register";
import "./style.css";

const items = ['Dungeon Master'];

class Navbar extends Component {


// function Nav() {
render() {
  return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
        <div className="container">
            <h4>Welcome</h4>
            <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                <li className="nav-item order-2 order-md-1"><a href="#" className="nav-link" title="settings"><i className="fa fa-cog fa-fw fa-lg"></i></a></li>
                <li className="dropdown order-1">
                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right mt-2">
                        <li className="px-3 py-2">
                            <Login />
                            <br></br>
                            <br></br>
                            <div className="form-group text-center text-black">
                                <small><a href="#" data-toggle="modal" data-target="#createAccount">Create Account</a></small>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    <div id="createAccount" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div class="modal-header">
                <Container fluid>
                <Row>
                    <Col size="md-12">
                        <h3>Create Account</h3>
                    </Col>
                </Row>
                <Row>
                    <Register />    
                </Row>
                </Container>
            </div>
        </div>
    </div>
    </div>
</div>
);
}
}

export default Navbar;