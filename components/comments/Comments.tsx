"use client";

import { ClientSideSuspense } from "@liveblocks/react";

import { CommentsOverlay } from "@/components/comments/CommentsOverlay";
import { ErrorBoundary } from "react-error-boundary";

export const Comments = () => (
  <ErrorBoundary
    fallback={
      <div className="error">There was an error while getting threads.</div>
    }>
    <ClientSideSuspense fallback={null}>
      {() => <CommentsOverlay />}
    </ClientSideSuspense>
  </ErrorBoundary>
);
