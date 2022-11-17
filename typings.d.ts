export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type SearchResult = {
  organic_results: [
      {
          position: number;
          title: string;
          link: string;
          thumbnail: string;
          snippet: string;
      }
  ]
}