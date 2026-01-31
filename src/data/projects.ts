export interface Project {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'WebXR' | 'Unity XR' | 'Simulation' | 'Experiments';
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  // Detailed content for project detail page
  problemStatement?: string;
  systemOverview?: string[];
  keyDecisions?: Array<{
    title: string;
    description: string;
  }>;
  assetConsiderations?: Array<{
    title: string;
    description: string;
  }>;
  outcomes?: {
    whatWorked: string[];
    whatImprove: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: 'xr-training-platform-unity',
    title: 'XR Training Platform (Unity)',
    shortTitle: 'XR Platform – Unity',

    description:
      'A production-grade Unity-based XR training platform with analytics, adaptive logic, and CMS-driven content authoring.',

    longDescription:
      'XR Training Platform (Unity) is a full-scale, production-ready XR training system designed for enterprise and institutional use. Built on Unity and OpenXR, it supports high-fidelity interaction, complex training logic, analytics, and CMS-driven content pipelines, enabling scalable deployment of immersive training programs.',

    category: 'Unity XR',
    tags: [
      'Unity',
      'XR Toolkit',
      'OpenXR',
      'XR Training',
      'Production System',
      'CMS Driven',
      'Analytics'
    ],

    imageUrl: '/Unity.webp',
    demoUrl: 'https://unity-training-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/unity-xr-training-platform',

    problemStatement:
      'Enterprise and institutional training requires immersive, repeatable, and measurable experiences. Existing solutions are either inflexible or difficult to scale. This platform was built to support real-world training needs with high-fidelity interaction, structured analytics, and designer-friendly content workflows.',

    systemOverview: [
      'Built in Unity using XR Toolkit and OpenXR to support a wide range of VR devices.',
      'Training experiences are driven by CMS-authored step data, enabling rapid iteration without rebuilding applications.',
      'Backend systems collect performance metrics, learner progress, and assessment data for dashboards and reporting.',
      'Designed for long-term maintainability, extensibility, and real-world deployment.'
    ],

    keyDecisions: [
      {
        title: 'Platform Architecture Over Single Simulation',
        description:
          'The system is built as a reusable platform capable of hosting multiple training programs rather than a one-off simulation.'
      },
      {
        title: 'CMS-Driven Training Logic',
        description:
          'Decoupling content from code allows designers and domain experts to author and update training scenarios independently.'
      },
      {
        title: 'Production-Grade Analytics',
        description:
          'Performance data is treated as a first-class feature to support certification, evaluation, and curriculum optimization.'
      }
    ],

    assetConsiderations: [
      {
        title: 'High-Fidelity Training Assets',
        description:
          'Assets prioritize realism while using LODs and optimization strategies to maintain stable frame rates.'
      },
      {
        title: 'Interaction & Physics Accuracy',
        description:
          'Physics, IK, and interaction systems are tuned for real-world procedural accuracy.'
      }
    ],

    outcomes: {
      whatWorked: [
        'Production-ready architecture suitable for real deployments',
        'CMS workflows significantly reduced iteration time',
        'Analytics enabled objective performance evaluation',
        'Platform supports multiple training domains'
      ],
      whatImprove: [
        'Asset production pipeline remains resource-intensive',
        'Device-specific tuning increases QA effort',
        'Scenario authoring tools need further abstraction'
      ]
    }
  },
  {
    id: 'xr-training-foundation-webxr',
    title: 'XR Training Foundation (WebXR)',
    shortTitle: 'XR Foundation – WebXR',

    description:
      'A developer-first WebXR foundation for building scalable, browser-based XR training applications.',

    longDescription:
      'XR Training Foundation (WebXR) is a modular, extensible starter framework designed for developers and designers building scalable XR training experiences in the browser. It provides a production-ready baseline including WebXR setup, interaction handling, state management, and CMS-driven content pipelines, enabling teams to focus on training logic rather than low-level XR infrastructure.',

    category: 'WebXR',
    tags: [
      'WebXR',
      'Three.js',
      'XR Framework',
      'Developer Toolkit',
      'Training Systems',
      'CMS Driven',
      'Scalable XR'
    ],

    imageUrl: '/webxr.jpg',
    demoUrl: 'https://webxr-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/webxr-training-foundation',

    problemStatement:
      'Developers building XR training applications on the web often start from scratch—rebuilding XR setup, input handling, content pipelines, and backend integration each time. This slows development and limits scalability. A reusable, well-structured WebXR foundation was needed to standardize architecture and accelerate development.',

    systemOverview: [
      'Built on WebXR APIs and Three.js, providing a standardized project structure for browser-based XR training applications.',
      'Includes a CMS-driven content system allowing designers to define training steps, assets, media, and logic without touching code.',
      'Backend services manage session state, user progress, analytics hooks, and content delivery.',
      'Designed for extension: developers can add domain-specific training logic, assessment modules, and analytics layers on top of the foundation.'
    ],

    keyDecisions: [
      {
        title: 'Framework Over Application',
        description:
          'The project is intentionally designed as a foundation rather than a finished product, enabling reuse across multiple XR training use cases.'
      },
      {
        title: 'CMS-First Content Authoring',
        description:
          'Training steps, media, and interactions are authored via a CMS so designers and subject-matter experts can iterate independently.'
      },
      {
        title: 'Backend-Ready Architecture',
        description:
          'All core systems are built assuming backend integration for progress tracking, analytics, and multi-user extension.'
      }
    ],

    assetConsiderations: [
      {
        title: 'Reusable Asset Templates',
        description:
          'Assets follow strict performance and naming conventions so they can be reused across training scenarios.'
      },
      {
        title: 'Web Performance Constraints',
        description:
          'Low-poly meshes, compressed textures, and baked lighting ensure consistent performance on browser and standalone XR devices.'
      }
    ],

    outcomes: {
      whatWorked: [
        'Developers can bootstrap XR training projects rapidly',
        'CMS-driven workflows reduced designer–developer dependency',
        'Clean separation between XR infrastructure and training logic',
        'Architecture scales across different training domains'
      ],
      whatImprove: [
        'Documentation needs expansion for third-party developers',
        'State management complexity grows with advanced scenarios',
        'Progressive asset loading needs refinement'
      ]
    }
  },

  {
    id: 'procedural-generator',
    title: 'Procedural Environment Generator',
    description: 'Runtime terrain and asset generation with LOD management, optimized for mobile XR devices at 72fps.',
    tags: ['Unity', 'Compute Shaders', 'Procedural', 'Performance'],
    category: 'Unity XR',
    imageUrl: '/industry machines.jpg',
    demoUrl: 'https://procedural-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/procedural-generator',
    problemStatement: 'Mobile XR applications are severely memory-constrained. Pre-authored environments consume gigabytes, making deployment impractical. Needed a solution to generate diverse, complex environments at runtime using minimal asset storage while maintaining 72fps on Quest-class hardware.',
    systemOverview: [
      'Uses GPU compute shaders for terrain generation (Perlin noise, erosion simulation) and procedural vegetation placement. Asset templates are sparse and instanced across the scene.',
      'Multi-level LOD system: high-detail near camera, medium detail mid-range, impostor billboards far away. Streaming system unloads distant regions to manage memory.'
    ],
    keyDecisions: [
      {
        title: 'GPU-Driven Generation',
        description: 'Offload generation to compute shaders rather than CPU. Frees main thread for physics/gameplay while leveraging GPU parallelism.'
      },
      {
        title: 'Instancing Over Duplication',
        description: 'Reuse mesh/material combinations via instancing. Dramatically reduces draw calls and memory footprint.'
      },
      {
        title: 'Streaming Architecture',
        description: 'Load regions ahead of player movement. Unload far regions. Enables seamless traversal of infinite worlds on 2GB devices.'
      }
    ],
    assetConsiderations: [
      {
        title: 'Sparse Asset Library',
        description: 'Only store a few base meshes and material templates. Everything else procedurally combined and parameterized.'
      },
      {
        title: 'LOD Strategy',
        description: 'Near: 50k tris/object, Mid: 10k tris, Far: impostor billboard. Aggressive culling outside frustum.'
      }
    ],
    outcomes: {
      whatWorked: [
        'Generated worlds with <500MB disk footprint vs 5GB traditional approach',
        'Maintained stable 72fps even with thousands of visible objects',
        'Procedural variation prevented visual repetition in large explorations',
        'Easy to extend with new biome templates'
      ],
      whatImprove: [
        'Terrain erosion simulation was slow; would pre-compute or cache more aggressively',
        'Memory spikes during streaming transitions; tighter memory budgeting needed',
        'Plant distribution looked unnatural initially; needed better sampling heuristics'
      ]
    }
  },
  {
    id: 'procedural-generator',
    title: 'Procedural Environment Generator',
    description: 'Runtime terrain and asset generation with LOD management, optimized for mobile XR devices at 72fps.',
    tags: ['Unity', 'Compute Shaders', 'Procedural', 'Performance'],
    category: 'Unity XR',
    demoUrl: 'https://procedural-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/procedural-generator',
  },
  {
    id: 'fluid-simulation',
    title: 'Physics-Based Fluid Simulation',
    description: 'Real-time computational fluid dynamics using SPH method, integrated into Unity with custom rendering pipeline.',
    tags: ['Simulation', 'Compute Shaders', 'Physics', 'Unity'],
    category: 'Simulation',
    demoUrl: 'https://fluid-sim-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/fluid-simulation',
  },
  {
    id: 'shader-playground',
    title: 'WebGL Shader Playground',
    description: 'Interactive shader editor for WebGL with live preview, parameter tuning, and export to Three.js materials.',
    tags: ['WebGL', 'GLSL', 'Three.js', 'React'],
    category: 'WebXR',
    demoUrl: 'https://shader-playground.example.com',
    githubUrl: 'https://github.com/mechtech-star/shader-playground',
  },
  {
    id: 'ar-placement',
    title: 'AR Object Placement System',
    description: 'Surface detection and physics-aware object placement for mobile AR with occlusion and lighting estimation.',
    tags: ['ARKit', 'ARCore', 'Unity', 'Computer Vision'],
    category: 'Unity XR',
    demoUrl: 'https://ar-placement-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/ar-placement',
  },
  {
    id: 'nn-visualization',
    title: 'Neural Network Visualization',
    description: '3D interactive visualization of neural network architectures and training processes in real-time.',
    tags: ['ML', 'Three.js', 'WebGL', 'Data Viz'],
    category: 'Experiments',
    demoUrl: 'https://nn-viz.example.com',
    githubUrl: 'https://github.com/mechtech-star/nn-visualization',
  },
  {
    id: 'particle-benchmark',
    title: 'Particle System Benchmark',
    description: 'Performance testing framework comparing GPU particle systems across Unity, Three.js, and Babylon.js.',
    tags: ['Performance', 'Benchmark', 'Compute', 'Analysis'],
    category: 'Experiments',
    demoUrl: 'https://particle-benchmark.example.com',
    githubUrl: 'https://github.com/mechtech-star/particle-benchmark',
  },
  {
    id: 'path-planning',
    title: 'Multi-Agent Path Planning',
    description: 'Crowd simulation system with collision avoidance, navigation meshes, and emergent behavior patterns.',
    tags: ['Simulation', 'AI', 'Pathfinding', 'Unity'],
    category: 'Simulation',
    demoUrl: 'https://path-planning-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/path-planning',
  },
];

// Helper functions
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projectsData.filter(project => project.category === category);
};

export const getAllCategories = (): Project['category'][] => {
  const categories = new Set<Project['category']>();
  projectsData.forEach(project => categories.add(project.category));
  return Array.from(categories);
};
