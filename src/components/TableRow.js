import React from 'react';

const Tablerow = ({ title, length, rating, genres, awards }) => {

    return (
        <tr>
            <th>{title}</th>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {genres.map((genre,i)=><li key={genre+i}>{genre}</li>)}
                </ul>
            </td>
            <td>{awards}</td>
        </tr>
    );
}

export default Tablerow;
