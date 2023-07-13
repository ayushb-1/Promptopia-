'use client';
import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'
const PromptCardList = ({ data, handleTagClick }) => {
  if (!Array.isArray(data) || data.length === 0) {
    // If data is not an array or is an empty array, return null or some fallback content.
    return null;
  }
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => { 
  const [searchtText, setSearchText] = useState('');

  const [posts,setPosts] = useState([]);
  const handleSearchChange=(e)=>{

  }

  useEffect(()=>{
    const fetchPosts=async()=>{
      const response = await fetch('api/prompt');
      const data = await response.json();

      setPosts(data);
    }
    fetchPosts();
  },[]);
  console.log(posts);
  return (
    <section className='feed'>
      <form className='relative w-full flex-centre'>
        <input
        type="text"
        placeholder='Search for a tag or username'
        required
        className='search_input peer'
        onChange={handleSearchChange}
        value={searchtText}
        />

      </form>

      <PromptCardList
      data={posts}
      handleTagClick={()=>{}}
      
      />
    </section>

  )
}

export default Feed
