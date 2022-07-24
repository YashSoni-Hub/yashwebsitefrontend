import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import ScrollToTop from "../scrollToTop/scrollToTop";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  //   const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    // await dispatch(deleteProject(id));
    // dispatch(getUser());
  };

  return (
    <>
      <ScrollToTop />
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const projects = [1, 2];

const Projects = () => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id="1"
            key="1"
            url="https://th.bing.com/th/id/OIP.371_8W1ckdPJ3PTccxEm8AHaE8?pid=ImgDet&rs=1"
            projectImage="https://th.bing.com/th/id/OIP.371_8W1ckdPJ3PTccxEm8AHaE8?pid=ImgDet&rs=1"
            projectTitle="Portfolio Website"
            description="It is a Full Fleged Project"
            technologies="React Nodejs Mongodb "
          />
        ))}
      </div>

      {/* <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography> */}
    </div>
  );
};

export default Projects;
