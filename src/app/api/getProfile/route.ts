import { type NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth ,clerkClient} from "@clerk/nextjs/server";
import { MongoClient } from 'mongodb'

import jwt, { Jwt, JwtPayload, Secret } from "jsonwebtoken";

export async function GET(req: NextRequest, res: NextResponse) {
  try{
  const { userId } = getAuth(req);
  if (!userId) {
        return NextResponse.json({
          error: "Not authenticated"
    }, {
      status: 401,
    });
  }

  const user = userId ? await clerkClient.users.getUser(userId) : null;
const email=user?.emailAddresses[0];
const Email=email?.emailAddress;
const fn=user?.firstName;
const ln=user?.lastName;
// console.log(user);
const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
);
 await client.connect();
 const db=client.db("users");

 const User = await db.collection('users').findOne({ email:Email });

 if (!User) {
       await db.collection("users").insertOne({email:Email,firstName:fn,lastName:ln});
}
 
return NextResponse.json({
        "user" :User
    }, {
    status: 200,
    });
}

catch (error) {
  return NextResponse.json(
    { message:"Server Error" },
    { status: 500 }
  );
}
}
