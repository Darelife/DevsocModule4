import { useState, useEffect } from 'react';
import HomePosts from '../components/HomePosts';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4030/api/posts');
        setPosts(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts: {error.message}</div>;

   return (
    <div className="px-8 md:px-[200px]">
      {posts.map(post => (
        post && (
          <HomePosts 
            key={post.id} // Assuming each post has a unique id
            title={post.title} 
            author={post.username} 
            date={post.createdAt.substring(0,10)} 
            time={post.createdAt.substring(11,19)} 
            description={post.description} 
            imageUrl1={post.photo} 
            imageUrl2={post.photo} 
          />
        )
      ))}
    </div>
  );
};

export default Home;