import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
    const requestHeader = new Headers(request.headers);
    requestHeader.set('x-pathname', request.nextUrl.pathname);

    return NextResponse.next({
        request: {
            headers: requestHeader
        }
    })

}