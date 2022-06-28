import { BsChevronDown } from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { useDispatch } from 'react-redux/es/exports';
import { addTodo } from '../../reducers/todoInputSlice';


import '../css/todoInput.min.css'

const Todo = () => {

  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

      const onAddTodo = () => {
        dispatch(addTodo({ name: inputValue, id: nanoid(), done: false}));
        setInputValue('')
      }

      const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          onAddTodo()
        }
      }

    return (
        <Container>
        <div className="todo_add">

        <InputGroup className="mb-3">
        <Button onClick={() => {onAddTodo()}} variant="outline-secondary" id="button-addon1">
            <BsChevronDown/>
        </Button>
        <Form.Control
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          value={inputValue}
          placeholder="What needs to be done?"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        
        </div>
        </Container>
        
    )
} 

export default Todo

