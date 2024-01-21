// import React from 'react'
"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const Tableoutput = ({
  handleChange,
  handleDelete,
  handleEdit,
  handleFormSubmit,
  projects,
  isEditDialogOpen,
  handleEditDialogClose,
  formData,
  serialNumber,
}) => {
  return (
    <>
      <div className="  container m-auto">
        <TableContainer component={Card}>
          <Table>
            <TableHead className="w-full">
              <TableRow className="bg-green-500">
                <TableCell className="cell">SN</TableCell>
                <TableCell className="cell">Project Name</TableCell>
                <TableCell className="cell">Date Added</TableCell>
                <TableCell className="cell">Due Date</TableCell>
                <TableCell className="cell">Priority</TableCell>
                <TableCell className="cell">Niche</TableCell>
                <TableCell className="cell">Story Point</TableCell>
                <TableCell className="cell">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects?.map((project) => (
                <TableRow
                  key={project.id}
                  className="border-b-2 border-solid border-green-700"
                >
                  <TableCell className="cell-map-items">
                    {serialNumber++}
                  </TableCell>
                  <TableCell className="cell-map-items">
                    {project.projectName}
                  </TableCell>
                  <TableCell className="cell-map-items">
                    {project.dateAdded}
                  </TableCell>
                  <TableCell className="cell-map-items">
                    {project.dueDate}
                  </TableCell>
                  <TableCell className="cell-map-items">
                    {project.priority}
                  </TableCell>
                  <TableCell className="cell-map-items">
                    {project.niche}
                  </TableCell>
                  <TableCell className="cell-map-items">
                    {project.storyPoint}
                  </TableCell>
                  <TableCell className="font-bold text-green-700 text-sm capitalize flex justify-between gap-4 sm:justify-center items-center">
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="cell-btn bg-red-700  hover:bg-red-500"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(project)}
                      className="cell-btn bg-green-700  hover:bg-green-500"
                    >
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog
          open={isEditDialogOpen}
          onClose={handleEditDialogClose}
          className="w-full"
        >
          <div className="bg-green-600 pt-4">
            <form onSubmit={handleFormSubmit}>
              <DialogTitle className="text-black font-bold text-2xl text-center mb-2">
                Edit Selected Project
              </DialogTitle>
              <DialogContent>
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
                  <label
                    htmlFor="name"
                    className="text-white text-sm font-bold"
                  >
                    ProjectName :
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    onChange={handleChange}
                    value={formData.projectName}
                    className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
                  />
                  <label
                    htmlFor="date"
                    className="text-white text-sm font-bold"
                  >
                    Date Added :
                  </label>
                  <input
                    type="date"
                    name="dateAdded"
                    disabled
                    id="dateAdded"
                    onChange={handleChange}
                    value={formData.dateAdded}
                    className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
                  />
                  <label
                    htmlFor="date"
                    className="text-white text-sm font-bold"
                  >
                    Date Due :
                  </label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    onChange={handleChange}
                    value={formData.dueDate}
                    className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
                  />
                  <label
                    htmlFor="storypoint"
                    className="text-white text-sm font-bold"
                  >
                    {" "}
                    storypoint :
                  </label>
                  <input
                    type="number"
                    name="storyPoint"
                    min={1}
                    max={10}
                    placeholder="1-5"
                    id="storypoint"
                    onChange={handleChange}
                    value={formData.storyPoint}
                    className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
                  />
                  <label
                    htmlFor="niche"
                    className="text-white text-sm font-bold"
                  >
                    Niche :
                  </label>
                  <input
                    type="text"
                    name="niche"
                    id="niche"
                    onChange={handleChange}
                    value={formData.niche}
                    className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
                  />
                  <label
                    htmlFor="Priority"
                    className="text-white text-sm font-bold"
                  >
                    Priority :
                  </label>
                  <input
                    type="text"
                    name="priority"
                    id="priority"
                    onChange={handleChange}
                    value={formData.priority}
                    className="w-full sm:w-full outline-none px-2 py-1 rounded-sm text-black-500 font-bold"
                  />
                </div>
              </DialogContent>
              <DialogActions className="bg-white border-t-2 border-red-500">
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={handleEditDialogClose}
                    className="bg-red-500 p-2 rounded-[8px] text-white font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 p-2 rounded-[8px] text-white font-bold"
                  >
                    Update
                  </button>
                </div>
              </DialogActions>
            </form>
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default Tableoutput;
