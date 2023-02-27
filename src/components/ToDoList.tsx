import React from 'react';
import './styles.css';
import { ToDo } from '../model';
import SingleToDo from './SingleToDo';

interface Props {
    toDoList: ToDo[];
    setToDoList: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDoList, setToDoList }: Props) => {
    return (
        <div className='toDos'>
            {toDoList.map((toDo) => (
                <SingleToDo
                    toDo={toDo}
                    key={toDo.id}
                    toDoList={toDoList}
                    setToDoList={setToDoList}
                />
            ))}
        </div>
    );
};

export default ToDoList;
