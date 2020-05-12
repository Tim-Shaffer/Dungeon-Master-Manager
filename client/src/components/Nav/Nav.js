import React, { Component } from "react";
import { Input } from "../Form";
import { Col, Row, Container } from "../Grid";
import LoginBtn from "../LoginBtn";
import RegisterBtn from "../RegisterBtn";
import Checkbox from '../Checkbox';
import "./style.css";
import User from "../../../src/utils/USER"

const items = ['Dungeon Master'];

class Nav extends Component {

state = {
    username: "",
    password: "",
    password2: "",
    isMaster: false
};

componentWillMount = () => {
    this.selectedCheckboxes = new Set();
}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
};

handleLoginSubmit = event => {
    // When the form is submitted, prevent its default behavior 
    event.preventDefault();
    const login = {
        username: this.state.username,
        password: this.state.password
    };
    User.logUser(login)
    .then(res => {
        console.log(res);
    //   this.setState({ username: login.username, password: "" });
    })
    .catch(err => console.log(err));
      
};

handleRegisterSubmit = event => {
    // When the form is submitted, prevent its default behavior 
    event.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
        console.log(checkbox, 'is selected.');
        this.setState({ isMaster: true });
    };

    const login = {
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password2,
        isMaster: this.state.isMaster
    };
    User.createUser(login)
    .then(res => {
        console.log(res);
    //   this.setState({ username: login.username, password: "" });
    })
    .catch(err => console.log(err));
      
};

toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
}

createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
)

createCheckboxes = () => (
    items.map(this.createCheckbox)
)

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
                            <form>
                                <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="username" />
                                <Input value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="password" type="password"/>
                                <LoginBtn disabled={!(this.state.username) || !(this.state.password)} onClick={this.handleLoginSubmit}/>
                                <br></br>
                                <br></br>
                                <div className="form-group text-center">
                                    <small><a href="#" data-toggle="modal" data-target="#createAccount">Create Account</a></small>
                                </div>
                            </form>
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
                    <form>
                        <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="username" />
                        <Input value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="password" type="password"/>
                        <Input value={this.state.password2} onChange={this.handleInputChange} name="password2" placeholder="confirm password" type="password"/>
                        {this.createCheckboxes()}
                        <RegisterBtn disabled={!(this.state.username) || !(this.state.password) || !(this.state.password2)} onClick={this.handleRegisterSubmit}/>
                    </form>
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

export default Nav;