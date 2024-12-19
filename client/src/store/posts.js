import { create } from "zustand";
import API_URL from "../constants/constant.js";

export const usePostStore = create((set) => ({
    posts: [],
    setPosts: (posts) => set({ posts }),

    // Fetch all posts
    getAllPosts: async () => {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        set({ posts: data.data });
    },

    // Fetch a single post by ID
    getPost: async (postId) => {
        const response = await fetch(`${API_URL}/posts/${postId}`);
        if (!response.ok) throw new Error("Failed to fetch post");
        const data = await response.json();
        return data;
    },

    // Create a new post
    createPost: async (newPost) => {
        if (!newPost.get("creator") || !newPost.get("title") || !newPost.get("message")) {
            return { error: "Please fill all the fields" };
        }

        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            body: newPost, // FormData handled automatically
        });

        if (!response.ok) throw new Error("Failed to create post");
        const data = await response.json();

        set((state) => ({ posts: [...state.posts, data] }));
        return { status: "success", message: "Memory Posted" };
    },

    // Update an existing post
    updatePost: async (postId, updatedPost) => {
        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json", // Correct header
            },
            body: JSON.stringify(updatedPost),
        });

        if (!response.ok) throw new Error("Failed to update post");
        const data = await response.json();

        set((state) => ({
            posts: state.posts.map((post) => (post._id === data._id ? data : post)),
        }));
        return { status: "success", message: "Post Updated successfully" };
    },

    // Delete a post
    deletePost: async (postId) => {
        const response = await fetch(`${API_URL}/posts/${postId}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete post");
        const data = await response.json();

        if (!data.success) {
            return { status: "failed", message: data.message };
        }

        set((state) => ({
            posts: state.posts.filter((post) => post._id !== postId),
        }));
        return { status: "success", message: "Post deleted successfully" };
    },

    // like a post
    likePost: async (postId) => {
        try {
          const response = await fetch(`${API_URL}/posts/${postId}/likePost`, {
            method: "PATCH",
          });
      
          if (!response.ok) throw new Error("Failed to like the post");
      
          const updatedPost = await response.json();
      
          set((state) => ({
            posts: state.posts.map((post) =>
              post._id === updatedPost._id ? updatedPost : post
            ),
          }));
      
          return { status: "success", message: "Post liked successfully" };
        } catch (error) {
          console.error("Error liking post:", error.message);
        }
      }
      
}));

export const uselikeCountStore = create((set) => ({
    likeCount: 0,
    incrementCount: () => set((state) => ({ likeCount: state.likeCount + 1 })),

}));

export const useAuthStore = create((set) => ({
    user:null,
    login: (userData) => set({ user: userData }),
    logout: () => set({ user: null })
}))
