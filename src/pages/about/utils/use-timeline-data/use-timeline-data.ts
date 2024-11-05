import { useTheme } from 'styled-components';
import { TTimelineItemProps } from '../../../../ui/timeline-item/assets/timeline-item.model.ts';

const useTimelineData: () => TTimelineItemProps[] = () => {
  const theme = useTheme();
  const color = theme.palette.secondary.main;

  return [
    {
      title: 'Middle front-end developer',
      text: 'Develop interfaces for various single-page applications using React, TypeScript and other technologies.',
      date: 'Oct 2024 - present',
      chips: [
        { label: 'React', color },
        { label: 'Redux', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'SCSS', color },
        { label: 'MUI', color },
        { label: 'RTK Query', color },
      ],
    },
    {
      title: 'Front-end developer',
      text: 'Participate in the development of a CRM system using React and Typescript, implementing FSD architecture principles.\nCreate a UI library based on MUI.\nRefactor project structure and optimize code in accordance with SOLID, DRY, and KISS principles.\nAssist in developing the back end for a chat widget using Web Sockets and MongoDB.',
      date: 'May 2023 - Oct 2024',
      chips: [
        { label: 'React', color },
        { label: 'Redux', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'SCSS', color },
        { label: 'Storybook', color },
        { label: 'MUI', color },
        { label: 'RTK Query', color },
        { label: 'MongoDB', color },
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
