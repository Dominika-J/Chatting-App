import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) //if you are not logged in
    return <Login/>

    return (
        <ChatEngine
            projectID="9a567ff2-2e52-4854-bd1a-f321c3bacb4c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // rendering custom components
            height="100vh"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>} 
        />
    );
}

export default App; 