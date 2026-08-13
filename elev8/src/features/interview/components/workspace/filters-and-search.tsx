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
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-dashboard-card p-4 rounded-xl border border-dashboard-cardBorder shadow-sm">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search by role or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-surface-muted border border-border-subtle rounded-xl text-sm font-sans text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-text-primary/10 focus:border-text-primary transition-all"
        />
      </div>

      {/* Filters & Sorting Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Status Filter */}
        <div className="flex items-center gap-1.5 bg-surface-muted px-3 py-1.5 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary">
          <Filter className="w-3.5 h-3.5 text-text-secondary" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-transparent focus:outline-none cursor-pointer pr-1"
          >
            <option value="ALL">All Statuses</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
            <option value="FAILED">Failed</option>
          </select>
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1.5 bg-surface-muted px-3 py-1.5 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary">
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="bg-transparent focus:outline-none cursor-pointer pr-1"
          >
            <option value="ALL">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-1.5 bg-surface-muted px-3 py-1.5 rounded-xl border border-border-subtle text-xs font-display font-semibold text-text-primary">
          <ArrowUpDown className="w-3.5 h-3.5 text-text-secondary" />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-transparent focus:outline-none cursor-pointer pr-1"
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
