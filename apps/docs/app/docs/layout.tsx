import React from "react";
import { DocsSidebar } from "@/components/sidebar/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row gap-10 py-4">
      <DocsSidebar />
      <article className="flex-1 max-w-4xl min-w-0 prose prose-zinc dark:prose-invert">
        {children}
      </article>
    </div>
  );
}
