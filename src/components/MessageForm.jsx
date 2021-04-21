import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';


const MessageForm = (props) => {
    const [value, setValue] = useState(''); // state which is equal to an empty string from the begining
    const { chatId, creds } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text }); // function imported from chatEngine, takes an Auth Object, Chat ID, Message Object and callback function as params then creates a new message from that user.

        setValue(''); // reset a text, which was typed and send, back to an empty string
    }

    const handleChange = (event) => { 
        setValue(event.target.value); // setValue - method adds or updates the value of the current element

        isTyping(props, chatId); // function imported from chatEngine, takes an Auth Object, Chat ID as params then sends data indicating you're typing
    }

    const handleUpload = (event) => { 
        sendMessage(creds, chatId, { files: event.target.files, text: '' }) //takes an Auth Object, Chat ID, Message Object and callback function as params then creates a new message from that user.
    }

    return ( // form, where you type your message, send it and send a picture
        <form className="message-form" onSubmit={handleSubmit}> 
            <input //text field
                className="message-input"
                placeholder="Send a message ... "
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            /> 
            {/* img field */}
            <label htmlFor="upload-button"> 
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input type="file" 
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            {/* send button */}
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    );
}

export default MessageForm;