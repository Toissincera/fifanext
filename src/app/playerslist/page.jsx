import Link from "next/link";
import { db } from "@/components/prismaDB";

export default async function PlayersList() {
  const allPlayers = await db.player.findMany();

  return (
    <div className="lead">
      <div className="list">
        {allPlayers.map((player, index) => (
          <Link
            href={`/playerslist/${player.name}`}
            className="listItem"
            key={index}
          >
            <div>{index + 1}.</div>
            <div>{player.name}</div>
            <div>{player.overall}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
