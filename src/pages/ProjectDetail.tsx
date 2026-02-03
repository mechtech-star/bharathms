import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectById } from '@/data/projects';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Get project from centralized data
  const currentProject = getProjectById(id || 'webxr-collaboration');

  if (!currentProject) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
        </div>
      </div>
    );
  }

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
          <Button 
            variant="ghost" 
            className="gap-2"
            onClick={() => navigate('/projects')}
          >
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
              {currentProject.title}
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {currentProject.longDescription || currentProject.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-6">
            {currentProject.tags.map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-4">
            {currentProject.demoUrl && (
              <Button 
                className="gap-2"
                onClick={() => window.open(currentProject.demoUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
            {currentProject.githubUrl && (
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open(currentProject.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4" />
                Source Code
              </Button>
            )}
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
          {currentProject.videoUrl ? (
            <div className="aspect-video mb-4">
              <video
                src={currentProject.videoUrl}
                controls
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ) : (
            <div className="aspect-video mb-4">
              <img
                src={currentProject.imageUrls?.[0] ?? currentProject.imageUrl}
                alt={currentProject.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {[currentProject.imageUrls?.[1] ?? null, currentProject.imageUrls?.[2] ?? null].map((src, i) => (
              <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                {src ? (
                  <img src={src} alt={`${currentProject.title} ${i + 2}`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-muted-foreground text-sm">Image Placeholder</span>
                )}
              </div>
            ))}
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
                {currentProject.problemStatement || 'Project details to be added.'}
              </p>
            </Card>
          </motion.div>
        </motion.section>

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
                {currentProject.outcomes?.whatWorked.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="font-heading font-semibold text-lg mb-4">What Would Improve</h3>
              <ul className="space-y-2 text-muted-foreground">
                {currentProject.outcomes?.whatImprove.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
            {currentProject.systemOverview?.map((paragraph, i) => (
              <p key={i} className="text-lg text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            {currentProject.imageUrls?.[0] || currentProject.imageUrl ? (
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={currentProject.imageUrls?.[0] ?? currentProject.imageUrl}
                  alt={`${currentProject.title} architecture`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ) : (
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <span className="text-muted-foreground">Architecture Image Placeholder</span>
              </div>
            )}
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
            {currentProject.keyDecisions?.map((decision, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2">{decision.title}</h3>
                <p className="text-muted-foreground">
                  {decision.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </motion.section>

        <Separator className="my-16" />
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
            {currentProject.assetConsiderations?.map((item, i) => (
              <div key={i}>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetail;
