import { usePostStore } from "../store/posts";
import { useEffect, useState } from "react";

import Post from "./Post";
import Loader from "./Loader";

const Posts = () => {
  const { getAllPosts, posts } = usePostStore();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        await getAllPosts()
      } catch (error) {
        console.error("Could not fetch Posts", error.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [getAllPosts]);
  return (
    <>
      <div className="mx-auto w-full">
        <div>
          <div className=" md:grid-cols-2 grid gap-2 xl:grid-cols-3 mx-auto">
            {isLoading ? (
              <Loader />
            ) : (
              posts.map((post) => <Post key={post._id} post={post} />)
            )}
            {/** {posts.length === 0 && (
              <div className="mt-10 mx-auto">No Posts available</div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
