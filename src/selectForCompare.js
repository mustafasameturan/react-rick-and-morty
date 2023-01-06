// import React, { useContext} from 'react';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FilteredList from "./components/filteredList";
import { characterIdArr } from "./stores/character";

function SelectForCompare() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [apiResult, setApiResult] = useState(null);
    const [filteredResults, setFilteredResults] = useState([]);
    const characterIdArray = useSelector(state => state.character)

    useEffect(() => {
        const fetchUser = () =>
            fetch(`https://rickandmortyapi.com/api/character/`)
                .then(response => response.json())
                .then(users => {
                    setIsLoaded(true);
                    setApiResult(users)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
        });

        fetchUser()       
    }, [])


    useEffect(() => {
         const getUserInfo = (results) =>{
            const newFilteredResults = []
            results.filter((result) => {
                characterIdArray.map((id) => {
                    if(result.id === id){
                        newFilteredResults.push(result);
                    }
                })
            })
            setFilteredResults(newFilteredResults);
         }
         if(apiResult !== null){    
            getUserInfo(apiResult.results)
         }
    }, [characterIdArray]);      
      
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
                    {filteredResults.map((user, index) => (
                        <FilteredList key={index} user={user} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SelectForCompare;