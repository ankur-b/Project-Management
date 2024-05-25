import { stateType } from "../App";
import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}: {
  onStartAddProject: () => void;
  onSelectProject: (id:number) => void;
  projects: stateType["projects"];
  selectedProjectId: number | undefined | null;
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button onClick={()=>onSelectProject(project.id)} className={cssClasses}>
                <p>{project.title as unknown as string}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
