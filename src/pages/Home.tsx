import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { NoiseBackground } from '@/components/ui/noise-background';
import { projectsData } from '@/data/projects';
import {
    Boxes,
    Brain,
    Box,
    Layers,
    Code2,
    Braces,
    ArrowRight,
    Mail,
    Sparkles,
    ChevronRight
} from 'lucide-react';

// Animated heading component: mixed typography, subtle size/weight variation, retained per-letter animation
const AnimatedHeading = ({ text, className, variants }: { text: string; className?: string; variants?: any }) => {
    const words = text.split(' ');

    const letter = {
        hidden: { opacity: 0, y: 10, rotateX: 12, scale: 0.98 },
        visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.26, ease: [0.22, 0.8, 0.36, 1] as any } }
    };

    const wordContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.02, delayChildren: 0.02 } }
    };

    const styleForWord = (w: string, i: number) => {
        if (w === 'XR') return 'bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-extrabold tracking-normal';
        if (w === '3D') return 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-extrabold tracking-normal';

        // Give 'Systems' and 'Meets' a more professional serif treatment
        if (w === 'Systems') return 'font-serif font-semibold tracking-tight text-[1.02em]';
        if (w === 'Meets') return 'font-serif font-medium tracking-tight text-[1.02em]';

        // Rotate through a small set of complementary typographic styles
        const patterns = [
            'font-sans font-semibold tracking-tight',
            'font-serif italic tracking-wide',
            'font-mono font-medium tracking-tight',
            'font-light tracking-wide'
        ];

        return patterns[i % patterns.length];
    };

    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants ?? wordContainer}
            className={className}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {words.map((w, wi) => {
                const isSpecial = w === 'XR' || w === '3D';
                const wordStyle = styleForWord(w, wi);

                return (
                    <motion.span key={wi} variants={wordContainer} className="inline-block mr-3" aria-hidden={false}>
                        {isSpecial ? (
                            <motion.span
                                className={`${wordStyle} inline-block leading-none bg-clip-text text-transparent`}
                                variants={letter}
                            >
                                {w}
                            </motion.span>
                        ) : (
                            <span className={`${wordStyle} inline-block leading-none`} aria-hidden>
                                {w.split('').map((ch, ci) => (
                                    <motion.span
                                        key={ci}
                                        className="inline-block transform-gpu will-change-transform"
                                        variants={letter}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {ch}
                                    </motion.span>
                                ))}
                            </span>
                        )}
                        {wi < words.length - 1 ? ' ' : ''}
                    </motion.span>
                );
            })}
        </motion.h1>
    );
};

