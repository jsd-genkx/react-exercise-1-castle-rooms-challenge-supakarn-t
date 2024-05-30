import PropTypes from "prop-types";
import SecretRoom from "./09_SecretRoom";

const Nook = ({ message1, onReply }) => {
	return (
		<div className="mt-10">
			<h1>Nook</h1>
			<p>Message for JSD7: {message1}</p>
			<SecretRoom message1={message1} onReply={onReply} />
		</div>
	);
};

Nook.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default Nook;
