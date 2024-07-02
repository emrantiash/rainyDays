import { NextRequest,NextResponse } from 'next/server';
import cookiesNames from './app/utils/constant/Constant';

// const response = NextResponse.next()
//     response.cookies.set('auth-x-mit-20', true)

export  function middleware(request = NextRequest) {

    const cookie =  request.cookies.has(cookiesNames.AUTH_X_MIT_DELIVER_20)

    //  console.log("==middleware called===",request.nextUrl.pathname == "/merchant"  && !cookie)
  
    
    if (request.nextUrl.pathname == "/marchant"  && !cookie)
        return NextResponse.redirect(new URL("/signin", request.url))
        
    if (request.nextUrl.pathname == "/new"  && !cookie)
        return NextResponse.redirect(new URL("/signin", request.url))

    if (request.nextUrl.pathname == "/signin"  && cookie)
        return NextResponse.redirect(new URL("/merchant", request.url))
   


}

export const config = {
    matcher: '/merchant/:path*',
    matcher: '/new/:path*',
    matcher: '/signin/:path*',
  }