import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Github, Linkedin, ExternalLink, Phone } from 'lucide-react';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "6381406329",
      link: "tel:+916381406329",
      description: "Preferred for quick messages or calls (WhatsApp)"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "bharath.ms@zohomail.in",
      link: "mailto:bharath.ms@zohomail.in",
      description: "Best for project inquiries and detailed discussions"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@mechtech-star",
      link: "https://github.com/mechtech-star",
      description: "Check out my code, experiments, and open source contributions"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Bharath M S",
      link: "https://www.linkedin.com/in/bharath-m-s-88ba17190/",
      description: "Connect professionally and see my work history"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold mb-8 tracking-tight leading-tight">
            Let's Talk
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in XR systems, simulation platforms, or complex engineering challenges?
            I'm open to discussing projects, collaborations, and interesting problems.
          </motion.p>
        </motion.section>

        <Separator className="mb-16" />

        {/* Contact Methods */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-heading font-bold mb-8 tracking-tight">
            How to Reach Me
          </motion.h2>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="text-primary mt-1 flex-shrink-0">
                      {method.icon}
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-heading font-semibold">{method.label}</h3>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-primary font-mono text-sm mb-2">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <Separator className="mb-16" />

        {/* What I'm Looking For */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-heading font-bold mb-6">
            What I'm Interested In
          </motion.h2>

          <motion.div variants={fadeInUp}>
            <Card className="p-6 bg-muted/50">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">XR platform development</strong> — Building systems that other developers build on
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">R&D and exploration</strong> — Projects at the edge of what's possible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Performance optimization</strong> — Making real-time systems faster and more efficient
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Developer tooling</strong> — Tools that make engineering teams more effective
                  </span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-muted-foreground mb-6">
              Not sure if your project fits? Reach out anyway. I'm curious.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:bharath.ms@zohomail.com">
                <Mail className="mr-2 w-5 h-5" />
                Send an Email
              </a>
            </Button>
          </motion.div>
        </motion.section>

        {/* Response Time Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>I typically respond within 24-48 hours.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
