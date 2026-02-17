interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  return (
    <div className="my-5 rounded-lg overflow-hidden border border-[#2a2a3d]">
      {(title || language) && (
        <div className="bg-[#242440] px-4 py-2 flex items-center justify-between border-b border-[#2a2a3d]">
          <span className="text-xs text-[#9999b3] font-mono">{title || language}</span>
        </div>
      )}
      <pre className="!m-0 !rounded-none !border-0 bg-[#1a1a2e] p-4 overflow-x-auto">
        <code className="text-[#c2c2d6] text-[0.8rem] sm:text-[0.85rem] leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}
