import React, { useState } from 'react';
import { CLIENT_RENEG_LIMIT } from 'tls';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
    const [toDo, setToDo] = useState<string>('');
    console.log(toDo);
    return (
        <div className='App'>
            <span className='heading'>Taskify</span>
            <InputField toDo={toDo} setToDo={setToDo} />
        </div>
    );
};

export default App;
