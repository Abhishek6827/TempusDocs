
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface DocPost {
    slug: string;
    frontmatter: {
        title: string;
        description?: string;
        order?: number;
        [key: string]: any;
    };
    content: string;
}

export function getAllDocs(): DocPost[] {
    // Create content directory if it doesn't exist
    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    const allDocsData = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                frontmatter: data as DocPost['frontmatter'],
                content,
            };
        });

    // Sort posts by order
    return allDocsData.sort((a, b) => {
        return (a.frontmatter.order || 999) - (b.frontmatter.order || 999);
    });
}

export function getDocBySlug(slug: string): DocPost | null {
    try {
        const fullPath = path.join(contentDirectory, `${slug}.md`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            frontmatter: data as DocPost['frontmatter'],
            content,
        };
    } catch (err) {
        return null;
    }
}
