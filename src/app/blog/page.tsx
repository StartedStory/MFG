import Header from "../components/header";
import Footer from "../components/footer";
import PostCard from "../../components/PostCard";
import { getAllPosts } from "../../lib/cosmic";
import { Post } from "@/lib/types";

export async function Page() {
  const posts: Post[] = await getAllPosts();

  return (
    <main className="mt-20 mb-52 lg:mx-0 w-full flex flex-col lg:flex lg:flex-row justify-center items-center space-y-10 lg:space-y-0">
      {!posts && "You must add at least one Post to your Bucket"}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id} className="px-20 sm:px-0 w-full sm:w-2/3 lg:w-1/4 mx-auto">
              <PostCard post={post} />
            </div>
          );
        })}
    </main>
  );
}

export const revalidate = 60;

const News = () => {
  return (
    <div>
      <Header />
      <Page />
      <Footer />
    </div>
  );
};

export default News;
