import PropTypes from "prop-types";
import Tower from "./02_Tower";

const Castle = ({ message1, onReply }) => {
	return (
		<div className="mt-10">
			<h1>Castle</h1>
			<p>Message for JSD7: {message1}</p>
			<Tower message1={message1} onReply={onReply} />
		</div>
	);
};

Castle.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default Castle;
