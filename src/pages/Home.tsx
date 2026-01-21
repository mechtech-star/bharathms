import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { NoiseBackground } from '@/components/ui/noise-background';
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

    const capabilities = [
        {
            icon: <Boxes className="w-8 h-8" />,
            title: "XR Engineering",
            description: "WebXR systems, Unity XR platforms, and spatial computing solutions"
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: "Intelligent Systems",
            description: "Simulation architectures, data-driven decision making, and computational models"
        },
        {
            icon: <Box className="w-8 h-8" />,
            title: "3D Design Literacy",
            description: "Understanding meshes, materials, animations, and real-time performance constraints"
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "Architecture Thinking",
            description: "System design, component orchestration, and scalable platform engineering"
        }
    ];

    const featuredProjects = [
        {
            title: "WebXR Spatial Collaboration",
            problem: "Enable real-time multi-user collaboration in browser-based XR environments",
            tags: ["WebXR", "Three.js", "WebSocket", "Spatial Audio"]
        },
        {
            title: "Unity XR Training Platform",
            problem: "Build immersive training simulations with performance analytics and adaptivity",
            tags: ["Unity", "XR Toolkit", "ML Agents", "Analytics"]
        },
        {
            title: "Procedural Environment System",
            problem: "Generate optimized 3D environments at runtime with LOD management",
            tags: ["Procedural Gen", "Performance", "Asset Pipeline"]
        }
    ];

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
            <section className="relative overflow-hidden py-12 md:py-32">
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

                        <motion.p
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
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
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
                            <Button size="lg" variant="link" className="text-base px-5 flex items-center gap-2 justify-center">
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <span>Contact</span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Capability Overview */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {capabilities.map((capability, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="text-primary mb-4">{capability.icon}</div>
                                    <h3 className="text-xl font-semibold mb-3 tracking-tight">{capability.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Separator className="container mx-auto" />

            {/* Featured Projects */}
            <section className="py-20 md:py-32 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Featured Projects</h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Real-world problems solved with XR systems thinking
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {featuredProjects.map((project, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-4">
                                        <span className="text-muted-foreground">Image Placeholder</span>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 tracking-tight leading-tight">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 grow leading-relaxed">{project.problem}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <Badge key={i} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>

                                    <Button variant="outline" className="w-full">
                                        View Case Study
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Separator className="container mx-auto" />

            {/* How I Think */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight"
                        >
                            How I Think
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg">
                                    I start with the problem, not the technology. What's the real constraint?
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg">
                                    I think in systems — how components interact, where bottlenecks emerge, how to scale.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg">
                                    I understand 3D assets deeply — polygon budgets, material complexity, animation pipelines.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg">
                                    I prototype quickly, test early, and optimize based on actual performance data.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <p className="text-lg">
                                    I care about the craft — clean architecture, maintainable code, and tools that empower teams.
                                </p>
                            </div>
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">Tech Stack</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 p-4 rounded-lg bg-background border"
                                >
                                    <div className="text-primary">{tech.icon}</div>
                                    <span className="font-medium">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Separator className="container mx-auto" />

            {/* Contact Teaser */}
            <section className="py-20 md:py-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="container mx-auto px-4 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's Build Something</h2>
                    <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        Whether it's a complex XR system, an intelligent platform, or an experimental prototype — I'm interested in hard problems.
                    </p>
                    <Button size="lg" className="text-lg px-8">
                        Get In Touch
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
