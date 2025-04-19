// middleware.ts
import { NextResponse } from "next/server";

interface MiddlewareRequest {
    nextUrl: {
        pathname: string;
    };
}

export function middleware(request: MiddlewareRequest): NextResponse {
    // Example: Avoid processing static assets
    if (request.nextUrl.pathname.startsWith("/_next") || request.nextUrl.pathname.match(/\.(png|jpg|svg|otf|css)$/)) {
        return NextResponse.next();
    }
    // Your middleware logic
    return NextResponse.next();
}
