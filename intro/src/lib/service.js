import axios from "axios";

const getData = async (userId) => {
  if (typeof userId !== "number") {
    throw new Error("Parameter 'userId' must be a number.");
  }

  try {
    // Kullanıcı bilgilerini alıyoruz
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = userResponse.data;

    // Kullanıcının tüm post'larını alıyoruz
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = postsResponse.data;

    // id'si 1 olan post'u filtreliyoruz
    const filteredPost = posts.find(post => post.id === 1);

    // Post'u istenen formata göre düzenliyoruz
    const formattedPosts = filteredPost ? [filteredPost] : [];

    // İstenen formatta kullanıcı bilgisi ve post'u birleştiriyoruz
    return {
      ...user,
      posts: formattedPosts
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export default getData;
