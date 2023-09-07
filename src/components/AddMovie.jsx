import React, { useState } from 'react'

function AddMovie(props) {
    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [IMDBRating, setIMDBRating] = useState(1)
    const [hasOscars, setHasOscars] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        const newMovie = {title,director,IMDBRating,hasOscars}
        props.addNewMovie(newMovie)

        setTitle('')
        setDirector('')
        setIMDBRating(1)
        setHasOscars(false)
    }
    return (
        <div className="AddMovie">
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                <label>Director:</label>
                <input value={director} onChange={(e) => { setDirector(e.target.value) }} type="text" />

                <label>IMDB Rating:</label>
                <input value={IMDBRating} onChange={(e) => { setIMDBRating(e.target.value) }} type="number" />

                <label>Has Oscars:</label>
                <input value={hasOscars} onChange={(e) => { setHasOscars(e.target.checked) }} type="checkbox" />
                
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie