'use client'

import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';


function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text"
        value={search}
        className="mb-5 p-2 border rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="px-5 ml-2 border rounded-md">
        Search
      </button>
    </form>
  )
}

export default Search;