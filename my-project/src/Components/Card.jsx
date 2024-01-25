// import React from 'react'
import PropTypes from 'prop-types';

const CardProfile = ( {title,rightText,img,icon, percentage,alt}) => {
	return (<section>

<article>
    <div>
    <i>{icon}</i>|| <p>{title}</p> && <p>{rightText}</p>

    </div>
   {img && <img src={img} alt={alt}/>}

    <article>
<div>
        <i></i> <p></p>  <p></p>
    </div>
    <div>
        <i></i> <p></p>  <p></p>
    </div>
    </article>
    

</article>

    </section>
)};


const CardProfile.propTpes={
    title:PropTypes.string.isRequired
}
// const Card.propTypes={
//     title:PropTypes.string,

// }

// Profile.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isloggedIn: PropTypes.bool,
// }
export default CardProfile;
