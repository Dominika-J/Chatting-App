import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = {
            'Project-ID': '9a567ff2-2e52-4854-bd1a-f321c3bacb4c',
            'User-Name': username,
            'User-Secret': password,
        };

        try {
            // username and password -> start chatting
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            //it is working -> user logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload()
        } catch (error) {
            //not working -> try other username

        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Sign in</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}