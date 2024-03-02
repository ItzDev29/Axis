import { sendMail } from "../../../service/mailservice";
import { type NextRequest } from "next/server";
import { NextResponse } from 'next/server';
export async function POST(req:Request) {
  try {

       await sendMail(
          "TEST",
          "bt21civ017@students.vnit.ac.in",
          "AXIS NOT OP"

              );
       return NextResponse.json( { message:"SUCCESS" },{status:200})
     
  } catch (error) {
    return NextResponse.json(
      { message:error },
      { status: 500 }
    );
  }
};

