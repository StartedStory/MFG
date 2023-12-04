import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowLeft from "../../../../components/ArrowLeft";
import { getPost } from "../../../../lib/cosmic";
import { sanitize } from "isomorphic-dompurify";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost({ params });
  return {
    title: `${post.title} | Simple Next 13 Blog`,
  };
}

export default async ({ params }: { params: { slug: string } }) => {
  const post = await getPost({ params });

  return (
    <>
      {post && post.metadata.hero?.imgix_url && (
        <Image
          width={1400}
          height={720}
          className="mb-5 h-[720px] w-full bg-no-repeat object-cover object-center"
          src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
          priority
          alt={post.title}
          placeholder="blur"
          blurDataURL={`${post.metadata.hero?.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
        />
      )}
      <main className="mx-auto flex flex-col justify-center">
        <div className="mx-auto flex w-full flex-col items-start justify-center px-4 md:flex-row">
          <div className="mt-5 flex justify-start pb-5 md:justify-center md:pb-0 md:pr-20">
            <Link
              href="/blog"
              className="rounded-full border border-zinc-100 bg-white p-2 text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4">
            <h2>
              {!post && <div className="text-center">Post Not found</div>}
              {post && (
                <Link href={`/posts/${post.slug}`}>
                  <div className="py-5 text-2xl font-semibold tracking-tight text-buttonColor">
                    {post.title}
                  </div>
                </Link>
              )}
            </h2>
            {post && (
              <>
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitize(post.metadata.content) ?? "",
                  }}
                ></div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export const revalidate = 60;
