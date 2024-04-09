"use client";

import { deletePlayer } from "./actions";

export default async function DeletePlayerButton({ thisPlayer }) {

  const deletePlayerAction = deletePlayer.bind(null, thisPlayer)
  
    return (
    <form action={deletePlayerAction}>
      <input
        hidden
        readOnly
        value={thisPlayer}
      ></input>
      <button className="lead">Delete Player</button>
    </form>
  );
}
