import PropTypes from "prop-types";
import Gallery from "./07_Gallery";

const Corridor = ({ message1, onReply }) => {
	return (
		<div className="mt-10">
			<h1>Corridor</h1>
			<p>Message for JSD7: {message1}</p>
			<Gallery message1={message1} onReply={onReply} />
		</div>
	);
};

Corridor.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default Corridor;
