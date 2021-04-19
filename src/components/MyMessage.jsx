const MyMessage = ({ message }) => {

    if (message?.attachments?.length > 0) { //is my message an image, than return img
        return (
            <img src={message.attachments[0].file}
                alt="message-attachments"
                className="message-image"
                style={{ float: 'right' }}
            />
        );
    } // you do not have to write ELSE in there, because if return succeeds the condition stops there

    return ( //else return my message
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
}

export default MyMessage;