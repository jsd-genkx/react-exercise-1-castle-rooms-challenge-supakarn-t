import { useState } from "react";
import "./index.css";
import Castle from "./components/01_Castle";

// This is a Kingdom Component
function App() {
	const [replyMessage, setReplyMessage] = useState(""); // innitial replyMessage = ""

	const handleReply = (message) => {
		setReplyMessage(message);
	}; // when use (onReply) handleReply("some message") -> replyMessage = "some message"

	const message1 = "Do you love React?";

	return (
		<div className="flex flex-col items-center text-center ">
			<p>Message for JSD7: {message1}</p>

			<p className="text-red-500">
				Reply from the Secret Room:{" "}
				<span className="text-blue-500 ">
					{replyMessage ? replyMessage : "Waiting for a reply..."}
				</span>
			</p>

			<Castle message1={message1} onReply={handleReply} />
		</div>
	);
}

export default App;
