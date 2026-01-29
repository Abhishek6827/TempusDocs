
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${doc.frontmatter.title} - TempusDocs`,
    description: doc.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose prose-slate dark:prose-invert max-w-none lg:prose-lg">
      <h1 className="text-3xl font-bold mb-4">{doc.frontmatter.title}</h1>
      {doc.frontmatter.description && (
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 border-b pb-4">
          {doc.frontmatter.description}
        </p>
      )}
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />,
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match && !className; // Basic check for inline code
             if (isInline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400" {...props}>
                    {children}
                </code>
              )
            }
            return (
              <div className="rounded-lg overflow-hidden my-4 bg-gray-900 border border-gray-800 text-gray-100 p-4 overflow-x-auto">
                 <code className={className} {...props}>
                  {children}
                </code>
              </div>
            );
          },
          pre: ({ node, ...props }) => <pre className="bg-transparent p-0 m-0" {...props} />,
           a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
        }}
      >
        {doc.content}
      </ReactMarkdown>
    </article>
  );
}
