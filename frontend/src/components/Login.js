import React, { Component } from "react";
//import { Helmet } from "react-helmet";
import "../App.css";
import logo from "../images/logohust.png";
import { Button } from 'reactstrap';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='Homepage'>
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
				{/* <Helmet>
					<script
						src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
						integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
						crossorigin='anonymous'></script>
					<script
						src='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'
						integrity='sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx'
						crossorigin='anonymous'></script>
				</Helmet> */}
				<div class='container' style={{textAlign: "center"}}>
					<div class='card border-0 shadow my-5'>
						<div class='card-body p-5'>
							<img
								src={logo}
								alt='logo_academy'
								className='logo_academy'
							/>

							<p class='lead2'>Please Sign in or Sign up!</p>
							<div className='sub_container'>
								<div className='form_singin'>
									<div className='card'>
										<article className='card-body'>
											<h4 className='card-title text-center mb-4 mt-1'>
												Sign in
											</h4>
											<hr />
											{/* <p className='text-success text-center'>
												Enter your account!
											</p> */}
											<form onSubmit={this.handleSubmit}>
                                                <label> Enter your email or your name: </label>
												<div className='form-group'>
													<div className='input-group'>
														<div className='input-group-prepend'>
															<span className='input-group-text'>
																{" "}
																<i className='fa fa-user' />{" "}
															</span>
														</div>
														<input
															name
															className='form-control'
															placeholder='Email or Name'
															type='name'
															onChange={(
																event
															) => {
																this.setState({
																	NameOrEmail:
																		event
																			.target
																			.value,
																});
																localStorage.setItem(
																	"Name",
																	this.state
																		.NameOrEmail
																);
															}}
														/>
													</div>{" "}
													{/* input-group.// */}
												</div>{" "}
												{/* form-group// */}
                                                <label>Enter your password: </label>
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
															onChange={(
																event
															) => {
																this.setState({
																	Password :
																		event
																			.target
																			.value,
																});
																
															}}
														/>
													</div>{" "}
													{/* input-group.// */}
												</div>{" "}
												{/* form-group// */}
												<div className='form-group'>
													<Button color = "info">
														{" "}
														Login
													</Button>
												</div>{" "}
												{/* form-group// */}
												<p className='text-center'>
													<a
														href='#'
														className='btn'
														style={{
															color: "green",
														}}>
														Forgot password?
													</a>
												</p>
											</form>
										</article>
									</div>
								</div>

								<a href='/signup' className='singup'>
									Sign up?
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	
}

export default Login;