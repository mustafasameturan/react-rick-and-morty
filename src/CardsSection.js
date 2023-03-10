import { useState, useEffect } from "react";
import Card from "./components/Card";

function CardsSection() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUser = () =>
            fetch(`https://rickandmortyapi.com/api/character/`)
                .then(response => response.json())
                .then(users => {
                    setIsLoaded(true);
                    setUsers(users.results);
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
                <div className="mt-5 mb-20 flex justify-center gap-x-5 gap-y-10 flex-wrap mx-auto w-fit">
                    {users.map((user, index) => (
                        <Card key={index} user={user} />
                    ))}
                </div>
            </div>
        )
    }
}

export default CardsSection