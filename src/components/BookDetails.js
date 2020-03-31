import React, { useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext'
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BooksContext);
    const { theme } = useContext(ThemeContext);

    return (
       <li className={theme.div} >
        <p onClick={()=>{dispatch({type:'REMOVE_BOOK', id:book.id})}} className={"btn delete "+ theme.btn}>x</p>
        <p 
        className={"title " + theme.done ? "done":"" }
        onDoubleClick={()=>{dispatch({type:'REMOVE_BOOK', id:book.id})}} 
        >{book.title}</p>

       </li>
    )
}

export default BookDetails
