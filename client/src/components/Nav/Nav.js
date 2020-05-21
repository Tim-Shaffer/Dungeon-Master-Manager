import React from "react";
import "./style.css";

function Nav() {
  return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom border-danger" role="navigation">
        <div className="container">
            <h4>Welcome Player</h4>
            <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                <li className="nav-item order-2 order-md-1"><a href="#" className="nav-link" title="settings"><i className="fa fa-cog fa-fw fa-lg"></i></a></li>
                <li className="dropdown order-1">
                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right mt-2">
                        <li className="px-3 py-2">
                            <form className="form" role="form">
                                <div className="form-group">
                                    <input id="usernameInput" placeholder="Username"
                                    className="form-control form-control-sm" type="text" required="" />
                                </div>
                                <div className="form-group">
                                    <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" required="" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-block">Login</button>
                                </div>
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
                <h3>Create Account</h3>
                <form className="form" role="form">
                    <div className="form-group">
                        <input id="usernameInput" placeholder="Username" className="form-control form-control-sm" type="text" required=""/>
                    </div>
                    <div className="form-group">
                        <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text" required=""/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>

  );
}

export default Nav;