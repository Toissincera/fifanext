import Image from "next/image";
import { notFound } from "next/navigation";
import { db } from "@/components/prismaDB";
import DeletePlayerButton from "@/components/deletePlayerButton";

export default async function PlayerDetails(props) {
  const thisPlayer = await db.player.findFirst({
    where: { name: props.params.player },
  });

  if (!thisPlayer) {
    return notFound();
  }

  return (
    <>
      <div className="lead">
        <div className="pic">
          <Image
            src={`https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=${thisPlayer.name}`}
            alt="Lorelei Neutral Avatar"
            width={200}
            height={200}
          />
        </div>
        Here is {thisPlayer.name}'s details: <br />
        Name: {thisPlayer.name} <br />
        Overall: {thisPlayer.overall}
      </div>
      <DeletePlayerButton thisPlayer={thisPlayer}/>
    </>
  );
}
