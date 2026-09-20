"use client";

import React, { useState } from "react";
import { copyToClipboard } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language = "typescript", filename, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative my-4 rounded-lg border border-border bg-[#0d1117] text-[#e6edf3] overflow-hidden text-xs font-mono shadow-sm">
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#30363d] bg-[#161b22] text-[#8b949e]">
          <span>{filename}</span>
          <span className="uppercase text-[10px] tracking-wider">{language}</span>
        </div>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-2.5 right-2.5 z-10 px-2.5 py-1 text-[11px] font-sans font-medium rounded bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] transition-colors flex items-center gap-1.5"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>

        <pre className="p-4 overflow-x-auto leading-relaxed tab-4 selection:bg-[#264f78]">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
