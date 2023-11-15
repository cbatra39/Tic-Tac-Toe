import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName)
    function handleclick() {
        setIsEditing(wasEditing => !wasEditing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleOnChange(event) {
        setPlayerName(event.target.value)

    }
    let editedPlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editedPlayerName = <input type="text" required value={playerName} onChange={handleOnChange} />
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editedPlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleclick}>{isEditing ? <span>Save</span> : <span>Edit</span>}</button>
        </li>
    );
}