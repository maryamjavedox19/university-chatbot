// import React, { useState, useRef } from "react";
// import styled from "styled-components";

// const Chatbot = () => {
//   const [isChatbotVisible, setIsChatbotVisible] = useState(false);
//   const [inputText, setInputText] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);



//   const inputRef = useRef(null);

//   const toggleChatbot = () => {
//     setIsChatbotVisible(!isChatbotVisible);
//   };

//   const handleInputTextChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleSendMessage = async () => {
//     if (inputText) {
//       const newMessage = { text: inputText, isUser: true };

//       setMessages((prevMessages) => [newMessage, ...prevMessages]);

//       setInputText("");

//       const data = await fetch("http://localhost:5000/members", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ inputText })
//       }
//       )
//       if (data.status === 200) {
//         const json = await data.json()
//         const ChatMessage = { text: json.message, isUser: false };

//         setMessages((prevMessages) => [ChatMessage, ...prevMessages]);
//         console.log(json)


//       }
//     }
//   };

//   const handleEnterPress = async (event) => {
//     if (event.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   return (
//     <>
//       <ChatbotButton>
//         <button onClick={toggleChatbot}>
//           <img src="https://s01.live2support.com/ls3/images/1611305853.png" alt="Chatbox" />
//         </button>
//       </ChatbotButton>

//       {isChatbotVisible && (
//         <ChatbotContainer>
//           <ChatboxHeader>
//             <h4>Chat support</h4>
//             <p>Hi, I'm NEDbot. How can I help you?</p>
//           </ChatboxHeader>
//           <ChatboxMessages>
//             {messages.map((message, index) => (
//               <MessagesItem key={index} isUser={message.isUser}>
//                 {message.text}
//               </MessagesItem>
//             ))}
//           </ChatboxMessages>

//           <ChatboxFooter>
//             <input
//               type="text"
//               placeholder="Write a message..."
//               value={inputText}
//               onChange={handleInputTextChange}
//               onKeyDown={handleEnterPress}
//               ref={inputRef}
//             />
//             <button className="send_button" onClick={handleSendMessage}>
//               Send
//             </button>
//           </ChatboxFooter>
//         </ChatbotContainer >
//       )}
//     </>
//   );
// };

// const ChatbotContainer = styled.div`
//   position: fixed;
//   bottom: 62px;
//   right: 30px;
//   width: 340px;
//   height: 75%;
//   background-color: white;
//   display: grid;
//   grid-template-rows: 5rem 1fr 4rem;
//   grid-row-gap: 4px;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
//   border-bottom-right-radius: 10px;
//   border-bottom-left-radius: 10px;
//   z-index: 1000;
// `;

// const ChatbotButton = styled.div`
//   position: fixed;
//   bottom: 1rem;
//   right: 2rem;

//   img{
//     width:3rem;
//     height:3rem;
//   }
// `;

// const ChatboxHeader = styled.div`
//   background: #97cba9;
//   align-items: center;
//   justify-content: center;
//   display: flex;
//   flex-direction:column;
//   box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
//   left-radius: 20px;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
//   color: white;
//   padding-top:0.5rem;

//   h4{
//     font-size:1.2rem;
//   }

//   p{
//     font-size:0.9rem
//   }

// `;



// const ChatboxMessages = styled.div`
//   padding: 0 20px;
//   display: flex;
//   overflow-y: scroll;
//   flex-direction: column-reverse;
// `;


// const MessagesItem = styled.div`
//   margin-top: 10px;
//   padding: 8px 12px;
//   max-width: 70%;
//   align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
//   background: ${(props) => (props.isUser ? "#acc6aa" : "#E0E0E0")};
//   color: ${(props) => (props.isUser ? "white" : "black")};
//   border-radius: 20px;
// `;

// const ChatboxFooter = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 30px 20px;
//   background: #97cba9;
//   box-shadow: 0px -10px 15px rgba(0, 0, 0, 0.1);
//   border-bottom-right-radius: 10px;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 10px;
//   border-bottom-left-radius: 10px;
//   align-items: center;

//   input {
//     width: 80%;
//     border: none;
//     padding: 8px 10px;
//     border-radius: 30px;
//     text-align: left;
//     align-items: center;
//   }

//   button {
//     background: transparent;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     color: white;
//   }
// `;

// export default Chatbot;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Chatbot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    // Set up the speech recognition event listeners
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const speechText = event.results[last][0].transcript;
      setInputText(speechText);
    };

    recognition.onend = () => {
      setIsTyping(false);
    };
  }, []);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const handleStartSpeechRecognition = () => {
    setIsTyping(true);
    recognition.start();
  };

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText) {
      const newMessage = { text: inputText, isUser: true };

      setMessages((prevMessages) => [newMessage, ...prevMessages]);

      setInputText("");

      const data = await fetch("http://localhost:5000/members", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ inputText }),
      });

      if (data.status === 200) {
        const json = await data.json();
        const chatMessage = { text: json.message, isUser: false };

        setMessages((prevMessages) => [chatMessage, ...prevMessages]);
        console.log(json);
      }
    }
  };

  const handleEnterPress = async (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <ChatbotButton>
        <button onClick={toggleChatbot}>
          <img src="https://s01.live2support.com/ls3/images/1611305853.png" alt="Chatbox" />
        </button>
      </ChatbotButton>

      {isChatbotVisible && (
        <ChatbotContainer>
          <ChatboxHeader>
            <h4>Chat support</h4>
            <p>Hi, I'm NEDbot. How can I help you?</p>
          </ChatboxHeader>
          <ChatboxMessages>
            {messages.map((message, index) => (
              <MessagesItem key={index} isUser={message.isUser}>
                {message.text}
              </MessagesItem>
            ))}
          </ChatboxMessages>

          <ChatboxFooter>
            <input
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={handleInputTextChange}
              onKeyDown={handleEnterPress}
              ref={inputRef}
            />
            <button className="send_button" onClick={handleSendMessage}>
              Send
            </button>
            <button className="speech_button" onClick={handleStartSpeechRecognition}>
              Start Speech Recognition
            </button>
          </ChatboxFooter>
        </ChatbotContainer>
      )}
    </>
  );
};

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 62px;
  right: 30px;
  width: 340px;
  height: 75%;
  background-color: white;
  display: grid;
  grid-template-rows: 5rem 1fr 4rem;
  grid-row-gap: 4px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 1000;
`;

const ChatbotButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 2rem;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

const ChatboxHeader = styled.div`
  background: #97cba9;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  left-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
  padding-top: 0.5rem;

  h4 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

const ChatboxMessages = styled.div`
  padding: 0 20px;
  display: flex;
  overflow-y: scroll;
  flex-direction: column-reverse;
`;

const MessagesItem = styled.div`
  margin-top: 10px;
  padding: 8px 12px;
  max-width: 70%;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  background: ${(props) => (props.isUser ? "#acc6aa" : "#E0E0E0")};
  color: ${(props) => (props.isUser ? "white" : "black")};
  border-radius: 20px;
`;

const ChatboxFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
  background: #97cba9;
  box-shadow: 0px -10px 15px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  align-items: center;

  input {
    width: 80%;
    border: none;
    padding: 8px 10px;
    border-radius: 30px;
    text-align: left;
    align-items: center;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
  }
`;

export default Chatbot;
