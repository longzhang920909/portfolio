import { useTheme } from 'styled-components';
import { TTimelineItemProps } from '../../../../ui/timeline-item/assets/timeline-item.model.ts';

const useTimelineData: () => TTimelineItemProps[] = () => {
  const theme = useTheme();
  const color = theme.palette.secondary.main;

  return [
    {
      title: 'Front-end (React) developer',
      text: 'Participate in the development of a CRM system using React and Typescript, implementing FSD architecture principles.\nCreate a UI library based on MUI.\nRefactor project structures and optimize code in accordance with SOLID, DRY, and KISS principles.',
      date: 'May 2023 - present',
      chips: [
        { label: 'React', color },
        { label: 'Redux', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'SCSS', color },
        { label: 'Storybook', color },
        { label: 'MUI', color },
        { label: 'RTK Query', color },
        { label: 'GraphQL', color },
        { label: 'NodeJS', color },
        { label: 'Express', color },
      ],
    },
    {
      title: 'Front-end developer',
      text: 'Website markup and integration into CMS WordPress, coupled with optimization and modifications to pre-existing websites.',
      date: 'Mar 2022 - May 2023',
      chips: [
        { label: 'HTML', color },
        { label: 'JavaScript', color },
        { label: 'CSS', color },
        { label: 'SCSS', color },
        { label: 'PHP', color },
        { label: 'WordPress', color },
      ],
    },
  ];
};

export default useTimelineData;
