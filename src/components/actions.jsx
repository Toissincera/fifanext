"use server";

import { db } from "./prismaDB";
import { notFound, redirect } from "next/navigation";

export async function createPlayer(playerToCreate) {

  const createdPlayer = await db.player.create({
    data: playerToCreate,
  });

  if (createdPlayer) {redirect("/playerslist")} 
  else {notFound()}
}

export async function deletePlayer(thisPlayer) {
  const deletedPlayer = await db.player.delete({
    where: { id: thisPlayer.id }
  })

  if (deletedPlayer) {redirect("/playerslist")} 
  else {notFound()}
}
