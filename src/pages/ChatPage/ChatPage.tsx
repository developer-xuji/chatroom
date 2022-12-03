import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "antd";
import getMessages from "../../services/getMessages";
import addMessage from "../../services/addMessage";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  min-height: 500px;
  background-color: white;
  border-radius: 1%;
  box-shadow: 0px 0px 3px 3px lightgrey;
  padding-top: 1%;
`;

const InputBox = styled.div`
  flex: 1;
`;

const MessageBox = styled.div`
  flex: 6;
  p {
    padding-left: 15px;
    text-align: left;
  }
`;

const InputMessage = styled.input`
  width: 90%;
  height: 15vh;
`;

const SubmitButton = styled.input`
  width: 100px;
  height: 40px;
  margin-top: 20px;
`;

const ChatPage: React.FC = (props) => {
  const [messageList, setMessageList] = useState<Array<string>>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const onSubmit = () => {
    messageList?.push(currentMessage);
    addMessage({ name: "Tom", message: currentMessage });
    setCurrentMessage("");
  };
  const onMessageChange = (event: any) => {
    const value = event?.target?.value;
    console.log("Current Message: ", value);
    setCurrentMessage(value);
  };

  useEffect(() => {
    setInterval(
      () => getMessages().then((res) => setMessageList(res.messages)),
      2000
    );
  }, []);

  return (
    <Layout>
      <ChatBox>
        <MessageBox>
          {messageList?.map((m) => (
            <p>{m}</p>
          ))}
        </MessageBox>
        <InputBox>
          <InputMessage
            type="text"
            onChange={(event) => onMessageChange(event)}
            value={currentMessage}
          />
          <SubmitButton
            type="button"
            value="Submit"
            onClick={() => onSubmit()}
          />
        </InputBox>
      </ChatBox>
    </Layout>
  );
};

export default ChatPage;
