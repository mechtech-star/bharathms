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
  Activity,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Award
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

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Mechanical Engineering",
      institution: "Government College of Technology",
      location: "Coimbatore, India",
      cgpa: "8.5 CGPA",
      logo: "/GCT.jpg"
    }
  ];

  const experience = [
    {
      role: "XR Developer",
      company: "HCL Tech",
      customer: "KLA",
      startDate: "Sep 1, 2022",
      endDate: "Present",
      description: "Building extended reality systems and spatial computing solutions for enterprise clients",
      logo: "/hcl.jpg"
    },
    {
      role: "Academic Trainee (Intern)",
      company: "HCL Tech",
      startDate: "Feb 2022",
      endDate: "Jul 2022",
      duration: "7 months",
      description: "Foundation training in XR development, system architecture, and 3D technologies",
      logo: "/hcl.jpg"
    },
    {
      role: "Design Intern",
      field: "Mechanical Engineering",
      company: "Frigate",
      startDate: "Jan 2021",
      endDate: "Mar 2021",
      duration: "3 months",
      description: "Mechanical design and CAD work on innovative product solutions",
      logo: "/Frigate.jpg"
    }
  ];

  // Calculate human-friendly duration between two dates. If endDateStr === 'Present', use current date.
  const computeDuration = (startDateStr: string, endDateStr?: string) => {
    try {
      const start = new Date(startDateStr);
      const end = endDateStr === 'Present' || !endDateStr ? new Date() : new Date(endDateStr);

      if (isNaN(start.getTime()) || isNaN(end.getTime())) return undefined;

      // Calculate whole months difference
      let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      if (end.getDate() < start.getDate()) months -= 1; // partial month
      if (months < 0) months = 0;

      const years = Math.floor(months / 12);
      const remMonths = months % 12;

      const parts: string[] = [];
      if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
      if (remMonths > 0) parts.push(`${remMonths} mo${remMonths > 1 ? 's' : ''}`);
      if (parts.length === 0) return 'Less than a month';
      return parts.join(' ');
    } catch (e) {
      return undefined;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <Badge className="mb-6 text-xs font-medium">About</Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight tracking-tight">
              XR Developer | Systems Engineer
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6 text-base md:text-lg text-muted-foreground">
            <p className="leading-relaxed">
              I build extended reality systems that solve real problems. Not proof-of-concepts that look good in a pitch deck -
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

        

        {/* Experience Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Experience</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From internships to enterprise XR development, building practical systems that scale.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/20" />

            <div className="space-y-8 md:space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row md:pl-12"
                >
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:flex absolute left-0 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1.5 top-8 z-10" style={{ marginTop: index > 0 ? '0' : '0' }} />

                  {/* Content */}
                  <div className="flex-1">
                    <Card className="p-6 md:p-8 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30 relative group">
                      {/* Mobile timeline indicator */}
                      <div className="md:hidden absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded-l" />

                      {/* Company Logo */}
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0 mb-4 rounded-xl bg-muted/50 overflow-hidden">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="rounded-lg w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-semibold mb-1 tracking-tight">{exp.role}</h3>
                        <div className="flex flex-wrap gap-2 items-center mb-4">
                          <p className="text-base md:text-lg text-primary font-medium">{exp.company}</p>
                          {exp.customer && (
                            <Badge variant="secondary" className="text-xs">Customer: {exp.customer}</Badge>
                          )}
                          {exp.field && (
                            <Badge variant="secondary" className="text-xs">{exp.field}</Badge>
                          )}
                        </div>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Date and Duration */}
                        <div className="flex flex-col gap-3 pt-4 border-t border-border">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 flex-shrink-0 text-primary" />
                            <span className="font-medium">
                              {exp.startDate}
                              {exp.endDate ? ` - ${exp.endDate}` : ''}
                            </span>
                          </div>
                          {/* Show provided duration or compute for Present */}
                          { (exp.duration || exp.endDate === 'Present') && (
                            <Badge variant="outline" className="text-xs w-fit">
                              {exp.duration ? exp.duration : computeDuration(exp.startDate, exp.endDate)}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <Separator className="my-20" />

        {/* Education Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Education</h2>
            </div>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex gap-6 items-start">
                    {/* Logo Placeholder */}
                    <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 ">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="rounded-2xl"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="font-heading text-2xl font-semibold mb-1 tracking-tight">{edu.degree}</h3>
                        <p className="text-lg text-primary font-medium">{edu.field}</p>
                      </div>

                      <div className="space-y-2 mt-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span>{edu.location}</span>
                        </div>
                        <div className="mt-4">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm">
                            <Award className="w-3 h-3 mr-1" />
                            {edu.cgpa}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How I Work Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">How I Work</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              My process is iterative but structured. Every project follows a clear pattern from discovery to production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-7 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
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
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5">
                <Box className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">3D Design Perspective</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              I'm not a 3D artist, but I understand how assets work at a technical level. This literacy makes collaboration
              smoother and prevents costly mistakes late in production.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPerspectives.map((perspective, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-7 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary flex-shrink-0">
                      {perspective.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2 tracking-tight">{perspective.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">{perspective.description}</p>
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
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">What I Care About</h2>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8 md:p-10 bg-muted/30">
              <ul className="space-y-5">
                {careAbout.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 text-lg leading-relaxed"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-xl text-muted-foreground font-medium">
              I'm interested in projects that push boundaries, require deep thinking, and create lasting value.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
