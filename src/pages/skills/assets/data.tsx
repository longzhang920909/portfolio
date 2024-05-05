import CssIcon from '../../../ui/icons/css-icon.tsx';
import ExpressIcon from '../../../ui/icons/express-icon.tsx';
import FigmaIcon from '../../../ui/icons/figma-icon.tsx';
import HtmlIcon from '../../../ui/icons/html-icon.tsx';
import JavascriptIcon from '../../../ui/icons/javascript-icon.tsx';
import JiraIcon from '../../../ui/icons/jira-icon.tsx';
import MongodbIcon from '../../../ui/icons/mongodb-icon.tsx';
import MuiIcon from '../../../ui/icons/mui-icon.tsx';
import NodejsIcon from '../../../ui/icons/nodejs-icon.tsx';
import PixsoIcon from '../../../ui/icons/pixso-icon.tsx';
import ReactIcon from '../../../ui/icons/react-icon.tsx';
import ReduxIcon from '../../../ui/icons/redux-icon.tsx';
import SassIcon from '../../../ui/icons/sass-icon.tsx';
import StorybookIcon from '../../../ui/icons/storybook-icon.tsx';
import TypescriptIcon from '../../../ui/icons/typescript-icon.tsx';
import VSCodeIcon from '../../../ui/icons/vscode-icon.tsx';
import WebstormIcon from '../../../ui/icons/webstorm-icon.tsx';

export const skillGroups = [
  {
    title: '> Programming languages',
    chips: [
      { icon: <JavascriptIcon />, label: 'JavaScript', color: '#F4DE26' },
      { icon: <TypescriptIcon />, label: 'TypeScript', color: '#397CC6' },
    ],
  },
  {
    title: '> Front end',
    chips: [
      { icon: <HtmlIcon />, label: 'HTML5', color: '#F16529' },
      { icon: <CssIcon />, label: 'CSS3', color: '#33A9DC' },
      { icon: <SassIcon />, label: 'SASS/SCSS', color: '#CD6C9B' },
      { icon: <ReactIcon />, label: 'React', color: '#53C1DE' },
      { icon: <ReduxIcon />, label: 'Redux', color: '#764ABC' },
      { icon: <MuiIcon />, label: 'MUI', color: '#00B0FF' },
      { icon: <StorybookIcon />, label: 'Storybook', color: '#FF4785' },
    ],
  },
  {
    title: '> Back end',
    chips: [
      { icon: <NodejsIcon />, label: 'NodeJS', color: '#8CC84B' },
      { icon: <ExpressIcon />, label: 'Express', color: '#F7F7FF' },
      { icon: <MongodbIcon />, label: 'MongoDB', color: '#52AB4D' },
    ],
  },
  {
    title: '> Other tools',
    chips: [
      { icon: <WebstormIcon />, label: 'WebStorm', color: '#00CDD7' },
      { icon: <VSCodeIcon />, label: 'VS Code', color: '#28A0F1' },
      { icon: <FigmaIcon />, label: 'Figma', color: '#52AB4D' },
      { icon: <PixsoIcon />, label: 'Pixso', color: undefined },
      { icon: <JiraIcon />, label: 'Jira', color: '#2684FF' },
    ],
  },
];
