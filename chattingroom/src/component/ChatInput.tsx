import React, { useState } from 'react';
import { MessageData } from '../util/types';

const ChatInput: React.FC<{ onSendMessage: (message: MessageData) => void }> = ({onSendMessage,}) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() === '') return;

        // 새로운 메시지를 생성
        const newMessage: MessageData = {
            user_id: 1,
            user_name: '내 이름',
            photo_url: '내 프로필 사진 URL',
            created_at: new Date().toISOString(),
            msg: { mtype: 'text', content: message },
        };

        // 새로운 메시지를 전송
        onSendMessage(newMessage);

        setMessage('');
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                placeholder="메세지를 입력해주세요"
                value={message}
                onChange={handleMessageChange}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSendMessage();
                    }
                }}
            />
            <button onClick={handleSendMessage}>전송</button>
        </div>
    );
};

export default ChatInput;