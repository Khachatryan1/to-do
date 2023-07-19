import { useState } from 'react';
import { Input } from './components/input/input';
import { Button } from './components/button/button';
import { Item } from './components/toDoItem/toDoItem';

import './App.css';


function App() {
    const [inputValue, setInputValue] = useState('')
    const [errorMassage, setErrorMassage] = useState('')
    const [toDos, setToDos] = useState([])

    const handleChange = (event) => {
        setErrorMassage('')
        setInputValue(event.target.value)
    }

    const addTask = () => {
        if (inputValue.trim().length) {
            setToDos([...toDos, inputValue])
            setInputValue('')
            setErrorMassage('')
        } else {
            setErrorMassage('field cannot be empty')
        }
    }

    const deleteTask = (index) => {
        const updateTodos = toDos.filter((_, i) => index !== i)
        setToDos(updateTodos)
    }

    return (
        <div className='to-do-app'>
            <div className='add-task-block'>
                <h1>TO DO</h1>
                <p className={`${inputValue.trim().length ? '' : 'error-massage'}`}>{errorMassage}</p>
                <Input 
                    onChange={handleChange}
                    className={'task-input'} 
                    placeholder={'input task'}
                    value={inputValue}
                />

                <Button 
                    onClick={addTask}
                    className={'add-button'} 
                    text={'ADD'}
                />

            </div>
            <div className='tasks'>
                {
                    toDos.length ?
                        toDos.map((item, index) => (
                            <Item index={index} key={index} task={item} onDelete={() => deleteTask(index)}/>
                        )) : <div className='nothing-to-do'>
                                <p>nothing</p> 
                                <p>to</p> 
                                <p>do</p>
                            </div>
                }
            </div>
        </div>
    );
}

export default App;
