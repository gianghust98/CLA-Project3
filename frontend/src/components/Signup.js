import React, { Component } from "react";
import logo from "../images/logohust.png";
import "../App.css";
import { Button } from 'reactstrap';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
            Email: "",
            Fullname: "",
			Password: "",
		};
	}
	render() {
		return (
            <div className="signup_page">
                <section className="banner-area relative" id="home">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row fullscreen d-flex align-items-center justify-content-between">
                        <div className="banner-content col-lg-9 col-md-12">
                            <h1 className="text-uppercase">
                            Chúng tôi cung cấp nền giáo dục tốt hơn cho một thế giới tốt
                            hơn!
                            </h1>
                            <p className="pt-10 pb-10" style={{ color: 'white' }}>
                            Cung cấp những dịch vụ giáo dục hàng đầu là nhiệm vụ và vinh
                            dự của chúng tôi.
                            </p>
                            <br />
                            <br />
                        </div>
                        </div>
                    </div>
                </section>
                <div className='signup_form'>
                    <div className='sub_container'>
                        <div className='form_singin'>
                            <div className='card'>
                                <article className='card-body'>
                                    <img
                                        src={logo}
                                        alt='logo_academy'
                                        className='logo_academy'
                                    />
                                    <h4 className='card-title text-center mb-4 mt-1'>
                                        Sign up
                                    </h4>
                                    <hr />
                                    <p className='text-success text-center'>
                                        We need some information!
                                    </p>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className='form-group'>
                                            <div className='input-group'>
                                                <div className='title_signup'>
                                                </div>
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text'>
                                                        <i className='fa fa-user' />
                                                    </span>
                                                </div>
                                                <input
                                                    name
                                                    className='form-control'
                                                    placeholder='email?'
                                                    type='email'
                                                    onChange={(event) => {
                                                        this.setState({
                                                            Email:
                                                                event.target.value,
                                                        });
                                                        // localStorage.setItem('Name',this.state.NameOrEmail);
                                                    }}
                                                />
                                            </div>{" "}
                                            {/* input-group.// */}
                                        </div>{" "}
                                        {/* form-group// */}
                                        <div className='form-group'>
                                            <div className='input-group'>
                                                
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text'>
                                                        {" "}
                                                        <i className='fa fa-lock' />{" "}
                                                    </span>
                                                </div>
                                                <input
                                                    className='form-control'
                                                    placeholder='Name'
                                                    type='name'
                                                    onChange={(event) => {
                                                        this.setState({
                                                            Name:
                                                                event.target.value,
                                                        });
                                                    }}
                                                />
                                            </div>{" "}
                                            {/* input-group.// */}
                                        </div>{" "}
                                        <div className='form-group'>
                                            <div className='input-group'>
                                                
                                                <div className='input-group-prepend'>
                                                    <span className='input-group-text'>
                                                        {" "}
                                                        <i className='fa fa-lock' />{" "}
                                                    </span>
                                                </div>
                                                <input
                                                    className='form-control'
                                                    placeholder='******'
                                                    type='password'
                                                    onChange={(event) => {
                                                        this.setState({
                                                            Password:
                                                                event.target.value,
                                                        });
                                                    }}
                                                />
                                            </div>{" "}
                                            {/* input-group.// */}
                                        </div>{" "}
                                        {/* form-group// */}
                                        <div className='form-group'>
                                            <Button
                                                
                                                color = "info">
                                                {" "}
                                                Submit
                                            </Button>
                                        </div>
                                        {/* form-group// */}
                                    </form>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
			
		);
	}

	
}

export default Signup;