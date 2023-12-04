import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "../lib/types";
import { sanitize } from "isomorphic-dompurify";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      {post.metadata.hero?.imgix_url && (
        <Link href={`/blog/posts/${post.slug}`}>
          <Image
            width={2800}
            height={400}
            className="mb-5 h-[400px] w-full rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
            src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
            priority
            alt={post.title}
            placeholder="blur"
            blurDataURL={`${post.metadata.hero?.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
          />
        </Link>
      )}
      <h2 className="pb-3 text-xl font-semibold tracking-tight text-aboutUs">
        <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <div
        className="text-aboutUs"
        dangerouslySetInnerHTML={{
          __html: sanitize(post.metadata.teaser) ?? "",
        }}
      />
    </div>
  );
}
