"use client";

import { useState } from "react";
import { createPlayer } from "@/components/actions";

export default function CreateNew() {
  const [name, setName] = useState("");
  const [overall, setOverall] = useState("");
  const createPlayerAction = createPlayer.bind(null, {name: name, overall: parseInt(overall)});
  return (
    <form
      className="lead"
      action={createPlayerAction}
    >
      <input
        name="name"
        placeholder="Player Name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      <br />
      <input
        name="overall"
        placeholder="Overall"
        className="inputBox"
        value={overall}
        onChange={(e) => setOverall(e.target.value)}
      />
      <br />
      <button
        type="submit"
        className="inputBox"
      >
        Create!
      </button>
    </form>
  );
}
