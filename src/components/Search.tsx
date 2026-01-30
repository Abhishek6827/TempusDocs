"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search as SearchIcon, FileText, ChevronRight } from 'lucide-react';
import { DocPost } from '@/lib/docs';
import clsx from 'clsx';
import Highlight from '@/components/Highlight';

interface SearchProps {
  docs: DocPost[]; // We might need to omit 'content' if it's too large, but for now it's fine
}

export default function Search({ docs }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DocPost[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (query.length === 0) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = docs.filter((doc) => {
      const titleMatch = doc.frontmatter.title.toLowerCase().includes(lowerQuery);
      const descMatch = doc.frontmatter.description?.toLowerCase().includes(lowerQuery);
      const contentMatch = doc.content.toLowerCase().includes(lowerQuery); 
      return titleMatch || descMatch || contentMatch;
    }).slice(0, 5); // Limit to 5 results

    setResults(filtered);
    setIsOpen(true);
  }, [query, docs]);

  const handleSelect = (slug: string) => {
    setQuery(''); // Clear query? No, maybe keep it? Use usually clears. But if we want to highlight in page, we pass it.
    // If we clear query here, `Highlight` in page works? Yes, because we pass `query` (state) which IS `test`.
    // Wait, `setQuery('')` runs BEFORE `router.push`? No.
    // But `setQuery('')` updates state.
    // `router.push` uses current `query`.
    // It's safe.
    setIsOpen(false);
    router.push(`/docs/${slug}?q=${encodeURIComponent(query)}`);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value.length > 0) setIsOpen(true);
          }}
          onFocus={() => {
            if (query.length > 0) setIsOpen(true);
          }}
          placeholder="Search..."
          className="w-full pl-9 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50">


          <ul className="py-2">
            {results.map((result) => {
              const lowerQuery = query.toLowerCase();
              const titleMatch = result.frontmatter.title.toLowerCase().includes(lowerQuery);
              const descMatch = result.frontmatter.description?.toLowerCase().includes(lowerQuery);
              let contentSnippet = null;

              if (!titleMatch && !descMatch) {
                const index = result.content.toLowerCase().indexOf(lowerQuery);
                if (index !== -1) {
                  const start = Math.max(0, index - 20);
                  const end = Math.min(result.content.length, index + lowerQuery.length + 60);
                  contentSnippet = (start > 0 ? "..." : "") + result.content.slice(start, end) + (end < result.content.length ? "..." : "");
                }
              }

              return (
                <li key={result.slug}>
                  <button
                    onClick={() => handleSelect(result.slug)}
                    className="w-full text-left px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3 w-full overflow-hidden">
                      <FileText className="w-4 h-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                          <Highlight text={result.frontmatter.title} query={query} />
                        </p>
                        {result.frontmatter.description && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            <Highlight text={result.frontmatter.description} query={query} />
                          </p>
                        )}
                        {contentSnippet && (
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 italic line-clamp-2 break-words">
                             Match: <Highlight text={contentSnippet} query={query} />
                          </p>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 text-center text-sm text-gray-500">
          No results found.
        </div>
      )}
    </div>
  );
}
