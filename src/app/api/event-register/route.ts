import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from 'mongodb'
import {headers} from "next/headers"
import mongoose from 'mongoose';


export async function POST(req:Request) {

  interface User {
    name: string;
    email: string;
    number: string;
    teamName: string;
    participants: string;
    collegeName: string;
    state: string;
    city: string;
    linkedIn: string;
    address: string;
    yearOfStudying: string;
  }
  console.log(765765765);
  try {
    const {name, email,number, teamName, participants, collegeName, state, city, linkedIn, address, yearOfStudying }= await req.json();
    // const newData = new Events(req.json());
   const client=new MongoClient(process.env.MONGODB_URI ?? '');
   await client.connect();
   const headersList = headers();
   const eventId = headersList.get('event-id');
   const db=client.db("events");
   const objectId = new ObjectId(eventId?? '');


   const event = await db.collection("events").findOne({ _id: objectId });
    if (event && event.userIds.some((user:User) => user.email === email)) {
      return NextResponse.json({ message: "User already registered for this event" }, { status: 400 });
    }


 const userinfo={name, email,number, teamName, participants, collegeName, state, city, linkedIn, address, yearOfStudying };
   await db.collection("events").findOneAndUpdate({_id:objectId},{$push:{userIds:userinfo} as any});

    return NextResponse.json({ message: "Registration Added." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Event registration failed" },
      { status: 500 }
    );
  }
}