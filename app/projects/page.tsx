"use client"
import ProjectsHero from "@/components/ProjectsHero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid"
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import CodeBlock from "@/components/ui/CodeBlock";

export default function Projects() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems = {navItems} />
        <ProjectsHero/>
        <CodeBlock 
          title="1. Interactive Hero Section"
          text={`const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // ... more state declarations

  const playWhooshSound = () => {
    if (whooshSoundRef.current && window.isAudioEnabled) {
      whooshSoundRef.current.currentTime = 0;
      const playPromise = whooshSoundRef.current.play();
      // ... sound handling logic
    }
  };

  // ... more implementation details
};
`}
        >
          <ul className="list-disc ml-4 mt-4 text-gray-300 space-y-2">
            <li>Implemented a dynamic video switching system with smooth transitions</li>
            <li>Created custom loading states and mobile-responsive preview functionality</li>
          </ul>       
        </CodeBlock>
        <CodeBlock 
          title="2. Advanced Animation System"
          text={`const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse'
        }
      });
      // ... animation implementation
    });
  }, []);
}`}
        >
        </CodeBlock>
        <CodeBlock 
          title="3. Interactive Features Gallery"
          text={`const BentoTilt = ({children, className = ''}) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handelMouseMove = (e) => {
    if(!itemRef.current) return;
    const {left, top, width, height} = itemRef.current.getBoundingClientRect();
    // ... tilt calculation logic
  }

  // ... more implementation details
}`}
        >
        </CodeBlock>
        <Grid />
        <Footer />
      </div>
    </main>
  );
}