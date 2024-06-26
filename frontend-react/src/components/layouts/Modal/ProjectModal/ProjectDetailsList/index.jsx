// Styles
import "./styles.scss";

const ProjectDetailsList = ({ details }) => {
	if (!details) return;

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
						{type?.map((type) => (
							<li
								className='project__category'
								key={type}
							>
								{type}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='project-detail-list__group'>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Industry</h4>
					<p>
						{industries?.map((industry) => (
							<span key={industry}>{industry}</span>
						))}
					</p>
				</div>
				<div className='project-detail-list__col'>
					<h4 className='project-detail-list__title'>Roles</h4>
					<ul className='project__categories'>
						{roles?.map((role) => (
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
						{collaboration?.map((colaborator) => (
							<li
								className='project__category'
								key={colaborator}
							>
								{colaborator}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsList;
