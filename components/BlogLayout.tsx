"use client";

import BlogHeader, { BlogHeaderProps } from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogSidebar, { BlogSidebarProps } from "./BlogSidebar";
import TableOfContents from "./TableOfContents";

type BlogLayoutProps = {
  header: BlogHeaderProps;
  contentHtml: string;
  sidebar?: BlogSidebarProps;
};

export default function BlogLayout({ header, contentHtml, sidebar }: BlogLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-10">

      {/* Header */}
      <BlogHeader {...header} />

      <div className="flex gap-10 mt-16">

        {/* Table of Contents */}
        <div className="hidden xl:block w-64">
          <TableOfContents />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <BlogContent html={contentHtml} />
        </div>

        {/* Sidebar */}
        <div className="hidden xl:block w-72">
          <BlogSidebar {...(sidebar || {})} />
        </div>
      </div>
    </div>
  );
}
