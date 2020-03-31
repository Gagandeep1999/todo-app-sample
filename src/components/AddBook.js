import React, { useContext, useState } from 'react'
import { BooksContext } from '../contexts/BooksContext'
import { ThemeContext } from '../contexts/ThemeContext';

const AddBook = () => {
    const { dispatch } = useContext(BooksContext);
    const { theme } = useContext(ThemeContext)
    const [ title, setTitle ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book:{title}});
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className={theme.input} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New TODO"  required/>
            <input type="submit" className={theme.btn} value="+"/>
        </form>
    )
}

export default AddBook
