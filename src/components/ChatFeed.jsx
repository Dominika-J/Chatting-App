import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import OthersMessage from './OthersMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    console.log(props);

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && ( // render the code, only if a person read the message
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessages = () => { // used for generating messages
        const keys = Object.keys(messages); //keys are IDs of specific messages

        return keys.map((key, index) => {
            const message = messages[key]; //one specific message
            const lastMessageKey = index === 0 ? null : keys[index - 1]; // is this the last message
            const isMyMessage = userName === message.sender.username; // my message

            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                                ? <MyMessage message={message} /> //if this is my message, render my message else render others message
                                : <OthersMessage message={message}
                                    lastMessage={message[lastMessageKey]} />
                        }
                    </div>
                    {/* if this is my message marginRight else others message marginLeft */}
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        })
    }

    if (!chat) return 'Loading...' // is this chat existing? if yes return "chat-feed"

    return (
        <div className="chat-feed"> {/* whole chat feed */}
            <div className="chat-title-container"> {/* container of chat heading (name of chat, names of users) */}
                <div className="chat-title">{chat?.title}</div> {/* if chat exists give me its title from props) */}
                <div className="chat-subtitle">
                    {chat.people.map((person) =>
                        ` ${person.person.username}`)} {/* return usernames which are using this chat */}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}


export default ChatFeed;
