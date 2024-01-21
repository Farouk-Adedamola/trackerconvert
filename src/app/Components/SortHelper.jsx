const SortHelper = ({ setProjects, setSortCriteria, projects }) => {
  const handleSort = (criteria) => {
    const sortedProjects = [...projects];
    sortedProjects.sort((a, b) => {
      if (criteria === "dateAdded" || criteria === "dueDate") {
        return new Date(a[criteria]) - new Date(b[criteria]);
      } else if (criteria === "storyPoint") {
        return a[criteria] - b[criteria];
      }

      return 0;
    });

    setProjects(sortedProjects);
    setSortCriteria(criteria);
  };

  return (
    <>
      <div className="m-4 flex justify-center items-center gap-4">
        <button
          disabled
          className="text-green-300 sort-btn"
          onClick={() => handleSort("dateAdded")}
        >
          Sort by Date Added
        </button>
        <button
          className="text-red-500 sort-btn"
          onClick={() => handleSort("dueDate")}
        >
          Sort by Due Date
        </button>
        <button
          className="text-black-500 sort-btn"
          onClick={() => handleSort("storyPoint")}
        >
          Sort by Story Point
        </button>
      </div>
    </>
  );
};

export default SortHelper;
