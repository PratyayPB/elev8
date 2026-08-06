import { Search, Filter, ArrowUpDown } from "lucide-react";

interface FiltersAndSearchProps {
  search: string;
  setSearch: (v: string) => void;
  statusFilter: string;
  setStatusFilter: (v: string) => void;
  difficultyFilter: string;
  setDifficultyFilter: (v: string) => void;
  sortOption: string;
  setSortOption: (v: string) => void;
}

export function FiltersAndSearch({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  difficultyFilter,
  setDifficultyFilter,
  sortOption,
  setSortOption,
}: FiltersAndSearchProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by role or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters & Sorting Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Status Filter */}
        <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-600 text-xs">
          <Filter className="w-3.5 h-3.5 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
          >
            <option value="ALL">All Statuses</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-600 text-xs">
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
          >
            <option value="ALL">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-1.5 bg-gray-50 dark:bg-gray-700/50 px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-600 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-transparent text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
          >
            <option value="NEWEST">Newest First</option>
            <option value="OLDEST">Oldest First</option>
            <option value="HIGHEST_SCORE">Highest Score</option>
            <option value="LOWEST_SCORE">Lowest Score</option>
          </select>
        </div>
      </div>
    </div>
  );
}
