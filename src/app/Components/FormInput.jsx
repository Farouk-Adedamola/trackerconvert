// import React from 'react'
"use client";
import Tooltip from "@mui/material/Tooltip";

const FormInput = ({
  handleChange,
  handleFormSubmit,
  formData,
  editingProject,
}) => {
  return (
    <>
      <div className="container mx-auto  ">
        <form onSubmit={handleFormSubmit} className="mb-8 p-4">
          <div className="grid grid-cols-2 gap-2 w-full sm:grid-cols-4 lg:grid-cols-6 mb-8">
            <label htmlFor="name" className="label">
              ProjectName :
            </label>
            <Tooltip title="Add Project Name" followCursor>
              <input
                type="text"
                name="projectName"
                id="projectName"
                placeholder="Project Name"
                onChange={handleChange}
                value={formData.projectName}
                className="input"
              />
            </Tooltip>
            <label htmlFor="date" className="label">
              Date Added :
            </label>
            <input
              type="date"
              name="dateAdded"
              id="dateAdded"
              disabled
              onChange={handleChange}
              value={formData.dateAdded}
              className="input"
            />
            <label htmlFor="date" className="label">
              Date Due :
            </label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              onChange={handleChange}
              value={formData.dueDate}
              className="input"
            />
            <label htmlFor="storypoint" className="label">
              {" "}
              storypoint :
            </label>
            <input
              type="number"
              name="storyPoint"
              id="storypoint"
              min={1}
              max={5}
              placeholder="1-10"
              onChange={handleChange}
              value={formData.storyPoint}
              className="input"
            />
            <label htmlFor="niche" className="label">
              Niche :
            </label>
            <Tooltip title="Add Niche" followCursor>
              <input
                type="text"
                name="niche"
                id="niche"
                onChange={handleChange}
                placeholder="Niche"
                value={formData.niche}
                className="input"
              />
            </Tooltip>
            <label htmlFor="Priority" className="label">
              Priority :
            </label>
            <Tooltip title="high, medium, low" followCursor>
              <input
                type="text"
                name="priority"
                id="priority"
                placeholder="Priority"
                onChange={handleChange}
                value={formData.priority}
                className="input"
              />
            </Tooltip>
          </div>
          <button
            type="submit"
            className="my-4 bg-green-600 text-white font-bold p-3 rounded-[8px] hover:bg-green-400 hover:text-[#555] hover:transition hover:delay-75 hover:duration-800"
          >
            {editingProject ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>
    </>
  );
};

export default FormInput;
