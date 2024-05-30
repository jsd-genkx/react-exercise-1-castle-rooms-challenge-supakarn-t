import PropTypes from "prop-types";
import Chamber from "./03_Chamber";

const Tower = ({ message1, onReply }) => {
	return (
		<div className="mt-10">
			<h1>Tower</h1>
			<p>Message for JSD7: {message1}</p>
			<Chamber message1={message1} onReply={onReply} />
		</div>
	);
};

Tower.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default Tower;
