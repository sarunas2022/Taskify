import React from 'react';
import { ToDo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';
type Props = {
    toDo: ToDo;
    toDoList: ToDo[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleToDo = ({ toDo, toDoList, setToDoList }: Props) => {
    const handleDone = (id: number) => {
        setToDoList(
            toDoList.map((toDo) =>
                toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
            )
        );
    };
    const handledelete = (id: number) => {
        setToDoList(toDoList.filter((toDo) => toDo.id !== id));
    };
    return (
        <form className='toDos__single'>
            {toDo.isDone ? (
                <s className='toDos__single--text'>{toDo.toDo}</s>
            ) : (
                <span className='toDos__single--text'>{toDo.toDo}</span>
            )}

            <div>
                <span className='icon'>
                    <AiFillEdit />
                </span>
                <span className='icon'>
                    <AiFillDelete onClick={() => handledelete(toDo.id)} />
                </span>
                <span className='icon' onClick={() => handleDone(toDo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleToDo;
