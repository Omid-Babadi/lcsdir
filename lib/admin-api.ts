import type { NextRequest } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  isSameOriginRequest,
  isValidAdminSessionToken,
} from "@/lib/admin-auth";

export function isAuthorizedAdminRequest(request: NextRequest) {
  return isValidAdminSessionToken(
    request.cookies.get(ADMIN_SESSION_COOKIE)?.value,
  );
}

export function canMutateAdminData(request: NextRequest) {
  return isAuthorizedAdminRequest(request) && isSameOriginRequest(request);
}
