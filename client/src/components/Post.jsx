/* eslint-disable react/prop-types */
import { usePostStore } from "../store/posts"; 
import API_URL from "../constants/constant";
// import { useState } from "react";

const Post = ({ post }) => {
  const { likePost } = usePostStore(); // Use the correct store

  // const [fullMessage, setFullMessage] = useState(false)

  // let message = post.message

  // if(!fullMessage) {
  //   message =  message.substring(0, 99) + '...'   
  // }

  return (
    <div className=" bg-white w-[250px] h-[290px] md:w-[240px] lg:w-[270px] text-black rounded-lg overflow-hidden shadow-lg shadow-current relative">
      {/* Image Section */}
      <div className="relative">
        <img
          src={`${API_URL}/${post.selectedFile}`}
          alt={post.title}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full p-3 bg-black bg-opacity-30 text-white flex justify-between">
          <span className="font-semibold">{post.creator}</span>
          <span className="text-xs">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Post Details */}
      <div className="p-3 pt-2">
        {/* Tags Section */}
        <div className=" flex flex-wrap gap-2 text-xs text-gray-600">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-gray-400 font-semibold">
              #{tag}
            </span>
          ))}
        </div>

        {/* Title and Message */}
        <h2 className="text-base font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4 text-xs">{post.message}</p>
        {/**<button onClick={() => setFullMessage(prevState => !prevState)} className="text-blue-600 hover:text-blue-400 underline text-xs">{fullMessage ? 'less' : 'more'}</button> */}

        {/* Like Button */}
        <div className="flex justify-between items-center absolute bottom-3">
          <button
            onClick={() => likePost(post._id)} // Trigger like action
            className="text-blue-500 font-semibold rounded"
          >
          <i className="fa-solid fa-thumbs-up"></i>{" "}
            
          </button>
          <span className="text-blue-500 font-semibold ml-1">{post.likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
