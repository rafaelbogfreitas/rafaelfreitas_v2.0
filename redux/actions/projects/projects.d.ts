type Text = {
  ptBr: string
  eng: string
}

type Projects = {
  _id: string
  title: string
  href: string
  linkGithub: string
  alt: string
  extraLink: boolean
  imgSrc: string
  paragraphs: Text[]
  extraParagraph: Text[]
  technologies: string[]
}

type setProjects = {
  type: typeof SET_PROJECTS
  payload: Projects[]
}

type projectsDispatchActions = setProjects
