import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Chapter 1: Introduction',
      link: {
        type: 'doc',
        id: 'intro',
      },
      items: [
        'intro',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: Core Architecture of NVIDIA Isaac',
      items: [
        'core-architecture',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Simulation & Training in Isaac Sim',
      items: [
        'simulation-training',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 4: Deployment on Real Robots (Jetson Orin)',
      items: [
        'deployment-jetson',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 5: The Future of AI-Robot Brains',
      items: [
        'future-ai-robot-brains',
      ],
    },
  ],
};

export default sidebars;

