import { useState, useEffect } from "react";

function Card() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);


    // useEffect(() => {
    //     fetch("https://rickandmortyapi.com/api/character")
    //         .then(response => response.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setUsers(result);
    //                 console.log(result.info);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    useEffect(() => {
        const fetchUser = () =>
            fetch(`https://rickandmortyapi.com/api/character/`)
                .then(response => response.json())
                .then(users => {
                    setIsLoaded(true);
                    setUsers(users.results);
                    console.log(users);
                },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    });
        fetchUser();
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div id="card_container">
                <ul className="my-5 flex justify-center gap-x-5 gap-y-10 flex-wrap mx-auto cursor-pointer w-fit">
                    {users.map(user => (
                        <div className="relative group">
                            <input type="hidden" value="1" />
                            <div
                                className="bg-white border border-primary rounded-[40px] w-[350px] h-[450px] text-base-text relative z-10">
                                <div className="m-3 flex justify-center">
                                    <img className="w-[70%] rounded-full" src={user.image} />
                                </div>
                                <div className="flex flex-col text-center gap-2">
                                    <p className="text-[24px] font-bold">{user.name}</p>
                                    <p className="text-primary font-bold">{user.location.name}</p>
                                    <div className="flex justify-around mt-3">
                                        <div>
                                            <p className="mb-1 font-bold  border-b border-b-[#999999]">Gender</p>
                                            <p className="text-secondary text-[20px] font-bold">{user.gender}</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 font-bold  border-b border-b-[#999999]">Species</p>
                                            <p className="text-secondary text-[20px] font-bold">{user.species}</p>
                                        </div>
                                    </div>
                                </div>
                                <p
                                    className="absolute bg-[#198754] text-white rounded-[10px] top-4 right-4 px-4 py-1 hover:opacity-80 focus:opacity-80">
                                    {user.status}</p>
                            </div>
                            <div
                                className="bg-primary border border-primary rounded-[40px] w-[350px] h-[450px] absolute top-[10px] left-0 z-0">
                            </div>
                            <div id="overlay_1" className="absolute inset-0 group-hover:bg-[#48cfad]/60 z-20 rounded-[40px]"></div>
                            <div className="absolute left-[calc(50%-64px)] top-[calc(50%-24px)] hidden group-hover:flex items-center justify-center z-30">
                                <button id="button_1" className="bg-transparent border border-white text-white  hover:bg-white hover:text-[#48cfad] focus:bg-white focus:text-[#48cfad] group-hover:animate-slideIn text-[20px] py-2 w-[128px] font-bold flex justify-center items-center transition-colors duration-300"
                                    onClick="selectForCompare(this.parentNode.parentNode.id, this.id);">Compare</button>
                            </div>

                        </div>
                    ))}
                </ul>
                {/* {users.map(user => (
                        <li key={user.id}>
                            {user.name} {user.price}
                        </li>
                    ))} */}
            </div>
        )
    }

    return <div className="relative group">
        <input type="hidden" value="1" />
        <div
            className="bg-white border border-primary rounded-[40px] w-[350px] h-[450px] text-base-text relative z-10">
            <div className="m-3 flex justify-center">
                <img className="w-[70%] rounded-full" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
            </div>
            <div className="flex flex-col text-center gap-2">
                <p className="text-[24px] font-bold">Rick Sanchez</p>
                <p className="text-primary font-bold">Citadel of Ricks</p>
                <div className="flex justify-around mt-3">
                    <div>
                        <p className="mb-1 font-bold  border-b border-b-[#999999]">Gender</p>
                        <p className="text-secondary text-[20px] font-bold">Male</p>
                    </div>
                    <div>
                        <p className="mb-1 font-bold  border-b border-b-[#999999]">Species</p>
                        <p className="text-secondary text-[20px] font-bold">Human</p>
                    </div>
                </div>
            </div>
            <p
                className="absolute bg-[#198754] text-white rounded-[10px] top-4 right-4 px-4 py-1 hover:opacity-80 focus:opacity-80">
                Alive</p>
        </div>
        <div
            className="bg-primary border border-primary rounded-[40px] w-[350px] h-[450px] absolute top-[10px] left-0 z-0">
        </div>
        <div id="overlay_1" className="absolute inset-0 group-hover:bg-[#48cfad]/60 z-20 rounded-[40px]"></div>
        <div className="absolute left-[calc(50%-64px)] top-[calc(50%-24px)] hidden group-hover:flex items-center justify-center z-30">
            <button id="button_1" className="bg-transparent border border-white text-white  hover:bg-white hover:text-[#48cfad] focus:bg-white focus:text-[#48cfad] group-hover:animate-slideIn text-[20px] py-2 w-[128px] font-bold flex justify-center items-center transition-colors duration-300"
                onClick="selectForCompare(this.parentNode.parentNode.id, this.id);">Compare</button>
        </div>

    </div>

    // return <button className={classNames({
    //     "border border-[#333333] py-2 px-3 rounded-lg hover:opacity-50 block mb-2": true,
    //     "bg-gray-100": variant === 'default',
    //     "bg-green-600 text-white": variant === 'success'
    // })}>{children}</button>
}

export default Card