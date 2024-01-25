import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar sidebar-style-2">
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <div className="user">
                        <div className="avatar-sm float-left mr-2">
                            <img src="./src/assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                <span>
                                    <span className="user-level">Administrator</span>
                                    <span className="caret" />
                                </span>
                            </a>
                            <div className="clearfix" />
                            <div className="collapse in" id="collapseExample">
                                <ul className="nav">
                                    <li>
                                        <a href="#profile">
                                            <span className="link-collapse">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#edit">
                                            <span className="link-collapse">Edit Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a data-toggle="collapse" href="#ProfileSettings">
                                            Profile Settings
                                            <span className="caret" />
                                        </a>
                                        <div className="collapse" id="ProfileSettings">

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-primary">
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h" />
                            </span>
                            <h4 className="text-section">Navigation</h4>
                        </li>


                        <li className="nav-item">
                            <a data-toggle="collapse" href="#settings">
                                <i className="fas fa-cogs" />
                                <p>Settings</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse" id="settings">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="/organization">
                                            <span className="sub-item">Organization</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/payment">
                                            <span className="sub-item">payment</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/role">
                                            <span className="sub-item">Role</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a data-toggle="collapse" href="#activeuser">
                                            Active User
                                            <span className="caret" />
                                        </a>
                                        <div className="collapse" id="activeuser">
                                            <ul className="nav nav-collapse">
                                                <li>
                                                    <a href="/studentauth">
                                                        <span className="sub-item">Student Authenticate</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span className="sub-item">Guardian Authenticate</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/">
                                                        <span className="sub-item"></span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;