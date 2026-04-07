import { type ProjectDetails } from "@/lib/types";

import "./styles.scss";

interface ProjectDetailsListProps {
	details: ProjectDetails;
}

const ProjectDetailsList: React.FC<ProjectDetailsListProps> = ({ details }) => {
	if (!details) return null;

	const { client, type, industries, year, roles, collaboration } = details;

	return (
		<div className='project-detail-list'>
			<div className='project-detail-list__group'>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Year</h4>
					<p>{year}</p>
				</div>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Client</h4>
					<p>{client}</p>
				</div>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Project Type</h4>
					<ul className='project__categories'>
						{type?.map((typeItem: string) => (
							<li
								className='project__category'
								key={typeItem}
							>
								{typeItem}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='project-detail-list__group'>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Industry</h4>
					<p>
						{industries?.map((industry: string) => (
							<span key={industry}>{industry}</span>
						))}
					</p>
				</div>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Roles</h4>
					<ul className='project__categories'>
						{roles?.map((role: string) => (
							<li
								className='project__category'
								key={role}
							>
								{role}
							</li>
						))}
					</ul>
				</div>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Collaboration</h4>
					<ul className='project__categories'>
						{collaboration?.map((collaborator: string) => (
							<li
								className='project__category'
								key={collaborator}
							>
								{collaborator}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsList;
