import { NextResponse } from "next/server";

// It's.. insane.. to me, that this is required to access the client's IP address. but here we are.
// Taken with love from https://stackoverflow.com/questions/75532475/how-can-i-get-the-ip-adress-of-a-client-in-server-component-of-the-app-directory 
export function middleware(request) {
  
  const requestHeaders = new Headers(request.headers);

  // Check if the hosting platform provides the client's IP address and store it in a variable
  const ip = request.ip || "";

  // Add the client's IP address to the request headers using the 'x-forwarded-for' field
  requestHeaders.set("x-forwarded-for", ip);

  // Return a new request object with the updated headers using NextResponse.next()
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}