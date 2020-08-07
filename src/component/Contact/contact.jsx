import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Send Me a Message
				</h1>
				<form
					className={this.props.shake}
					action="https://formspree.io/mlepokdj"
					method="POST">

					<div className="form-group">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="name"
									className="form-control form-control-lg"
									id="name"
									placeholder="Full Name"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="email"
									name="_replyto"
									className="form-control form-control-lg"
									id="exampleFormControlInput1"
									placeholder="Your email"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenLeft">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<input
									type="text"
									name="subject"
									className="form-control form-control-lg"
									id="subject"
									placeholder="Subject"
								/>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<textarea
									name="message"
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1"
									rows="4"
									placeholder="What's on your mind buddy?"
								/>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
							<button
								type="submit"
								className="btn btn-primary mb-2 hidden">
								Submit
							</button>
						</div>
					</div>
				</form>
				<div class="col-md-6">
					<div class="title-box-2 pt-4 pt-md-0">
						<h5 class="title-left">
							Power of Friendship
						</h5>
				</div>
					</div>
					<div class="more-info">
						< p class="lead">
							Hey Bud! 
							<br/>
							Send Me a Message. 
						</p>
					</div>
					<div class="socials">
					<div className="row">
						<ul className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href="https://www.linkedin.com/in/benjamin-glouton/"
								target="_blank"
								rel="noopener noreferrer">
								<img className="img-fluid" src={""} alt=""/>
							</a>
							<a
								className="px-3"
								href="https://github.com/Glouton-2020"
								target="_blank"
								rel="noopener noreferrer">
								<img src={""} alt=""/>
							</a>
							<a
								href="https://www.instagram.com/benjaminglutton/?hl=en"
								target="_blank"
								rel="noopener noreferrer">
								<img src={""} alt=""/>
							</a>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};