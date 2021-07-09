import React from 'react';
import SeletedPlayer from '../SeletedPlayer/SeletedPlayer';

const Club = (props) => {
    const club = props.club;
    const total = club.reduce( (total, salary) => total + salary.salary , 0 ).toFixed(2)
    return (
        <div>
            <h2>Total Player: {club.length}</h2>
            <h2>Total Budget: {total}</h2>
            {club.map(club => <SeletedPlayer 
            club={club}
            ></SeletedPlayer>)}
        </div>
    );
};

export default Club;