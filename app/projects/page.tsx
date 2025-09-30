"use client"
import ProjectsHero from "@/components/ProjectsHero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import CodeBlock from "@/components/ui/CodeBlock";
import Card from "@/components/ui/Card";


export default function Projects() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <ProjectsHero />
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
          <ul className="list-disc ml-4 mt-4 mb-6 text-gray-300 space-y-2">
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
          containerClassName="mb-8"
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
          containerClassName="mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple mb-6 mt-8">Technical Challenges and Solutions</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Video Performance</h3>
          <Card
            size="lg"
            badge="Technical"
          >
            <div>
              <h4 className="font-semibold text-white mb-2">Challenge:</h4>
              <p className="text-gray-300 mb-4">Managing multiple video elements while maintaining smooth performance.</p>
              <h4 className="font-semibold text-white mb-2">Solution:</h4>
              <p className="text-gray-300">Implemented a custom video loading system with preloading and efficient state management.</p>
            </div>
          </Card>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-6">2. Animation Performance</h3>
          <Card
            size="lg"
            badge="Technical"
          >
            <div>
              <h4 className="font-semibold text-white mb-2">Challenge:</h4>
              <p className="text-gray-300 mb-4">Complex animations causing performance issues on mobile devices.</p>
              <h4 className="font-semibold text-white mb-2">Solution:</h4>
              <ul>
                <li>• Implemented throttling for animation calculations.</li>
                <li>• Used GSAP's performance optimization features.</li>
                <li>• Added device-specific animation adjustments.</li>
              </ul>
            </div>
          </Card>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple mb-6 mt-8">Key Things I Learned</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card
              variant="glass"
              size="md"
              title="Animation Optimization"
              borderRadius="xl"
            >
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Mastered GSAP for complex animations</li>
                <li>• Learned performance optimization techniques</li>
                <li>• Understood hardware acceleration importance</li>
              </ul>
            </Card>
            
            <Card
              variant="glass"
              size="md"
              title="React Best Practices"
              borderRadius="xl"
            >
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Improved component architecture knowledge</li>
                <li>• Mastered hooks implementation</li>
                <li>• Enhanced performance optimization</li>
              </ul>
            </Card>
            
            <Card
              variant="glass"
              size="md"
              title="Modern Web Development"
              borderRadius="xl"
            >
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Gained experience with Vite</li>
                <li>• Improved responsive design understanding</li>
                <li>• Enhanced web audio API knowledge</li>
              </ul>
            </Card>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple mb-6 mt-8">Impact and Results</h2>
          <ul>
            <li>• Achieved smooth 60fps animations across devices</li>
            <li>• Implemented responsive design across all screen sizes</li>
            <li>• Created an engaging user experience</li>
            <li>• Successfully integrated complex animations with GSAP</li>
          </ul>
        </CodeBlock>
        <Footer />
      </div>
    </main>
  );
}