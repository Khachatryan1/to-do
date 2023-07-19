import { useState } from 'react'
import { Button } from '../button/button'

import './toDoItem.css'

export const Item = ({index, task, onDelete}) => {
    const [complited, setComplited] = useState(false)

    const tasCompleted = () => {
        setComplited(true)
    }

    return (
        <div className={`to-do-item ${complited ? 'complited' : ''}`}>
            <p className="to-do-item-text">{task}</p>
            <div className="buttons">
                <Button onClick={tasCompleted} className={'ready'} text={'ready'}/>
                <Button onClick={() => onDelete(index)} className={'delete'} text={'delete'}/>
            </div>
        </div>
    )
}