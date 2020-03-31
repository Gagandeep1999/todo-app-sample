import React, { useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { books } = useContext(BooksContext);
    const {theme, themeDispatch } = useContext(ThemeContext)

    return (
        <div className={theme.div}>
        <div className="navbar">
        <h1>TODO List</h1>
        <p>Currently you have { books.length } things to do</p> 
        <div>
        <p className="btn light-btn" onClick={()=>{themeDispatch({type: "LIGHT"})}}></p>
        <p className="btn dark-btn" onClick={()=>{themeDispatch({type: "DARK"})}}></p>
        <p className="btn sky-green-btn" onClick={()=>{themeDispatch({type: "SKY_GREEN"})}}></p>
        <p className="btn light-red-btn" onClick={()=>{themeDispatch({type: "LIGHT_RED"})}}></p>
        <p className="btn pink-btn" onClick={()=>{themeDispatch({type: "PINK"})}}></p>
        <p className="btn orange-btn" onClick={()=>{themeDispatch({type: "ORANGE"})}}></p>
        <p className="btn sky-blue-btn" onClick={()=>{themeDispatch({type: "SKY_BLUE"})}}></p>
        <p className="btn dark-red-btn" onClick={()=>{themeDispatch({type: "DARK_RED"})}}></p>
        <p>Choose a color</p> 
        </div>   
        </div>
        </div>
    )
}

export default Navbar
