"use client";
import React from 'react';

import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Hash, ChevronRight, Star, Sparkles, AlertCircle, Info, CheckCircle2 } from 'lucide-react';


import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';


import Highlight from '@/components/Highlight';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface DocRendererProps {
  content: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DocRenderer({ content }: DocRendererProps) {
  const [q, setQ] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setQ(params.get('q') || '');
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-none"
    >
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <motion.div variants={fadeInUp} className="group flex items-center gap-3 mt-10 mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300" {...props as any} />
            </motion.div>
          ),
          h2: ({ node, ...props }) => (
             <motion.div variants={fadeInUp} className="group flex items-center gap-2 mt-12 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
                <Hash className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100" {...props as any}>
                  {props.children}
                </h2>
             </motion.div>
          ),
          h3: ({ node, ...props }) => (
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mt-8 mb-3">
              <ChevronRight className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200" {...props as any}>
                {props.children}
              </h3>
            </motion.div>
          ),
          p: ({ node, children, ...props }) => (
            <motion.p variants={fadeInUp} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6" {...props as any}>
               {React.Children.map(children, child => 
                   typeof child === 'string' ? <Highlight text={child} query={q} /> : child
               )}
            </motion.p>
          ),
          ul: ({ node, ...props }) => (
            <motion.ul variants={fadeInUp} className="my-6 space-y-2" {...props as any} />
          ),
          li: ({ node, children, ...props }) => (
            <li className="flex items-start gap-2" {...props as any}>
                <div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">
                   {React.Children.map(children, child => 
                       typeof child === 'string' ? <Highlight text={child} query={q} /> : child
                   )}
                </span>
            </li>
          ),
          code: ({ node, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match && !className;
            if (isInline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400 border border-gray-200 dark:border-gray-700" {...props as any}>
                  {children}
                </code>
              );
            }
            return (
              <motion.div variants={fadeInUp} className="rounded-xl overflow-hidden my-6 bg-[#0d1117] border border-gray-800 shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-800 text-xs text-gray-400">
                   <span>{match?.[1] || 'text'}</span>
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                   </div>
                </div>
                <div className="p-4 overflow-x-auto">
                    <code className={cn("text-sm font-mono text-gray-300", className)} {...props as any}>
                        {children}
                    </code>
                </div>
              </motion.div>
            );
          },
          pre: ({ node, ...props }) => <pre className="bg-transparent p-0 m-0" {...props as any} />,
          a: ({ node, ...props }) => (
            <a className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-500 transition-colors font-medium decoration-blue-500/30 hover:decoration-blue-500" {...props as any} />
          ),
           blockquote: ({ node, ...props }) => (
            <motion.blockquote variants={fadeInUp} className="border-l-4 border-blue-500 pl-4 py-1 my-6 bg-blue-50 dark:bg-blue-900/10 rounded-r-lg italic text-gray-700 dark:text-gray-300" {...props as any} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
}
