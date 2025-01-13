export interface SampleProject {
    id: number,
    name: string,
}

export interface deleteProjectFunction {
    (id: number): void, 
}

export interface ProjectCardProps {
    projects: SampleProject[],
    deleteProject: deleteProjectFunction
}