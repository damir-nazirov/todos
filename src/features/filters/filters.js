import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../reducers/filtersSlice';
import {clearDone} from '../../reducers/todoInputSlice'

import '../css/filters.min.css'


function Filters() {

  const dispatch = useDispatch()

const todos = useSelector(state => state.inputTodo.todos)
const filter = useSelector(state => state.filter.filter)


const itemsLeft = (todos.filter(item => {
    return item.done === false
})).length




  return (
    <Container>
        <div className='filters' >
            <span className="filters_counter">{`${itemsLeft} items left`}</span>

            <div className="filters_buttons">
            <button onClick={() => dispatch(changeFilter('all'))} className={`filters_button ${filter ==='all' ? 'filters_button_onfocus' : null}`} variant="secondary-outline">All</button>
            <button onClick={() => dispatch(changeFilter('active'))} className={`filters_button ${filter ==='active' ? 'filters_button_onfocus' : null}`} variant="secondary-outline">Active</button>
            <button onClick={() => dispatch(changeFilter('done'))} className={`filters_button ${filter ==='done' ? 'filters_button_onfocus' : null}`} variant="secondary-outline">Completed</button>
            </div>
            <button 
              onClick={() => dispatch(clearDone())} 
              className="filters_button clear pe-0">Clear completed</button>
          
        </div>
     
    </Container>
  );
}

export default Filters;