import React from 'react';
import { SearchResult } from '../../../typings';

type PageProps = {
  params: {
    searchTerm: string
  }
}

const search = async (searchTerm: string) => {
  const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=8c44a7bd1af943a46dcf8c84f25d433fc87946fccb22d40eb5777e7e008a194a`);

  const data: SearchResult = await res.json();
  return data;
}

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <p className="text-gray-500 text-sm">You searched: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults;
