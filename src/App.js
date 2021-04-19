import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            projectID="9a567ff2-2e52-4854-bd1a-f321c3bacb4c"
            userName="ReactUser"
            userSecret="123"
            // rendering custom components
            height="100vh"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} 
        />
    );
}

export default App; 