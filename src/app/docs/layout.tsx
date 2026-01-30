
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/components/Search';
import { getAllDocs } from '@/lib/docs';
import { 
  Menu, 
  Home, 
  BookOpen, 
  Rocket, 
  Layers, 
  FileCode, 
  Globe, 
  Mail, 
  UploadCloud, 
  Activity, 
  ClipboardList, 
  Users, 
  CreditCard, 
  User, 
  FileText
} from 'lucide-react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = getAllDocs();

  // Group definitions
  const groups = [
    {
      title: 'Start Here',
      items: ['introduction', 'getting-started'],
    },
    {
      title: 'Core Concepts',
      items: ['architecture', 'api-reference'],
    },
    {
      title: 'Features',
      items: ['tracemail', 'imports', 'audit-log'],
    },
    {
      title: 'Management',
      items: ['domain-management', 'email-accounts', 'team-management', 'billing', 'profile'],
    },
  ];

  // Helper to find doc by slug
  const getDoc = (slug: string) => docs.find((d) => d.slug === slug);

  // Icon mapping
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'introduction': return BookOpen;
      case 'getting-started': return Rocket;
      case 'architecture': return Layers;
      case 'api-reference': return FileCode;
      case 'domain-management': return Globe;
      case 'email-accounts': return Mail;
      case 'imports': return UploadCloud;
      case 'tracemail': return Activity;
      case 'audit-log': return ClipboardList;
      case 'team-management': return Users;
      case 'billing': return CreditCard;
      case 'profile': return User;
      default: return FileText;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 flex flex-col md:sticky md:top-0 md:h-screen">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between sticky top-0 bg-white dark:bg-gray-800 z-10">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <Image 
              src="/Footer.png" 
              alt="TempusDocs Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
            <span>TempusDocs</span>
          </Link>
          <Link href="/" className="md:hidden">
            <Home className="w-5 h-5 text-gray-500 hover:text-gray-900" />
          </Link>
        </div>
        
        <nav className="p-4 overflow-y-auto h-[calc(100vh-65px)] md:h-auto md:flex-1 custom-scrollbar">
          <div className="mb-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="space-y-6">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((slug) => {
                    const doc = getDoc(slug);
                    if (!doc) return null;
                    const Icon = getIcon(slug);
                    
                    return (
                      <li key={slug}>
                        <Link
                          href={`/docs/${slug}`}
                          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                        >
                          <Icon className="w-4 h-4 opacity-70" />
                          {doc.frontmatter.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            
            {/* Catch-all for any ungrouped docs */}
            {(() => {
              const groupedSlugs = new Set(groups.flatMap(g => g.items));
              const ungroupedDocs = docs.filter(d => !groupedSlugs.has(d.slug));
              
              if (ungroupedDocs.length > 0) {
                return (
                  <div>
                    <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Other
                    </h3>
                    <ul className="space-y-1">
                      {ungroupedDocs.map((doc) => (
                        <li key={doc.slug}>
                          <Link
                            href={`/docs/${doc.slug}`}
                            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                          >
                            <FileText className="w-4 h-4 opacity-70" />
                            {doc.frontmatter.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            })()}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-20 px-4 md:px-8 flex items-center relative">
          {/* Centered Title */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">Documentation</span>
          </div>
          
          {/* Right Aligned Search */}
          <div className="ml-auto w-48 md:w-64">
            <Search docs={docs} />
          </div>
        </header>
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
