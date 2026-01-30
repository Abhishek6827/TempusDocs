import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import DocRenderer from '@/components/DocRenderer';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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

  const allDocs = getAllDocs();
  const currentIndex = allDocs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-2.5 bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">
             <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {doc.frontmatter.title}
          </h1>
        </div>
        {doc.frontmatter.description && (
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed border-l-4 border-gray-200 dark:border-gray-700 pl-6 ml-2">
            {doc.frontmatter.description}
          </p>
        )}
      </div>
      
      <DocRenderer content={doc.content} />

      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {prevDoc ? (
          <Link
            href={`/docs/${prevDoc.slug}`}
            className="group flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
          >
            <span className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-500 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {prevDoc.frontmatter.title}
            </span>
          </Link>
        ) : <div />}

        {nextDoc ? (
          <Link
            href={`/docs/${nextDoc.slug}`}
            className="group flex flex-col items-end p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 text-right"
          >
            <span className="flex items-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-500 transition-colors">
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {nextDoc.frontmatter.title}
            </span>
          </Link>
        ) : <div />}
      </div>
    </article>
  );
}
