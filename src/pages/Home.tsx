import { FC, useEffect, useState } from "react";
import { connect } from "socket.io-client";
const Home: FC = () => {
  const socket = connect("http://localhost:4000");
  const [userMessage, setUserMessage] = useState("");
  const [getResponse, setResponse] = useState<any>("");
  
  useEffect(() => {
    socket.on("receive_message", (args) => {
      setResponse(args);
    });
  }, [userMessage]);

  const handleSubmit = () => {
    socket.emit("send_message", { message: userMessage });
  };
  return (
    <div>
      <input
        type="text"
        name="message"
        onChange={(e: any) => setUserMessage(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>

      <h1>{getResponse?.message}</h1>
    </div>
  );
};

export default Home;
