import { 
  ReactLogo, 
  NextjsLogo, 
  TypescriptLogo, 
  NodejsLogo, 
  PythonLogo, 
  PostgresLogo, 
  DockerLogo, 
  TailwindLogo, 
  SupabaseLogo, 
  RedisLogo, 
  AWSLogo, 
  MongoLogo, 
  GraphQLLogo, 
  ViteLogo, 
  GitLogo 
} from './TechLogos'
import './TechMarquee.css'

const techList = [
  { name: 'React 19', logo: ReactLogo },
  { name: 'Next.js', logo: NextjsLogo },
  { name: 'TypeScript', logo: TypescriptLogo },
  { name: 'Node.js', logo: NodejsLogo },
  { name: 'Python', logo: PythonLogo },
  { name: 'PostgreSQL', logo: PostgresLogo },
  { name: 'Tailwind CSS', logo: TailwindLogo },
  { name: 'Supabase', logo: SupabaseLogo },
  { name: 'Docker', logo: DockerLogo },
  { name: 'Redis', logo: RedisLogo },
  { name: 'AWS', logo: AWSLogo },
  { name: 'GraphQL', logo: GraphQLLogo },
  { name: 'MongoDB', logo: MongoLogo },
  { name: 'Vite', logo: ViteLogo },
  { name: 'Git', logo: GitLogo },
]

export default function TechMarquee() {
  return (
    <div className="tech-marquee-wrapper" aria-hidden="true">
      <div className="tech-marquee__track">
        {[...techList, ...techList].map((tech, index) => {
          const Logo = tech.logo
          return (
            <div key={`${tech.name}-${index}`} className="tech-marquee__item">
              <div className="tech-marquee__icon">
                <Logo size={22} />
              </div>
              <span className="tech-marquee__name">{tech.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
