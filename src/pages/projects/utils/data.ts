import { TProjectProps } from '../../../components/project/assets/project.model.ts';

const useProjectData: () => (TProjectProps & {
  categories: string[];
})[] = () => {
  return [
    {
      img: '/projects/taskhub.png',
      title: '"TaskHub" - Task Management',
      description:
        'Minimalist task manager, my first full-stack project. Powered by React and MUI on the front end, and NodeJS on the back end.',
      href: 'https://tasks-isemilia.vercel.app/',
      chips: [
        { children: 'Desktop only', color: 'primary' },
        { children: 'React', color: 'secondary' },
        { children: 'Redux', color: 'secondary' },
        { children: 'RTK Query', color: 'secondary' },
        { children: 'TypeScript', color: 'secondary' },
        { children: 'MUI', color: 'secondary' },
        { children: 'SCSS', color: 'secondary' },
        { children: 'NodeJS', color: 'secondary' },
        { children: 'Express', color: 'secondary' },
        { children: 'MongoDB', color: 'secondary' },
      ],
      links: [
        {
          label: 'Source',
          type: 'source',
          href: 'https://github.com/isemilia/task-management',
        },
        {
          label: 'Docs',
          type: 'docs',
          href: 'https://isemilia.notion.site/Task-Management-Dev-Docs-b4e7911988a743bbb4e2bb562c97e2c3?pvs=4',
        },
        {
          label: 'Back end',
          type: 'default',
          href: 'https://github.com/isemilia/task-management-backend',
        },
      ],
      categories: ['spa', 'back-end'],
    },
    {
      img: '/projects/fast-pace.png',
      title: '"Fast Pace" - Sneaker Store',
      description:
        'ReactJS store with order placement, catalog browsing, and color/price filtering.',
      href: 'https://fast-pace.vercel.app/',
      chips: [
        { children: 'Responsive', color: 'primary' },
        { children: 'React', color: 'secondary' },
        { children: 'JavaScript', color: 'secondary' },
        { children: 'Redux', color: 'secondary' },
        { children: 'CSS', color: 'secondary' },
        { children: 'SCSS', color: 'secondary' },
      ],
      links: [
        {
          label: 'Source',
          type: 'source',
          href: 'https://github.com/isemilia/fast-pace-app',
        },
      ],
      categories: ['spa'],
    },
    {
      img: '/projects/weather.png',
      title: 'Weather App',
      description:
        'Web-based weather app that displays information about any city.',
      href: 'https://weather-app-by-emilia.vercel.app/',
      chips: [
        { children: 'Responsive', color: 'primary' },
        { children: 'React', color: 'secondary' },
        { children: 'JavaScript', color: 'secondary' },
        { children: 'CSS', color: 'secondary' },
        { children: 'SCSS', color: 'secondary' },
        { children: 'OpenWeather API', color: 'secondary' },
      ],
      links: [
        {
          label: 'Source',
          type: 'source',
          href: 'https://github.com/isemilia/weather-react',
        },
      ],
      categories: ['spa'],
    },
    {
      img: '/projects/stopwatch.png',
      title: 'Stopwatch & Notes',
      description:
        'Web-based stopwatch with note-taking feature and local storage for data persistence. One of my oldest projects.',
      href: 'https://isemilia.github.io/stopwatch/dist/',
      categories: ['plain'],
      chips: [
        { children: 'Responsive', color: 'primary' },
        { children: 'HTML', color: 'secondary' },
        { children: 'CSS', color: 'secondary' },
        { children: 'SCSS', color: 'secondary' },
        { children: 'JavaScript', color: 'secondary' },
      ],
      links: [
        {
          label: 'Source',
          type: 'source',
          href: 'https://github.com/isemilia/stopwatch',
        },
      ],
    },
    {
      img: '/projects/date-countdown.png',
      title: 'Date Countdown',
      description:
        'Web-based date countdown tool with persistent data on refresh. One of my earliest JS apps.',
      href: 'https://isemilia.github.io/date-calculator/app',
      categories: ['plain'],
      chips: [
        { children: 'Responsive', color: 'primary' },
        { children: 'HTML', color: 'secondary' },
        { children: 'CSS', color: 'secondary' },
        { children: 'SCSS', color: 'secondary' },
        { children: 'JavaScript', color: 'secondary' },
      ],
      links: [
        {
          label: 'Source',
          type: 'source',
          href: 'https://github.com/isemilia/date-calculator',
        },
      ],
    },
  ];
};

export default useProjectData;
