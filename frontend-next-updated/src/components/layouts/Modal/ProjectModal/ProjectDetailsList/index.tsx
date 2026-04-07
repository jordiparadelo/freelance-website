import type React from "react";
import "./styles.scss";
import type { ProjectDetails } from "@/lib/actions";

interface ProjectDetailsListProps {
  details: ProjectDetails;
}

const ProjectDetailsList: React.FC<ProjectDetailsListProps> = ({ details }) => {
  if (!details) return null;

  const { client, type, industries, year, roles, collaboration } = details;

  return (
    <div className="project-detail-list">
      <div className="project-detail-list__group">
        <div className="project-detail-list__col">
          <h4 className="project-detail-list__title">Client</h4>
          <p>{client}</p>
        </div>
        <div className="project-detail-list__col">
          <h4 className="project-detail-list__title">Type</h4>
          <ul>
            {type.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="project-detail-list__col">
          <h4 className="project-detail-list__title">Industries</h4>
          <ul>
            {industries.map((industry: string) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-detail-list__group">
        <div className="project-detail-list__col">
          <h4 className="project-detail-list__title">Year</h4>
          <p>{year}</p>
        </div>
        <div className="project-detail-list__col">
          <h4 className="project-detail-list__title">Roles</h4>
          <ul>
            {roles.map((role: string) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div className="project-detail-list__col">
          <h4 className="project-detail-list__title">Collaboration</h4>
          <ul>
            {collaboration.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsList;
