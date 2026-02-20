export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/workspace/:path*", "/analytics/:path*", "/leaderboard/:path*"],
};
