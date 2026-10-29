import { useState } from "react";

export function useResumeSearch(initialQuery = "") {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  return {
    searchQuery,
    setSearchQuery,
    clearSearch: () => setSearchQuery(""),
  };
}