const Home = () => {
    const navigate = useNavigate();
    
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Capability animations: staggered entrance + punchy item animation
    const capabilityContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
    };

    const capabilityItem = {
        hidden: { opacity: 0, y: 28, rotateX: 6, scale: 0.96 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: { duration: 0.48, ease: [0.22, 0.8, 0.36, 1] as any }
        }
    };

    // Featured projects card animation: springy entrance + image reveal
    const projectCard = {
        hidden: { opacity: 0, y: 18, scale: 0.985, rotateX: 6 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: { type: 'spring' as const, stiffness: 260, damping: 26 }
        }
    };

    const projectImage = {
        hidden: { scale: 1.06, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as any } }
    };

    const capabilities = [
        {
            icon: <Boxes className="w-10 h-10" />,
            title: "XR Applications",
            description: "WebXR systems, Unity XR platforms, and spatial computing solutions"
        },
        {
            icon: <Brain className="w-10 h-10" />,
            title: "XR Systems Engineering",
            description: "Simulation architectures and data-driven logic for real-time XR systems"
        },
        {
            icon: <Box className="w-10 h-10" />,
            title: "3D Design Literacy",
            description: "Understanding meshes, materials, animations, and real-time performance constraints"
        },
        {
            icon: <Layers className="w-10 h-10" />,
            title: "Architecture Thinking",
            description: "System design, component orchestration, and scalable platform engineering"
        }
    ];

    const capabilityImages = [
        '/XR_001.jpeg',
        '/XR_002.jpg',
        '/XR_003.jpeg',
        '/XR_004.jpg'
    ];

    // Map featured projects from centralized data
    const featuredProjects = [
        projectsData.find(p => p.id === 'xr-training-platform-unity'),
        projectsData.find(p => p.id === 'xr-training-foundation-webxr'),
        projectsData.find(p => p.id === 'procedural-generator'),
    ].filter(Boolean);

    const techStack = [
        { name: "Unity", icon: <Box className="w-5 h-5" /> },
        { name: "Three.js", icon: <Code2 className="w-5 h-5" /> },
        { name: "React", icon: <Braces className="w-5 h-5" /> },
        { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
        { name: "WebXR", icon: <Boxes className="w-5 h-5" /> },
        { name: "C#", icon: <Braces className="w-5 h-5" /> }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-12 md:py-32 pb-8 md:pb-16">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/25 via-primary/15 to-primary/5 dark:from-primary/30 dark:via-primary/20 dark:to-primary/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 dark:from-secondary/15 dark:via-transparent dark:to-accent/15" />

                {/* Grid / Dot Background (subtle) */}
                <div
                    className={cn(
                        'absolute inset-0',
                        '[background-size:20px_20px]',
                        "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                        "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                    )}
                />

                {/* Radial mask to softly fade the grid toward edges */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

                {/* Smooth fade to next section */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />

                <motion.div
                    className="container mx-auto px-4 relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">XR Systems Engineer</span>
                        </motion.div>

                        <AnimatedHeading
                            text="Building XR Systems Where Engineering Meets 3D Thinking"
                            variants={staggerContainer}
                            className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.18] md:leading-[1.05] tracking-wide md:tracking-tight"
                        />

                        <motion.div
                            variants={fadeInUp}
                            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                        >
                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-row items-center justify-center gap-4 mb-6 text-sm text-muted-foreground/90"
                            >
                                <span className="py-2 px-3 uppercase tracking-wider border-r border-muted-foreground/10">WebXR</span>
                                <span className="py-2 px-3 uppercase tracking-wider border-r border-muted-foreground/10">Unity XR</span>
                                <span className="py-2 px-3 uppercase tracking-wider">XR Platforms</span>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <Link to="/projects">
                                <NoiseBackground
                                    containerClassName="w-fit p-2 rounded-full"
                                    gradientColors={[
                                        'rgb(255, 100, 150)',
                                        'rgb(100, 150, 255)',
                                        'rgb(255, 200, 100)'
                                    ]}
                                >
                                    <button className="h-full w-full flex items-center justify-center gap-2 cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                                        <span>View Projects</span>
                                        <ChevronRight className="w-5 h-5 flex-shrink-0" />
                                    </button>
                                </NoiseBackground>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="link" className="text-base px-5 flex items-center gap-2 justify-center">
                                    <Mail className="w-5 h-5 flex-shrink-0" />
                                    <span>Contact</span>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Capability Overview */}
            <section className="pt-8 md:pt-12 pb-8 md:pb-12">
                <div className="container mx-auto px-4">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={capabilityContainer}
                        className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto snap-x snap-mandatory px-4 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                variants={capabilityItem}
                                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                                className="snap-start flex-shrink-0 w-[72%] sm:w-auto"
                            >
                                <Card
                                    className="p-4 sm:p-6 h-full flex flex-col relative overflow-hidden rounded-3xl"
                                    style={{ aspectRatio: '9 / 16' }}
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 z-0"
                                        style={{
                                            backgroundImage: `url(${capabilityImages[index]})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />

                                    {/* Overlay for readability (subtle top, stronger bottom) */}
                                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 to-black/70 dark:to-black/70" />

                                    {/* Content: icon at top (centered), text anchored to bottom and centered */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="pt-2 text-start pb-2">
                                            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-1 tracking-tight text-white">{capability.title}</h3>
                                            <p className="text-base md:text-lg text-white/90 leading-relaxed">{capability.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Left-aligned link button to About page */}
                    <div className="container mx-auto mt-6">
                        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto">
                            <div className="text-center">
                                <Link to="/about">
                                    <Button variant="link" size="lg">
                                        Learn more about me
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-12 md:py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-3 tracking-tight">Featured Projects</h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Real-world problems solved with XR systems thinking
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {featuredProjects.map((project) => (
                            <motion.div
                                key={project?.id}
                                variants={projectCard}
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                                className="flex"
                            >
                                <Card className="p-4 w-full flex flex-col hover:shadow-lg transition-all duration-300">
                                    <motion.div className="aspect-[16/9] rounded-xl flex items-center justify-center mb-4 overflow-hidden bg-muted/10" variants={projectImage}>
                                        {project?.imageUrl ? (
                                            <motion.img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover block"
                                                variants={projectImage}
                                            />
                                        ) : (
                                            <span className="text-muted-foreground">Image Placeholder</span>
                                        )}
                                    </motion.div>

                                    <h3 className="font-heading text-2xl md:text-xl font-semibold mb-2 tracking-tight leading-snug">{project?.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project?.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project?.tags.map((tag, i) => (
                                            <Badge key={i} variant="secondary" className="px-3 py-1 text-sm">{tag}</Badge>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <Button 
                                            variant="outline" 
                                            className="w-full"
                                            onClick={() => navigate(`/projects/${project?.id}`)}
                                        >
                                            View Case Study
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 text-center">
                        <Button 
                            size="lg" 
                            variant="outline"
                            onClick={() => navigate('/projects')}
                        >
                            View All Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>
            </section>
            {/* How I Think */}
            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mx-auto"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-heading font-bold mb-4 text-center tracking-tight"
                        >
                            How I Think
                        </motion.h2>

                        <motion.p variants={fadeInUp} className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                            A concise approach that blends systems thinking, 3D craft, and pragmatic engineering to solve real problems.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                            <motion.div variants={capabilityItem} className="bg-background/60 dark:bg-background/40 border p-8 rounded-3xl shadow-sm flex flex-col h-full">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5 text-primary flex-shrink-0">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 leading-snug">Problem First</h3>
                                        <p className="text-base text-muted-foreground mt-2 leading-relaxed">I start with constraints and outcomes, not tools, focusing on the real user need and measurable goals.</p>
                                        <div className="flex gap-2 mt-4">
                                            <Badge variant="secondary">Discovery</Badge>
                                            <Badge variant="secondary">Research</Badge>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={capabilityItem} className="bg-background/60 dark:bg-background/40 border p-8 rounded-3xl shadow-sm flex flex-col h-full">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5 text-primary flex-shrink-0">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 leading-snug">Systems Thinking</h3>
                                        <p className="text-base text-muted-foreground mt-2 leading-relaxed">Designing components with clear interfaces so systems scale predictably and failures are contained.</p>
                                        <div className="flex gap-2 mt-4">
                                            <Badge variant="secondary">Architecture</Badge>
                                            <Badge variant="secondary">Reliability</Badge>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={capabilityItem} className="bg-background/60 dark:bg-background/40 border p-8 rounded-3xl shadow-sm flex flex-col h-full">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5 text-primary flex-shrink-0">
                                        <Box className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 leading-snug">3D Craft</h3>
                                        <p className="text-base text-muted-foreground mt-2 leading-relaxed">Practical knowledge of assets, LODs, and runtime performance to make immersive experiences realistic and efficient.</p>
                                        <div className="flex gap-2 mt-4">
                                            <Badge variant="secondary">Assets</Badge>
                                            <Badge variant="secondary">Performance</Badge>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={capabilityItem} className="bg-background/60 dark:bg-background/40 border p-8 rounded-3xl shadow-sm flex flex-col h-full">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5 text-primary flex-shrink-0">
                                        <Layers className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="font-heading text-lg md:text-xl font-semibold mb-2 leading-snug">Rapid Iteration</h3>
                                        <p className="text-base text-muted-foreground mt-2 leading-relaxed">Prototype quickly, validate early, then refine, balancing curiosity with measurable improvements.</p>
                                        <div className="flex gap-2 mt-4">
                                            <Badge variant="secondary">Prototyping</Badge>
                                            <Badge variant="secondary">Testing</Badge>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mt-8 text-center">
                            <Link to="/about">
                                <Button variant="link" size="lg">Read my process</Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Separator className="container mx-auto" />

            {/* Tech Stack Snapshot */}
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center tracking-tight">Tech Stack</h2>

                        <div className="flex flex-wrap justify-center gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.04 }}
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 border border-transparent shadow-sm hover:shadow-md transform-gpu transition-transform hover:scale-[1.04]"
                                >
                                    <div className="text-primary">{tech.icon}</div>
                                    <span className={`font-semibold ${index % 3 === 0 ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Separator className="container mx-auto" />

            {/* Contact Teaser */}
            <section className="py-10 md:py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="container mx-auto px-4 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Let's Build Something</h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        Whether it's a complex XR system, an intelligent platform, or an experimental prototype, I'm interested in hard problems.
                    </p>
                    <Link to="/contact">
                        <Button size="lg">
                            Get In Touch
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
