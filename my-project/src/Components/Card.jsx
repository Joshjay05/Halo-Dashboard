// import React from 'react'
import PropTypes from "prop-types";

const Card = ({ title, rightText, img, icon, percentage, alt }) => {
	return (
		<section>
			<article>
				<div>
					<i>{icon}</i> || <p>{title}</p> && <p>{rightText}</p>
				</div>
				{img && <img src={img} alt={alt} />}

				<article>
					<div>
						<i></i> <p></p> <p></p>
					</div>
					<div>
						<i>{percentage}</i> <p></p> <p></p>
					</div>
				</article>
			</article>
		</section>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	rightText: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
	img: PropTypes.object,
	icon: PropTypes.object,
	alt: PropTypes.string,
};

// Profile.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isloggedIn: PropTypes.bool,
// }
export default Card;
