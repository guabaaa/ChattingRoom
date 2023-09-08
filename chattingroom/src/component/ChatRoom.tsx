import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/ChatRoom.css';

import Message from './Message';
import ChatInput from './ChatInput';

const API_URL = 'http://test.vanillabridge.com/test_data';

interface MessageData {
    user_id: number;
    user_name: string;
    photo_url: string;
    created_at: string;
    msg: { mtype: string; content: string };
}

const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState<MessageData[]>([]);

    useEffect(() => {
        axios.get(API_URL).then((response) => {
            setMessages(response.data);
        });
    }, []);

    // 메시지를 전송하고 채팅창에 추가
    const sendMessage = (newMessage: MessageData) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="chat-room">
            <div className="chat-header">채팅 상대 이름</div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </div>
            <ChatInput onSendMessage={sendMessage} />
        </div>
    );
};

export default ChatRoom;