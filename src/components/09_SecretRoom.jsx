import PropTypes from "prop-types";
import { useState } from "react";

const SecretRoom = ({ message1, onReply }) => {
	// jsx can't sent variable out of scope. so, we must use state
	// const [variable, function] = useState(innitial value);
	const [reply, setReply] = useState("");

	// function for get value from textarea and update value into reply
	const handleChange = (event) => {
		setReply(event.target.value);
	};

	// why can't use only onReply(reply);
	const sendReply = () => {
		onReply(reply);
	};

	return (
		<div className="mt-10 flex flex-col items-center">
			<h1>SecretRoom</h1>
			<p>Message for JSD7: {message1}</p>

			<textarea
				placeholder="Type your reply here..."
				onChange={handleChange}
				className="my-4 p-2 bg-transparent border border-white w-full rounded "
			></textarea>

			<button
				onClick={sendReply}
				className="bg-blue-500 text-white py-2 px-4 rounded "
			>
				Sent Reply
			</button>
		</div>
	);
};

SecretRoom.propTypes = {
	message1: PropTypes.string,
	onReply: PropTypes.func,
};

export default SecretRoom;
