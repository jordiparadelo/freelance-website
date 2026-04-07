import { ProjectPage } from "@/components/pages";
import { getProjectById } from "@/lib/actions";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const selectedProject = await getProjectById(id);
  return <ProjectPage project={selectedProject} />;
};

export default Page;
