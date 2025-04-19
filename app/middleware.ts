// middleware.ts
import { NextResponse } from "next/server";

interface MiddlewareRequest {
    nextUrl: {
        pathname: string;
    };
}

export function middleware(request: MiddlewareRequest): NextResponse {
    console.log(`Middleware: Processing request for ${request.nextUrl.pathname}`);
    if (
        request.nextUrl.pathname.startsWith("/_next") ||
        request.nextUrl.pathname.match(/\.(png|jpg|jpeg|svg|otf|css|woff|woff2)$/)
    ) {
        console.log(`Middleware: Bypassing static asset ${request.nextUrl.pathname}`);
        return NextResponse.next();
    }
    return NextResponse.next();
}