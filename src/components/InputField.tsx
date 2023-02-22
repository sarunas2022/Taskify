import React from 'react';
import './styles.css';

interface Props {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ toDo, setToDo }: Props) => {
    return (
        <form className='input'>
            <input
                className='input__box'
                type='input'
                placeholder='Enter a task'
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
            />
            <button className='input_submit' type='submit'>
                Go
            </button>
        </form>
    );
};

export default InputField;
