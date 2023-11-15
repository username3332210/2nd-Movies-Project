import React, { useState, useEffect } from 'react'

function Unsplash() {
    const api = `https://api.unsplash.com/photos?client_id=pnxhzqYH5WDgPtG7rilocYpqGHIni9ELzJ_ZIUhOSlM`
    const [image, setImage] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        async function splash() {
            const res = await fetch(api);
            const data = await res.json();
            // console.log(data);
            setImage(data)
        }
        splash()
    }, []);
    const handleclick = async () => {
        const api1 = `https://api.unsplash.com/search/photos?&query=${search}&client_id=pnxhzqYH5WDgPtG7rilocYpqGHIni9ELzJ_ZIUhOSlM`
        const res1 = await fetch(api1);
        const data1 = await res1.json();
        console.log(data1);
        setImage(data1.results)
    }
    return (
        <>
            <div className='searchArea'>
                <input
                    className='srch'
                    type="text"
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            <button className='btn' onClick={handleclick}>Click Me</button>
            </div>

            <div className='imageMap'>
                {image.map((pack) => {
                    const { urls, likes, id } = pack
                    return (
                        <>
                            <div key={id}>
                                <img src={urls.small} alt="" />
                                <div>{likes}</div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Unsplash