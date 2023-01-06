// import React, { useContext} from 'react';
import { useState, useEffect } from "react";
import FilteredList from "./components/filteredList";

function SelectForCompare({ characterIdArray }) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUser = () =>
            fetch(`https://rickandmortyapi.com/api/character/`)
                .then(response => response.json())
                .then(users => {
                    setIsLoaded(true);
                    getUserInfo(users.results);
                    setUsers(characterIdArray.results);
                    
                },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    });
        fetchUser();
    }, [])

    const getUserInfo = (results) => {
        results.forEach(result => {
            if (characterIdArray?.length > 2) {
                characterIdArray.forEach(id => {
                    if (result.id === id) {
                        setUsers(users.results);
                    }
                })
            }
        });
    }

    return (
        <div id="compare_result" className="">
            <table>
                <thead>
                    <tr>
                        <th className="th">

                        </th>
                        <th className="th">
                            İmage
                        </th>
                        <th className="th">
                            Location
                        </th>
                        <th className="th">
                            Gender
                        </th>
                        <th className="th">
                            Species
                        </th>
                        <th className="th">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody id="compare_result_body">
                    {users.map((user, index) => (
                        <FilteredList key={index} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SelectForCompare;