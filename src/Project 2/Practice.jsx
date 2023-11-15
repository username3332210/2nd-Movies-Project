import React, { useState, useEffect } from 'react'

function Movies() {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=7282d426"
    const [movie, setMovie] = useState(0);
    useEffect(() => {
        async function data1() {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovie(data.Search);
        }
        data1()
    }, []);



    return (
        <>
            {movie?.map((pack) => {
                const { Poster, Title, imdbID } = pack
                return (
                    <>
                        <div key={imdbID}>
                            <img src={Poster} alt="" />
                            <p>{Title}</p>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Movies