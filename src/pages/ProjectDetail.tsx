import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight tracking-tight">
              WebXR Spatial Collaboration Platform
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Real-time multi-user collaboration in browser-based XR environments with spatial audio, 
            hand tracking, and persistent state synchronization.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
            <Badge>WebXR</Badge>
            <Badge>Three.js</Badge>
            <Badge>WebSocket</Badge>
            <Badge>Node.js</Badge>
            <Badge>Spatial Audio</Badge>
            <Badge>WebRTC</Badge>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            <Button className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              Source Code
            </Button>
          </motion.div>
        </motion.section>

        {/* Media Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-4">
            <span className="text-muted-foreground text-lg">Video Placeholder</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Image Placeholder</span>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Image Placeholder</span>
            </div>
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* Problem Statement */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold mb-8 tracking-tight">
            Problem Statement
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Card className="p-6 bg-muted/50">
              <p className="text-lg leading-relaxed">
                Existing collaboration tools for XR require native apps, proprietary platforms, or complex setup. 
                Teams needed a way to meet in shared 3D spaces instantly — accessible through a web browser, 
                supporting multiple simultaneous users, with natural spatial audio and hand-tracked interactions. 
                The system had to work on Quest, desktop VR, and flat screens simultaneously.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        <Separator className="my-16" />

        {/* System Overview */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-heading font-bold mb-6">
            System Overview
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="space-y-4 mb-6">
            <p className="text-lg text-muted-foreground">
              The platform is built on WebXR APIs for device compatibility, Three.js for rendering, 
              and a custom Node.js server for state synchronization. Client-side prediction and server 
              reconciliation handle network latency. Spatial audio uses Web Audio API with HRTF positioning.
            </p>
            <p className="text-lg text-muted-foreground">
              The architecture separates presentation (Three.js scene), interaction (XR input handling), 
              and networking (WebSocket + WebRTC data channels). This allows graceful degradation — 
              users on flat screens see the same world but with mouse/keyboard controls.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground">Architecture Diagram Placeholder</span>
            </div>
          </motion.div>
        </motion.section>

        <Separator className="my-16" />

        {/* Key Design Decisions */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-heading font-bold mb-6">
            Key Design Decisions
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-4">
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">WebXR Over Native</h3>
              <p className="text-muted-foreground">
                Choosing WebXR reduced deployment friction massively. No app store approval, instant updates, 
                and users join via URL. Trade-off: slightly lower performance ceiling, but worth it for accessibility.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">Hybrid WebSocket + WebRTC</h3>
              <p className="text-muted-foreground">
                WebSocket handles signaling and state sync. WebRTC data channels handle high-frequency positional 
                updates. This hybrid approach balances reliability with low latency.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">Client-Side Prediction</h3>
              <p className="text-muted-foreground">
                Movements feel instant locally, reconciled with server state on the next tick. This makes 
                200ms+ latency tolerable while maintaining synchronized state.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-2">Minimal Asset Complexity</h3>
              <p className="text-muted-foreground">
                All 3D models are sub-50k polygons with baked lighting. Textures are compressed. This ensures 
                smooth 72fps even on Quest 2 with 8 simultaneous users.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        <Separator className="my-16" />

        {/* 3D & Asset Considerations */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-heading font-bold mb-6">
            3D & Asset Considerations
          </motion.h2>

          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">Mesh Optimization</h3>
              <p className="text-muted-foreground">
                All meshes processed through geometry compression. Shared geometries instanced. 
                Dynamic objects use simplified collision meshes separate from visual meshes.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">Material Pipeline</h3>
              <p className="text-muted-foreground">
                Standard PBR materials with atlas-packed textures. Normal maps only on hero assets. 
                All materials use the same shader variant to reduce state changes.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">Animation System</h3>
              <p className="text-muted-foreground">
                Hand tracking animations use blend shapes for finger poses. Avatar bodies use skeletal 
                animation with IK for foot placement. Animations compressed using keyframe reduction.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-lg mb-2">Performance Budget</h3>
              <p className="text-muted-foreground">
                Target: 72fps on Quest 2. Budget: 500k triangles total scene, 100 draw calls max, 
                2ms physics, 5ms networking per frame. Profiled continuously during development.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <Separator className="my-16" />

        {/* Outcomes & Learnings */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-heading font-bold mb-6">
            Outcomes & Learnings
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="p-6 mb-6 bg-primary/5 border-primary/20">
              <h3 className="font-heading font-semibold text-lg mb-4">What Worked</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>WebXR deployment was friction-free — users joined sessions within seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Spatial audio created natural presence; users reported "forgetting it was remote"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Client-side prediction made interactions feel responsive despite network latency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Performance budget discipline paid off — stable 72fps with 8 users consistently</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="font-heading font-semibold text-lg mb-4">What Would Improve</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>State reconciliation logic became complex; would use existing framework next time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Initial load time was 8-12 seconds; progressive loading of assets would help</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hand tracking wasn't reliable on all devices; fallback controller UI needed refinement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Server scaling required custom load balancing; cloud-native solution would simplify ops</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </motion.section>

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8"
        >
          <Button variant="outline" size="lg" className="w-full gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
