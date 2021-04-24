import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationState } from '../redux/store'
import { increaseCounter, decreaseCounter } from '../redux/actions/counter'

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

type HomeProps = {
  projects: Projects[]
}

const Home = ({ projects }: HomeProps) => {
  const dispatch = useDispatch()
  const { count } = useSelector((state: ApplicationState) => ({
    count: state.count,
    projects: state.projects,
  }))

  const increaseCount = (): void => {
    dispatch(increaseCounter())
  }

  const decreaseCount = (): void => {
    dispatch(decreaseCounter())
  }

  return (
    <div>
      <Head>
        <title>Rafael</title>
      </Head>
      <h1>{count.count}</h1>
      <button onClick={increaseCount}>INCREASE</button>
      <button onClick={decreaseCount}>DECREASE</button>
      {projects[0]?.technologies.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
      <img src="/images/rafael.svg" alt="Rafael's cartoon" />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch('http://localhost:3000/api/projects')
  const projects: Projects[] = await data.json()
  return {
    props: {
      projects: projects ?? [],
    },
    revalidate: 60 * 60 * 24 * 30, //month
  }
}

export default Home
