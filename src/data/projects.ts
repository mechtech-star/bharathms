export interface Project {
  id: string;
  title: string;
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
    id: 'webxr-collaboration',
    title: 'WebXR Spatial Collaboration Platform',
    description: 'Multi-user browser-based XR environment with real-time synchronization, spatial audio, and persistent world state.',
    longDescription: 'Real-time multi-user collaboration in browser-based XR environments with spatial audio, hand tracking, and persistent state synchronization.',
    tags: ['WebXR', 'Three.js', 'WebSocket', 'Node.js', 'Spatial Audio', 'WebRTC'],
    category: 'WebXR',
    demoUrl: 'https://webxr-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/webxr-collaboration',
    problemStatement: 'Existing collaboration tools for XR require native apps, proprietary platforms, or complex setup. Teams needed a way to meet in shared 3D spaces instantly — accessible through a web browser, supporting multiple simultaneous users, with natural spatial audio and hand-tracked interactions. The system had to work on Quest, desktop VR, and flat screens simultaneously.',
    systemOverview: [
      'The platform is built on WebXR APIs for device compatibility, Three.js for rendering, and a custom Node.js server for state synchronization. Client-side prediction and server reconciliation handle network latency. Spatial audio uses Web Audio API with HRTF positioning.',
      'The architecture separates presentation (Three.js scene), interaction (XR input handling), and networking (WebSocket + WebRTC data channels). This allows graceful degradation — users on flat screens see the same world but with mouse/keyboard controls.'
    ],
    keyDecisions: [
      {
        title: 'WebXR Over Native',
        description: 'Choosing WebXR reduced deployment friction massively. No app store approval, instant updates, and users join via URL. Trade-off: slightly lower performance ceiling, but worth it for accessibility.'
      },
      {
        title: 'Hybrid WebSocket + WebRTC',
        description: 'WebSocket handles signaling and state sync. WebRTC data channels handle high-frequency positional updates. This hybrid approach balances reliability with low latency.'
      },
      {
        title: 'Client-Side Prediction',
        description: 'Movements feel instant locally, reconciled with server state on the next tick. This makes 200ms+ latency tolerable while maintaining synchronized state.'
      },
      {
        title: 'Minimal Asset Complexity',
        description: 'All 3D models are sub-50k polygons with baked lighting. Textures are compressed. This ensures smooth 72fps even on Quest 2 with 8 simultaneous users.'
      }
    ],
    assetConsiderations: [
      {
        title: 'Mesh Optimization',
        description: 'All meshes processed through geometry compression. Shared geometries instanced. Dynamic objects use simplified collision meshes separate from visual meshes.'
      },
      {
        title: 'Material Pipeline',
        description: 'Standard PBR materials with atlas-packed textures. Normal maps only on hero assets. All materials use the same shader variant to reduce state changes.'
      },
      {
        title: 'Animation System',
        description: 'Hand tracking animations use blend shapes for finger poses. Avatar bodies use skeletal animation with IK for foot placement. Animations compressed using keyframe reduction.'
      },
      {
        title: 'Performance Budget',
        description: 'Target: 72fps on Quest 2. Budget: 500k triangles total scene, 100 draw calls max, 2ms physics, 5ms networking per frame. Profiled continuously during development.'
      }
    ],
    outcomes: {
      whatWorked: [
        'WebXR deployment was friction-free — users joined sessions within seconds',
        'Spatial audio created natural presence; users reported "forgetting it was remote"',
        'Client-side prediction made interactions feel responsive despite network latency',
        'Performance budget discipline paid off — stable 72fps with 8 users consistently'
      ],
      whatImprove: [
        'State reconciliation logic became complex; would use existing framework next time',
        'Initial load time was 8-12 seconds; progressive loading of assets would help',
        'Hand tracking wasn\'t reliable on all devices; fallback controller UI needed refinement',
        'Server scaling required custom load balancing; cloud-native solution would simplify ops'
      ]
    }
  },
  {
    id: 'unity-training',
    title: 'Unity XR Training Simulation',
    description: 'Immersive medical training platform with haptic feedback, performance analytics, and adaptive difficulty systems.',
    tags: ['Unity', 'XR Toolkit', 'C#', 'ML Agents'],
    category: 'Unity XR',
    demoUrl: 'https://unity-training-demo.example.com',
    githubUrl: 'https://github.com/mechtech-star/unity-xr-training',
    problemStatement: 'Medical training requires hands-on practice but traditional methods are costly, dangerous, or limited in scale. Training institutions needed immersive simulations with real-time performance analytics, adaptive difficulty that scales to learner ability, and haptic feedback for procedural training.',
    systemOverview: [
      'Built on Unity XR Toolkit with OpenXR backend for cross-platform VR device support. Uses ML Agents for intelligent scenario adaptation. Performance metrics tracked in real-time with ML-based difficulty scaling.',
      'Architecture combines procedural scenario generation, haptic feedback systems via device-specific APIs, and a cloud backend for analytics. Supports both standalone headsets and PC-based VR.'
    ],
    keyDecisions: [
      {
        title: 'ML-Driven Difficulty Adaptation',
        description: 'Instead of static difficulty levels, the system uses ML Agents to analyze learner performance in real-time and dynamically adjust scenario complexity, ensuring optimal challenge.'
      },
      {
        title: 'Haptic Feedback Integration',
        description: 'Critical for procedural training. Integrated with multiple haptic systems (controller haptics, body suits) to provide realistic tactile feedback during simulated procedures.'
      },
      {
        title: 'Distributed Analytics',
        description: 'Performance data streamed to cloud backend for institutional dashboards. Enables instructors to monitor learner progress across cohorts without latency.'
      }
    ],
    assetConsiderations: [
      {
        title: 'Medical Model Accuracy',
        description: 'High-poly anatomical models with PBR materials. Uses LOD systems to maintain 90fps on medical workstations while preserving surgical detail.'
      },
      {
        title: 'Procedural Animation',
        description: 'Realistic physics-based deformation for soft tissue simulation. IK rigs for procedural hand animation following learner hand tracking.'
      }
    ],
    outcomes: {
      whatWorked: [
        'Institutions reported 40% faster learner progression compared to traditional methods',
        'Haptic feedback significantly improved procedural muscle memory retention',
        'ML adaptation kept learners in optimal challenge zone (flow state)',
        'Cloud analytics enabled data-driven curriculum improvements'
      ],
      whatImprove: [
        'Initial model creation pipeline was labor-intensive; need better medical asset workflows',
        'Haptic device compatibility matrix grew complex; would standardize earlier',
        'Network latency affected real-time analytics; edge computing would help'
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
