import ListGroup from 'react-bootstrap/ListGroup';
import { MdRadioButtonUnchecked , MdOutlineCheckCircleOutline } from 'react-icons/md'
import { useSelector } from 'react-redux/es/exports';
import { toggleDone } from '../../reducers/todoInputSlice';
import { useDispatch } from 'react-redux/es/exports';

import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';


import '../css/todoItem.min.css'


const TodoItem = () => {

    const dispatch = useDispatch()
  
    const todos = useSelector((state) => state.inputTodo.todos)
    const filter = useSelector(state => state.filter.filter)

    let array

    if (filter === 'all') {
        array = todos
    }
   
    else if (filter === 'done') {
        array = todos.filter(item => {
            return item.done !== false;
            
        })
    }
    else {
        array = todos.filter(item => {
            return item.done === false;
            
        })
    }
  
    const onToggleDone = (id) => {
      dispatch(toggleDone(id))
  }

    return (

        <ListGroup className='todo-item'>

        <TransitionGroup className="todo-list">

            {array.map(item => {
                return (
                    <CSSTransition
              key={item.id}
              timeout={500}
              classNames="item"
            >
                    <ListGroup.Item  className="p-0 ps-1 item">
                        <button onClick={() => onToggleDone(item.id)} className="checkBtn">
                            {item.done ? <MdOutlineCheckCircleOutline className='round'/> : <MdRadioButtonUnchecked className='round'/>}
                        </button>
                        <span className={item.done ? 'line-through' : null } >{item.name}</span>
                    </ListGroup.Item>
                    </CSSTransition>
                )
            })}
        </TransitionGroup>    

        </ListGroup>

       
    )
}

export default TodoItem

