import React from 'react';
import './styles.css';

interface Props {
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ toDo, setToDo, handleAdd }: Props) => {
    return (
        <form className='input' onSubmit={handleAdd}>
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
