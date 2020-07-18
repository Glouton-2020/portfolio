import React from "react";
import PropTypes from "prop-types";

import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
					<h1>
						MARKETING DIRECTOR
						<br />
						BORN IN LDN, LIVING IN NYC
						<br />
						<br />
						"AGE LIKE A FINE WINE"
					</h1>
					<h6>
						- Benjamin Glouton
					</h6>
					{/* offset can be changed in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						WE ALL SCROLL DOWN ↓
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};