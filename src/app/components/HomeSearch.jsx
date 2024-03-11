'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
export default function HomeSearch() {
  const [input, setInput] = useState('');
  const [loadingRandomSearch, setLoadingRandomSearch] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };
  const handleRandomSearch = async (e) => {
    setLoadingRandomSearch(true);
    try {
      const response = await fetch(
        'https://random-word-api.herokuapp.com/word'
      );
      const data = await response.json();
      if (!data || !data[0]) return;
      router.push(`/search/web?searchTerm=${data[0]}`);
    } catch (error) {
      console.error('Error fetching random word:', error);
    } finally {
      setLoadingRandomSearch(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
        <input
          type='text'
          className='flex-grow focus:outline-none'
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className='text-xl text-gray-500 cursor-pointer' />
      </form>
      <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4'>
        <button
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
          onClick={handleSubmit}
        >
          Google Search
        </button>
        <button
          disabled={loadingRandomSearch}
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm disabled:cursor-not-allowed'
          onClick={handleRandomSearch}
        >
          {loadingRandomSearch ? 'Loading...' : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
}
