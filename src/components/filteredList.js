

function FilteredList({ user }) {

    return (
        <tr>
            <td id={user.id} className="td">
                {user.name}
            </td>
            <td className="td">
                <img className="table-image"
                    src={user.image} />
            </td>
            <td className="td">
                {user.location.name}
            </td>
            <td className="td">
                {user.gender}
            </td>
            <td className="td">
                {user.species}
            </td>
            <td>
                {user.status}
            </td>
        </tr>
    )

}

export default FilteredList;