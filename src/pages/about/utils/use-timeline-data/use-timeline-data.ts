import { useTheme } from 'styled-components';
import { TTimelineItemProps } from '../../../../ui/timeline-item/assets/timeline-item.model.ts';

const useTimelineData: () => TTimelineItemProps[] = () => {
  const theme = useTheme();
  const color = theme.palette.secondary.main;

  return [
    {
      title: 'Senior Web & Blockchain developer',
      text: 'Multisig or validator based bridges, optimizes for high security and low cost with a medium latency of transfer.\n' +
        'Crosschain bridge smart contracts and Defi projects on the cosmoc-based chain like Terra.\n' +
        'Crosschain swap/Liquidity/Farming/Staking smart contracts.\n' +
        'Crosschain NFT marketplace, NFT Game (Genesis NFT).\n' + 
        'Deep knowledge of Terra protocols such as Anchor, Mirror protocol.',
      date: '04/2023 - present',
      chips: [
        { label: 'React', color },
        { label: 'Next', color },
        { label: 'Redux', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'Solidity', color },
        { label: 'Ethereum', color },
        { label: 'Rust', color },
        { label: 'Web3.js', color },
      ],
    },
    {
      title: 'Senior Web Developer',
      text: 'Implemented features for the main site and internal applications using TypeScript, Reac, Python and SQLAlchemy.\n' +
        'Implemented a method for efficiency tracking the flow of funds between different addresses.\n' +
        'Built a web-based intranet application to streamline the process of managing in-house training data within the organization.',
      date: '05/2019 - 10/2023',
      chips: [
        { label: 'React', color },
        { label: 'Redux', color },
        { label: 'TypeScript', color },
        { label: 'JavaScript', color },
        { label: 'SCSS', color },
        { label: 'SQLAlchemy', color },
        { label: 'Spring', color },
        { label: 'Struts', color },
        { label: 'Hibernate', color },
        { label: 'NodeJS', color },
        { label: 'Express', color },
      ],
    },
    {
      title: 'Web developer',
      text: 'Mastered the web basic technologies like as HTML, CSS, jQuery, JavaScript, MySQL, MSSQL, MongoDB, Node, React, SCSS, etc.\n' +
        'Designed and developed RESTful web services, tested web services using SOAP UI.\n' +
        'Worked to solve complex problems using latest in Cloud and Web Technologies.',
      date: '11/2017 - 04/2019',
      chips: [
        { label: 'HTML', color },
        { label: 'JavaScript', color },
        { label: 'CSS', color },
        { label: 'SCSS', color },
        { label: 'JQuery', color },
        { label: 'MySQL', color },
        { label: 'MSSQL', color },
        { label: 'MongoDB', color },
        { label: 'Node', color },
        { label: 'Express', color },
        { label: 'React', color },
      ],
    },
  ];
};

export default useTimelineData;
