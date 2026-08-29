import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogMarkdownProps {
  content: string;
}

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="blog-markdown text-lg leading-8 text-foreground/75 sm:text-xl sm:leading-9">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2 className="mb-4 mt-10 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2 className="mb-4 mt-10 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-3 mt-7 text-xl font-semibold text-foreground sm:text-2xl">
              {children}
            </h4>
          ),
          p: ({ children }) => <p className="my-5 first:mt-0 last:mb-0">{children}</p>,
          strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
          a: ({ children, href }) => {
            const external = href?.startsWith("http://") || href?.startsWith("https://");

            return (
              <a
                href={href}
                className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer noopener" : undefined}
              >
                {children}
              </a>
            );
          },
          ul: ({ children }) => <ul className="my-5 list-disc space-y-2 pl-7 marker:text-primary">{children}</ul>,
          ol: ({ children }) => <ol className="my-5 list-decimal space-y-2 pl-7 marker:text-primary">{children}</ol>,
          blockquote: ({ children }) => (
            <blockquote className="my-7 border-l-4 border-primary bg-muted/30 px-5 py-1 italic text-foreground/70">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-10 border-border" />,
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[520px] border-collapse text-left text-base sm:text-lg">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-muted/60 text-foreground">{children}</thead>,
          tbody: ({ children }) => <tbody className="divide-y divide-border">{children}</tbody>,
          th: ({ children }) => <th className="border-r border-border px-4 py-3 font-semibold last:border-r-0">{children}</th>,
          td: ({ children }) => <td className="border-r border-border px-4 py-3 align-top last:border-r-0">{children}</td>,
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground">{children}</code>
          ),
          pre: ({ children }) => (
            <pre className="my-7 overflow-x-auto rounded-lg border border-border bg-muted/50 p-5 text-base leading-7 [&_code]:bg-transparent [&_code]:p-0">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
