import React, { useEffect, useState } from 'react'

function MoviesProject() {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=7282d426&"
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        async function data1() {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            setMovie(data.Search)
        }
        data1();
    }, []);
    const handleClick = async () => {
        const link = `http://www.omdbapi.com/?s=${search}&apikey=7282d426`
        const res1 = await fetch(link)
        const data1 = await res1.json()
        console.log(data1);
        setMovie(data1.Search)
    }
    return (
        <>
            <center>
                <input type="text" onChange={(e) => {
                    setSearch(e.target.value)
                }} />
                <button onClick={handleClick}>Click Me</button>
            </center>
            {movie?.map((pack) => {
                const { Poster, Title, Year, imdbID } = pack
                return (
                    <>
                        <div className='back' key={imdbID}>
                            <div className='flex'>
                                <img style={{ height: "400px", width: "300px" }} src={Poster} alt="" />
                                <div>
                                    <p>{Title}</p>
                                    <p>Movie</p>
                                    <p>Description</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis fugit illum sequi quo suscipit nulla, delectus repudiandae qui reprehenderit quae asperiores eligendi quaerat laborum recusandae dolores dolore quibusdam neque ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default MoviesProject




// to check api work
// https://www.omdbapi.com/?s=abcd&apikey=7282d426&