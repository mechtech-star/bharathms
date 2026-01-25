import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const ProjectsIndex = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'WebXR', 'Unity XR', 'Simulation', 'Experiments'];

  const projects = [
    {
      title: "WebXR Spatial Collaboration Platform",
      description: "Multi-user browser-based XR environment with real-time synchronization, spatial audio, and persistent world state.",
      tags: ["WebXR", "Three.js", "WebSocket", "Node.js"],
      category: "WebXR"
    },
    {
      title: "Unity XR Training Simulation",
      description: "Immersive medical training platform with haptic feedback, performance analytics, and adaptive difficulty systems.",
      tags: ["Unity", "XR Toolkit", "C#", "ML Agents"],
      category: "Unity XR"
    },
    {
      title: "Procedural Environment Generator",
      description: "Runtime terrain and asset generation with LOD management, optimized for mobile XR devices at 72fps.",
      tags: ["Unity", "Compute Shaders", "Procedural", "Performance"],
      category: "Unity XR"
    },
    {
      title: "Physics-Based Fluid Simulation",
      description: "Real-time computational fluid dynamics using SPH method, integrated into Unity with custom rendering pipeline.",
      tags: ["Simulation", "Compute Shaders", "Physics", "Unity"],
      category: "Simulation"
    },
    {
      title: "WebGL Shader Playground",
      description: "Interactive shader editor for WebGL with live preview, parameter tuning, and export to Three.js materials.",
      tags: ["WebGL", "GLSL", "Three.js", "React"],
      category: "WebXR"
    },
    {
      title: "AR Object Placement System",
      description: "Surface detection and physics-aware object placement for mobile AR with occlusion and lighting estimation.",
      tags: ["ARKit", "ARCore", "Unity", "Computer Vision"],
      category: "Unity XR"
    },
    {
      title: "Neural Network Visualization",
      description: "3D interactive visualization of neural network architectures and training processes in real-time.",
      tags: ["ML", "Three.js", "WebGL", "Data Viz"],
      category: "Experiments"
    },
    {
      title: "Particle System Benchmark",
      description: "Performance testing framework comparing GPU particle systems across Unity, Three.js, and Babylon.js.",
      tags: ["Performance", "Benchmark", "Compute", "Analysis"],
      category: "Experiments"
    },
    {
      title: "Multi-Agent Path Planning",
      description: "Crowd simulation system with collision avoidance, navigation meshes, and emergent behavior patterns.",
      tags: ["Simulation", "AI", "Pathfinding", "Unity"],
      category: "Simulation"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight leading-tight">Projects</h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            XR systems, simulations, and experiments. Each project represents a real problem, 
            a considered approach, and concrete outcomes.
          </p>
        </motion.section>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className="transition-all"
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                  <span className="text-muted-foreground">Image Placeholder</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-heading font-semibold mb-3 tracking-tight leading-tight">{project.title}</h3>

                {/* Project Description */}
                <p className="text-sm text-muted-foreground mb-4 grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View Case Study Button */}
                <Button variant="outline" className="w-full group">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsIndex;
