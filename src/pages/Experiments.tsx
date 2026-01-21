import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Beaker, 
  Sparkles, 
  Zap, 
  Target,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

const Experiments = () => {
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

  const experiments = [
    {
      title: "Neural Mesh Generation",
      hypothesis: "Can a neural network learn to generate optimized 3D meshes from 2D sketches?",
      setup: "Trained a transformer model on dataset of 10k hand-drawn sketches paired with professional 3D models. Used differentiable rendering loss.",
      outcome: "Generated meshes had correct topology but poor UV layouts. Successful for low-poly assets, struggled with organic shapes. Needs mesh-specific loss function.",
      status: "partial",
      tags: ["ML", "3D", "PyTorch", "Procedural"]
    },
    {
      title: "WebAssembly Physics Engine",
      hypothesis: "Can a custom physics engine in WASM outperform existing JS libraries for XR use cases?",
      setup: "Wrote minimal rigid body physics in Rust, compiled to WASM. Benchmarked against Cannon.js and Ammo.js in typical XR scenarios.",
      outcome: "30% faster for collision detection, but integration overhead negated gains. Better approach: profile existing engines and optimize specific bottlenecks.",
      status: "failure",
      tags: ["WASM", "Rust", "Physics", "Performance"]
    },
    {
      title: "Haptic Pattern Synthesis",
      hypothesis: "Can procedurally generated haptic patterns convey material properties more effectively than static recordings?",
      setup: "Built pattern generator using wave functions and noise. Tested with 20 participants comparing wood, metal, fabric textures in VR.",
      outcome: "Synthetic patterns scored 15% higher in recognition tests. Participants preferred 'cleaner' synthetic haptics. Ready for production use.",
      status: "success",
      tags: ["Haptics", "VR", "User Study", "Synthesis"]
    },
    {
      title: "Shader-Based Volumetric Fog",
      hypothesis: "Can compute shaders generate convincing volumetric fog without raymarching overhead?",
      setup: "Implemented noise-based density field in compute shader, rendered using depth-based slicing. Compared to traditional raymarching.",
      outcome: "4x faster than raymarching with similar visual quality. Works well for large outdoor environments. Adopted into main rendering pipeline.",
      status: "success",
      tags: ["Compute Shaders", "Rendering", "Unity", "Performance"]
    },
    {
      title: "Gesture Recognition Without ML",
      hypothesis: "Can hand gesture recognition work using geometric heuristics instead of trained models?",
      setup: "Built decision tree based on finger angles, palm orientation, and hand velocity. Tested on 10 common XR gestures.",
      outcome: "95% accuracy on controlled conditions, 70% in real use. Fast (sub-1ms), but brittle to hand shape variance. ML approach still needed for robustness.",
      status: "partial",
      tags: ["XR", "Gesture", "Computer Vision", "Algorithms"]
    },
    {
      title: "Distributed State Sync Benchmark",
      hypothesis: "Which state synchronization pattern is most efficient for 20+ user XR environments?",
      setup: "Compared full state sync, delta compression, interest management, and hybrid approaches. Measured bandwidth and latency under realistic loads.",
      outcome: "Hybrid delta + interest management won decisively. 85% bandwidth reduction with minimal latency increase. Results published internally.",
      status: "success",
      tags: ["Networking", "Multiplayer", "Benchmark", "Systems"]
    },
    {
      title: "Procedural Music from User Motion",
      hypothesis: "Can XR hand movements generate musically coherent soundscapes in real-time?",
      setup: "Mapped velocity to tempo, position to pitch/timbre, gesture shapes to chord progressions. Used Web Audio API synthesis.",
      outcome: "Results were 'interesting' but not musical. Users enjoyed novelty but couldn't create intentional melodies. Needs constraint-based composition.",
      status: "failure",
      tags: ["Audio", "WebXR", "Procedural", "Interaction"]
    },
    {
      title: "Eye Tracking Foveated Rendering",
      hypothesis: "Can dynamic foveation based on eye tracking save significant GPU time without visible artifacts?",
      setup: "Implemented variable rate shading in Unity using Quest Pro eye tracking. Tested with 5 complex scenes.",
      outcome: "20-35% GPU time saved. Artifacts only visible during rapid saccades. Production-ready for Quest Pro+ devices. Shipping in next release.",
      status: "success",
      tags: ["Eye Tracking", "Rendering", "Quest Pro", "Performance"]
    },
    {
      title: "Text Rendering in 3D Space",
      hypothesis: "Can SDF-based text rendering outperform traditional approaches for XR UI?",
      setup: "Implemented multi-channel signed distance field text renderer. Compared to bitmap and mesh text for legibility and performance.",
      outcome: "Crisp at all distances, minimal draw calls, but slow initial generation. Best for static UI. Bitmap still better for dynamic content.",
      status: "partial",
      tags: ["UI", "SDF", "Text", "WebGL"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'partial':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'failure':
        return <Zap className="w-5 h-5 text-red-500" />;
      default:
        return <Beaker className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'success':
        return 'Validated';
      case 'partial':
        return 'Partial Success';
      case 'failure':
        return 'Failed (Learned)';
      default:
        return 'In Progress';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <Beaker className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="text-sm">R&D</Badge>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Experiments
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Not every project makes it to production. These are explorations, hypotheses tested, 
            and uncomfortable questions asked. Some succeeded. Some failed. All were worth doing.
          </motion.p>
        </motion.section>

        <Separator className="mb-16" />

        {/* Experiments Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {experiments.map((experiment, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(experiment.status)}
                    <span className="text-sm font-medium">{getStatusLabel(experiment.status)}</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 tracking-tight leading-tight">{experiment.title}</h3>

                {/* Hypothesis */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Hypothesis</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    {experiment.hypothesis}
                  </p>
                </div>

                {/* Setup */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Beaker className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Setup</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    {experiment.setup}
                  </p>
                </div>

                {/* Outcome */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Outcome</span>
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    {experiment.outcome}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t">
                  {experiment.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-20"
        >
          <Card className="p-8 bg-muted/50 border-l-4 border-l-primary">
            <h2 className="text-2xl font-bold mb-4">Why Experiment?</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Production work solves known problems with proven tools. Experiments explore the edges — 
                where assumptions break, where new approaches might work, where the field is heading.
              </p>
              <p>
                Failures teach as much as successes. A negative result saves the next person time. 
                Partial success reveals which parts of an idea are salvageable.
              </p>
              <p>
                These experiments inform production decisions. They build intuition about what's possible, 
                what's practical, and what's just around the corner.
              </p>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Experiments;
