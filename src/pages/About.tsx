import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Layers, 
  Zap, 
  CheckCircle2,
  Box,
  Shapes,
  Activity
} from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const workflowSteps = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem",
      description: "Define the real constraint. What's actually broken? What's the user struggling with? Skip assumptions."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "System",
      description: "Design the architecture. Map components, data flow, and interaction points. Think in layers."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Prototype",
      description: "Build quickly. Test the riskiest assumptions first. Use real devices, real scenarios."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Optimize",
      description: "Measure, profile, refine. Remove bottlenecks. Make it production-ready and maintainable."
    }
  ];

  const designPerspectives = [
    {
      icon: <Box className="w-6 h-6" />,
      title: "Asset Pipeline",
      description: "I understand how models move from Blender/Maya to engine. Polygon counts matter. UV maps matter. Import settings matter."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Material Systems",
      description: "PBR workflows, shader complexity, texture atlasing, and mobile constraints. I think in draw calls and fill rate."
    },
    {
      icon: <Shapes className="w-6 h-6" />,
      title: "Animation Rigging",
      description: "Skeletal animation, blend trees, IK systems. I speak the language of animators and technical artists."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Performance Budget",
      description: "Frame timing, LOD systems, occlusion culling, instancing. Real-time rendering is about trade-offs."
    }
  ];

  const careAbout = [
    "Building XR systems that work on real hardware, not just demos",
    "Simulation platforms that model complex behavior accurately",
    "Developer tools that reduce friction and surface errors early",
    "R&D projects that explore uncomfortable questions",
    "Platforms that scale from prototype to production",
    "Teams where engineers and designers speak the same language"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Intro Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <Badge className="mb-6 text-xs font-medium">About</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              XR Systems Engineer, Platform-Focused
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 text-base md:text-lg text-muted-foreground">
            <p className="leading-relaxed">
              I build extended reality systems that solve real problems. Not proof-of-concepts that look good in a pitch deck — 
              actual platforms that run on actual hardware, used by actual people.
            </p>
            <p className="leading-relaxed">
              My background spans WebXR, Unity XR, and intelligent systems. I think in architectures, not features. 
              I care about scalability, performance, and how components interact under stress.
            </p>
            <p className="leading-relaxed">
              I also understand 3D design from an engineering perspective: meshes, materials, animation pipelines, and 
              the constraints that come with real-time rendering. This makes me effective at bridging the gap between 
              design intent and technical reality.
            </p>
          </motion.div>
        </motion.section>

        <Separator className="my-20" />

        {/* How I Work Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">
            How I Work
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
            My process is iterative but structured. Every project follows a pattern:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">{step.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="my-20" />

        {/* 3D Design Perspective Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">
            3D Design Perspective
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
            I'm not a 3D artist, but I understand how assets work at a technical level. This literacy makes collaboration 
            smoother and prevents costly mistakes late in production.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPerspectives.map((perspective, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 h-full border-l-4 border-l-primary">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">{perspective.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{perspective.title}</h3>
                      <p className="text-sm text-muted-foreground">{perspective.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="my-20" />

        {/* What I Care About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">
            What I Care About
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="p-8 bg-muted/50">
              <ul className="space-y-4">
                {careAbout.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-lg"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">
              I'm interested in projects that push boundaries, require deep thinking, and create lasting value.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
