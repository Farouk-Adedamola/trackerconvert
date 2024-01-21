"use client";
import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Tableoutput from "./Tableoutput";
import SortHelper from "./SortHelper";
import { format } from "date-fns";

const getLocalStorage = () => {
  let projects = localStorage.getItem("projects");
  if (projects) {
    return JSON.parse(projects);
  } else {
    return [];
  }
};

// Normally i dont have to set state for the dueDate it should work without controlling it

const Layout = () => {
  const [projects, setProjects] = useState(getLocalStorage());
  const [formData, setFormData] = useState({
    projectName: "",
    dateAdded: format(new Date(), "yyyy-MM-dd"),
    dueDate: "",
    priority: "",
    niche: "",
    storyPoint: "",
  });
  const [editingProject, setEditingProject] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [serialNumber, setSerialNumber] = useState(generateSerialNumber());

  function generateSerialNumber() {
    const sN = projects.length + 1;
    return sN;
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      (formData.projectName,
      formData.dateAdded,
      formData.dateDue,
      formData.priority,
      formData.storyPoint,
      formData.niche)
    ) {
      console.log({ ...formData });

      setSerialNumber(serialNumber);

      const newProject = {
        ...formData,
        id: new Date().getTime().toString(),
      };
      setProjects([...projects, newProject]);
    }
    if (editingProject) {
      const updatedProjects = projects.map((project) =>
        project.id === editingProject.id
          ? { ...formData, id: project.id }
          : project
      );
      setProjects(updatedProjects);
      setEditingProject(null);
      setIsEditDialogOpen(false);
    } else {
      setProjects([...projects, { ...formData, id: projects.length + 1 }]);
    }

    setFormData({
      projectName: "",
      dateAdded: format(new Date(), "yyyy-MM-dd"),
      dueDate: "",
      priority: "",
      niche: "",
      storyPoint: "",
    });
    console.log(format(new Date(), "yyyy-MM-dd"));
  };

  const handleDelete = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingProject(project);
    setIsEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditingProject(editingProject);
    setIsEditDialogOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <>
      <h1 className="text-white font-bold text-3xl text-center mb-4 underline">
        Project Tracker
      </h1>

      <FormInput
        handleChange={handleChange}
        handleFormSubmit={handleFormSubmit}
        formData={formData}
        editingProject={editingProject}
        // handleDateChange={handleDateChange}
      />
      <SortHelper
        setProjects={setProjects}
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        projects={projects}
      />
      <Tableoutput
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditDialogClose={handleEditDialogClose}
        projects={projects}
        serialNumber={serialNumber}
        isEditDialogOpen={isEditDialogOpen}
        formData={formData}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default Layout;
