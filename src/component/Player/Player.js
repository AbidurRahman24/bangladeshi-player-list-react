import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import PlayerDetails from '../PlayerDetails/PlayerDetails'

const Player = () => {
    const [player, setPlayer] = useState([]);
    const [club, setClub] = useState([])
    // console.log(player);
    useEffect(() => {

        fetch('https://mocki.io/v1/f4f44a79-11d2-4654-81fa-45ccf03563f8')
            .then(res => res.json())
            .then(data => {
                setPlayer(data)
                // console.log(data[0].id);
            })
    }
        , [])

    const handleAddClub = (player) => {
        const addClub = [...club, player]
        setClub(addClub)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {
                            player.map(player => <PlayerDetails
                                player={player}
                                handleAddClub={handleAddClub}
                                key={player.id}
                            ></PlayerDetails>)
                        }
                    </div>
                    <div className="col-md-4">
                        <Club club={club}></Club>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;