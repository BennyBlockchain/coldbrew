import useRankedPosts from "../../hooks/useRankedPosts";
import Post from "../Post";
import styng from "../../public/posts-tmp/avatar-black.png";

const Feed = (props) => {
  const { tag, sort } = props;
  const [{ posts, loading, error }] = useRankedPosts(sort, tag, "");

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post.post_id}
              name={post.author}
              username={post.author}
              avatar={styng}
              title={post.title}
              body={post.body}
            />
          );
        })}
    </>
  );
};

export default Feed;