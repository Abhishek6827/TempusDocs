
import Link from 'next/link';
import { getAllDocs } from '@/lib/docs';
import { Book, Menu, Home } from 'lucide-react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = getAllDocs();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <Book className="w-6 h-6 text-blue-600" />
            <span>TempusDocs</span>
          </Link>
          <Link href="/" className="md:hidden">
            <Home className="w-5 h-5 text-gray-500 hover:text-gray-900" />
          </Link>
        </div>
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-65px)]">
          <div className="mb-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Documentation
          </h3>
          
          <ul className="space-y-1">
            {docs.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={`/docs/${doc.slug}`}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  {doc.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
