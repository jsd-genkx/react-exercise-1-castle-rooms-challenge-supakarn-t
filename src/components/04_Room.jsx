import PropTypes from "prop-types";
import Hall from "./05_Hall";

const Room = ({ message1, onReply }) => {
	return (
		<div className="mt-10">
			<h1>Room</h1>
			<p>Message for JSD7: {message1}</p>
			<Hall message1={message1} onReply={onReply} />
		</div>
	);
};

Room.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default Room;
