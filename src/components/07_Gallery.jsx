import PropTypes from "prop-types";
import Nook from "./08_Nook";

const Gallery = ({ message1, onReply }) => {
	return (
		<div className="mt-10">
			<h1>Gallery</h1>
			<p>Message for JSD7: {message1}</p>
			<Nook message1={message1} onReply={onReply} />
		</div>
	);
};

Gallery.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default Gallery;
