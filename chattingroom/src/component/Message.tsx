import React, {useState} from 'react';
import Modal from "./Modal";

interface MessageProps {
    message: {
        user_id: number;
        user_name: string;
        photo_url: string;
        created_at: string;
        msg: { mtype: string; content: string };
    };
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const [isProfileImageOpen, setProfileImageOpen] = useState(false);
    const isMyMessage = message.user_id === 1;

    const messageClass = isMyMessage ? 'my-message' : 'other-message';

    const handleCopyMessage = () => {
        navigator.clipboard.writeText(message.msg.content);
        alert('메세지가 클립보드에 복사되었습니다.');
    };

    const handleProfileImageClick = () => {
        setProfileImageOpen(true);
    };

    const handleModalClose = () => {
        setProfileImageOpen(false);
    };

    return (
        <div className={`message ${messageClass}`}>
            {!isMyMessage && (
                <div className="profile-pic" onClick={handleProfileImageClick}>
                    <img src={message.photo_url} alt={message.user_name} />
                </div>
            )}
            <div className="message-content" onClick={handleCopyMessage}>
                {!isMyMessage && <div className="user-name">{message.user_name}</div>}
                <div className="message-text">{message.msg.content}</div>
                <div className="message-time">{message.created_at}</div>
            </div>
            <Modal
                isOpen={isProfileImageOpen}
                imageUrl={message.photo_url}
                onClose={handleModalClose}
            />
        </div>
    );
};

export default Message;