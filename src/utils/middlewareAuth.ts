import type { NextRequest } from "next/server";
import { toStringCookies } from "./toStringCookies";

export default async function middlewareAuth(req: NextRequest) {
  const { data } = await fetch("http://localhost:5000/api/user/profile", {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: toStringCookies(req.cookies),
    },
  }).then((res) => res.json());

  const { user } = data || {};
  return { user };
}
