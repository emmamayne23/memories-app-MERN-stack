import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { usePostStore } from "../store/posts";

const Form = () => {
  const [newPost, setNewPost] = useState({
    creator: "",
    message: "",
    title: "",
    tags: "",
  });

  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setImage(acceptedFiles[0]);
    },
  });

  const { createPost } = usePostStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // creating a form data object to be able to upload the image file
      const formData = new FormData();

      // appending the fields
      formData.append("creator", newPost.creator);
      formData.append("title", newPost.title);
      formData.append("message", newPost.message);
      formData.append("tags", newPost.tags);

      // append the image as well
      formData.append("selectedFile", image);

      await createPost(formData); // send the form
      handleClear(); // clear fields
      console.log("Successfully added memory");
    } catch (error) {
      console.error("Error adding memory: ", error.message);
    }
  };

  const handleClear = () => {
    setNewPost({
      creator: "",
      message: "",
      title: "",
      tags: "",
    });
    setImage(null);
  };

  return (
    <>
      <div className="w-full max-w-xs mx-auto p-3 shadow bg-white shadow-black rounded-md text-black text-xs">
        <h1 className="text-xl font-bold mb-3 text-center text-gray-800">
          Create a Memory
        </h1>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Creator */}
          <div>
            <input
              type="text"
              name="creator"
              value={newPost.creator}
              onChange={(e) =>
                setNewPost({ ...newPost, creator: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Creator"
              required
            />
          </div>

          {/* Title */}
          <div>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Title"
              required
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={newPost.message}
              onChange={(e) =>
                setNewPost({ ...newPost, message: e.target.value })
              }
              rows="3"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div>
            <input
              type="text"
              name="tags"
              value={newPost.tags}
              onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tags (comma separated)"
            />
          </div>

          {/** Image File to choose */}
          <div
            {...getRootProps()}
            className="border bg-gray-100 hover:cursor-pointer hover:bg-gray-200 duration-300 rounded-md w-36 py-1 text-center"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the image here ...</p>
            ) : (
              <p>
                <i className="fa-regular fa-image mr-1"></i>Choose Image
              </p>
            )}
            {image && <img src={URL.createObjectURL(image)} />}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              SUBMIT
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
            >
              CLEAR
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
