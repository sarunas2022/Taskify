import React, { useRef, useState, useEffect } from 'react';
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
    const [edit, setEdit] = useState<boolean>(false);
    const [editToDo, setEditToDo] = useState<string>(toDo.toDo);

    const handleDone = (id: number) => {
        setToDoList(
            toDoList.map((toDo) =>
                toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
            )
        );
    };

    const handleDelete = (id: number) => {
        setToDoList(toDoList.filter((toDo) => toDo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setToDoList(
            toDoList.map((toDo) =>
                toDo.id === id ? { ...toDo, toDo: editToDo } : toDo
            )
        );
        setEdit(false);
    };
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <form
            className='toDos__single'
            onSubmit={(e) => handleEdit(e, toDo.id)}
        >
            {edit ? (
                <input
                    ref={inputRef}
                    className='toDos__single--text'
                    value={editToDo}
                    onChange={(e) => setEditToDo(e.target.value)}
                />
            ) : toDo.isDone ? (
                <s className='toDos__single--text'>{toDo.toDo}</s>
            ) : (
                <span className='toDos__single--text'>{toDo.toDo}</span>
            )}

            <div>
                <span
                    className='icon'
                    onClick={() => {
                        if (!edit && !toDo.isDone) {
                            setEdit(!edit);
                        }
                    }}
                >
                    <AiFillEdit />
                </span>
                <span className='icon'>
                    <AiFillDelete onClick={() => handleDelete(toDo.id)} />
                </span>
                <span className='icon' onClick={() => handleDone(toDo.id)}>
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleToDo;
