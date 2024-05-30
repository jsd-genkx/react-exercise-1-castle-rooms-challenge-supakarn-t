import PropTypes from "prop-types";
import Corridor from "./06_Corridor";

const Hall = ({ message1, onReply }) => {
	return (
		<div className="mt-10">
			<h1>Hall</h1>
			<p>Message for JSD7: {message1}</p>
			<Corridor message1={message1} onReply={onReply} />
		</div>
	);
};

Hall.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default Hall;
