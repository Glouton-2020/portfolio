import React from "react";
import PropTypes from "prop-types";
import Crm from "./img/Crm.png";
import Codesk from "./img/Codesk.png";
import Space from "./img/Space.png";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className="project-container container bg-light pb-5">	
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"crmbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>SIMPLE CRM</h2>
									</div>
									<div>
										<button
											id="crm-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var crmModal = document.getElementById(
													"crm"
												);
												modalBG.style.display = "block";
												crmModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"codeskbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Codesk</h2>
									</div>
									<div>
										<button
											id="codesk-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var codeskModal = document.getElementById(
													"codesk"
												);
												modalBG.style.display = "block";
												codeskModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"spacebg col-12 col-sm-12 col-md-4 " +
									this.props.tada
								}>
								<div className="overlay">
									<div className="text">
										<h2>Space Invader Clone</h2>
									</div>
									<div>
										<button
											id="space-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var spaceModal = document.getElementById(
													"space"
												);
												modalBG.style.display = "block";
												spaceModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*Hidden modal Information*/}
				<div id="gallery-card">
					<div id="crm" className="modal-card">
						<div className="visual">
							<img src={Crm} alt="CRM Screenshot"/>
						</div>
						<div className="modal-info">
							<h2>Simple CRM</h2>
							<div className="modal-description">
								<div className="modal-paragraph">
								For this project, I created a full CRUD CRM application using the technologies outlined below. I thought of creating the app as a useful tool for my sales team to use in their client outreach. The application is fun to use and able to keep users on track with their customer relations.
								</div>
								<br/>
								<h3> Technologies: </h3>
								<ul>
									<li>
										Html, CSS, Javascript
									</li>
									<li>
										React, Express
									</li>
									<li>
										MongoDB, Mongoose
									</li>
									<li>
										Bootstrap 4, Font Awesome
									</li>
								</ul>
							</div>
							<br/>
							<div className="modal-bottom">
							<a
									href="https://crud-crm-project-2.herokuapp.com/crm"
									target="_blank">
									<h3>Check out my CRM</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var crmModal = document.getElementById(
											"crm"
										);
										modalBG.style.display = "none";
										crmModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="codesk" className="modal-card">
						<div className="visual">
							<img src={Codesk} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Codesk</h2>
							<div className="modal-description">
								<div className="modal-paragraph">
								A team built full-stack MERN website, functional and interactive.
								We wanted to build an app that would eventually create a community for budding coders to store, retrieve, search, comment, and share blocks of code. The app borders between an educational assistant and code management system.
								The objective of Codesk is to simplify the life programmers by organizing, sharing, understanding, and discussing any past, present or future code submitted to the app.
								The Codesk app gives you the opportunity to learn by reviewing other users code and making it easy to access past submissions.
								</div>
								<br/>
								<h3> Technologies: </h3>
								<ul>
									<li>
										Html, CSS, Javascript
									</li>
									<li>
										React, Express, Node
									</li>
									<li>
										MongoDB, Mongoose
									</li>
									<li>
										Bootstrap 4, Font Awesome, Cloudinary
									</li>
								</ul>
							</div>
							<br/>
							<div className="modal-bottom">
								<a
									href="https://group-5-codesk.herokuapp.com/"
									target="_blank">
									<h3>Save your code in Codesk today!</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var codeskModal = document.getElementById(
											"codesk"
										);
										modalBG.style.display = "none";
										codeskModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="space" className="modal-card">
						<div className="visual">
							<img src={Space} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Space Invaders Clone</h2>
							<div className="modal-description">
								<div className="modal-paragraph">
								The first project I created in my Coding BootCamp. I followed a tutorial on how to create a clone for Space Invaders. I will be revisiting this application in the near future to complete it's functionality. In the mean time have fun playing it. 
								</div>
								<br/>
								<h3> Technologies: </h3>
								<ul>
									<li>
										Html, CSS, Javascript
									</li>
									<li>
										DOM, JSON
									</li>
								</ul>
							</div>
							<br/>
							<div className="modal-bottom">
								<a href="https://glouton-2020.github.io/" 
								target="_blank">
									<h3>How many rounds can you last?</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var spaceModal = document.getElementById(
											"space"
										);
										modalBG.style.display = "none";
										spaceModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};