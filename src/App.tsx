import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
    const [toDo, settoDo] = useState('');
    return (
        <div className='App'>
            <span className='heading'>Taskify</span>
            <InputField />
        </div>
    );
};

export default App;
