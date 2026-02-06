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
  imageUrls?: string[];
  videoUrl?: string;
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
    shortTitle: 'XR Platform - Unity',

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
    id: 'productstudio3d',
    title: 'ProductStudio3D',
    description: 'A fully client-side WebGL product configurator built with React Three Fiber.',
    longDescription:
      'ProductStudio3D is a browser-based 3D product configurator that runs entirely on the client. It enables users to upload, inspect, configure, and export 3D models without relying on any backend or server-side processing.',

    category: 'WebXR',
    tags: [
      'WebGL',
      'Three.js',
      'React Three Fiber',
      '3D Configurator',
      'Frontend Only',
      'GLB',
      'Zustand'
    ],

    imageUrl: '/ProductStudio3D.jpg',
    imageUrls: ['/ProductStudio3D_Architecture.jpg', '/ProductStudio3D_2.jpg', '/ProductStudio3D_3.jpg'],
    videoUrl: 'https://www.youtube.com/watch?v=g7YoYVUIiCs',
    demoUrl: 'https://product-studio-3-d.vercel.app/',
    githubUrl: 'https://github.com/mechtech-star/product_studio_3D',

    problemStatement:
      'Most 3D product configurators depend on backend pipelines for model processing, storage, and export, which increases complexity, cost, and latency. ProductStudio3D explores whether a complete product configuration workflow - including import, editing, preview, and export - can be achieved entirely in the browser using modern WebGL and frontend tooling.',

    systemOverview: [
      'ProductStudio3D is architected around a single React Three Fiber canvas that hosts the entire 3D scene. All models, lights, environments, and helpers are composed declaratively while still allowing imperative control where necessary.',
      'A unified GLB pipeline ensures that all supported formats (GLB, GLTF, FBX, OBJ) are converted and processed consistently. Converted assets are cached in memory to reduce reload times and avoid repeated parsing.',
      'Application state is managed using Zustand, storing direct references to Three.js meshes, materials, and animation mixers for immediate scene mutations without unnecessary React re-renders.'
    ],

    keyDecisions: [
      {
        title: 'Frontend-only architecture',
        description:
          'The system intentionally avoids any backend services to demonstrate how far modern browsers can go in handling real-world 3D workflows entirely on the client.'
      },
      {
        title: 'Unified GLB rendering pipeline',
        description:
          'All imported formats are normalized into GLB to simplify rendering, editing, animation handling, and export logic.'
      },
      {
        title: 'State-driven scene control',
        description:
          'Zustand stores direct Three.js object references, enabling instant updates to materials, visibility, and animations without expensive reconciliation.'
      },
      {
        title: 'Studio lighting by default',
        description:
          'HDRI-based studio lighting was chosen to provide realistic material previews comparable to professional product visualization tools.'
      }
    ],

    assetConsiderations: [
      {
        title: 'Model format normalization',
        description:
          'Non-GLB formats are converted client-side to ensure predictable material handling, animation playback, and export behavior.'
      },
      {
        title: 'Memory management',
        description:
          'Explicit disposal of geometries, materials, and textures prevents GPU memory leaks when swapping or reloading models.'
      },
      {
        title: 'Material & texture inspection',
        description:
          'The system detects common PBR texture maps (base color, normal, roughness, metallic, AO) to provide clear visibility into asset quality.'
      },
      {
        title: 'Animation handling',
        description:
          'Animation clips are parsed and managed via a dedicated mixer hook, allowing controlled playback, speed adjustment, and inspection.'
      }
    ],

    outcomes: {
      whatWorked: [
        'Achieved a fully client-side 3D pipeline with no backend dependency',
        'Unified all imports into a single GLB-based workflow for consistent behavior',
        'Direct Three.js object references in state enabled fast, intuitive interactions',
        'Studio-style HDRI lighting significantly improved material preview quality',
        'Exporting configured scenes back to GLB validated real-world usability'
      ],
      whatImprove: [
        'Configuration persistence (presets / saved states) could improve usability',
        'Material editing could be extended with full PBR parameter controls',
        'Performance metrics and optimization tooling would help with large models',
        'Presentation features like snapshot galleries could enhance demos'
      ]
    }
  },
  {
    id: 'xr-training-foundation-webxr',
    title: 'XR Training Foundation (WebXR)',
    shortTitle: 'XR Foundation - WebXR',

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

    problemStatement:
      'Developers building XR training applications on the web often start from scratch - rebuilding XR setup, input handling, content pipelines, and backend integration each time. This slows development and limits scalability. A reusable, well-structured WebXR foundation was needed to standardize architecture and accelerate development.',

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
        'CMS-driven workflows reduced designer-developer dependency',
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
