import CssIcon from '../../../ui/icons/css-icon';
import ExpressIcon from '../../../ui/icons/express-icon';
import FigmaIcon from '../../../ui/icons/figma-icon';
import HtmlIcon from '../../../ui/icons/html-icon';
import JavascriptIcon from '../../../ui/icons/javascript-icon';
import JiraIcon from '../../../ui/icons/jira-icon';
import MongodbIcon from '../../../ui/icons/mongodb-icon';
import MuiIcon from '../../../ui/icons/mui-icon';
import NodejsIcon from '../../../ui/icons/nodejs-icon';
import PixsoIcon from '../../../ui/icons/pixso-icon';
import ReactIcon from '../../../ui/icons/react-icon';
import ReduxIcon from '../../../ui/icons/redux-icon';
import SassIcon from '../../../ui/icons/sass-icon';
import StorybookIcon from '../../../ui/icons/storybook-icon';
import TypescriptIcon from '../../../ui/icons/typescript-icon';
import VSCodeIcon from '../../../ui/icons/vscode-icon';
import WebstormIcon from '../../../ui/icons/webstorm-icon';
import GraphQLIcon from '../../../ui/icons/graphql-icon.tsx';
import PostgreSQLIcon from '../../../ui/icons/postgresql-icon.tsx';
import NextIcon from '../../../ui/icons/next-icon.tsx';
import MantineIcon from '../../../ui/icons/mantine-icon.tsx';
import TailwindIcon from '../../../ui/icons/tailwind-icon.tsx';

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
      { icon: <SassIcon />, label: 'SCSS', color: '#CD6C9B' },
      { icon: <ReactIcon />, label: 'React', color: '#53C1DE' },
      { icon: <NextIcon />, label: 'Next', color: undefined },
      { icon: <ReduxIcon />, label: 'Redux', color: '#764ABC' },
      { icon: <ReduxIcon />, label: 'RTK Query', color: '#764ABC' },
      { icon: <MantineIcon />, label: 'Mantine', color: '#339AF0' },
      { icon: <TailwindIcon />, label: 'Tailwind', color: '#44A8B3' },
      { icon: <MuiIcon />, label: 'MUI', color: '#00B0FF' },
      { icon: <StorybookIcon />, label: 'Storybook', color: '#FF4785' },
    ],
  },
  {
    title: '> Tools',
    chips: [
      { icon: <WebstormIcon />, label: 'WebStorm', color: '#00CDD7' },
      { icon: <VSCodeIcon />, label: 'VS Code', color: '#28A0F1' },
      { icon: <FigmaIcon />, label: 'Figma', color: '#F24E1E' },
      { icon: <PixsoIcon />, label: 'Pixso', color: undefined },
      { icon: <JiraIcon />, label: 'Jira', color: '#2684FF' },
    ],
  },
  {
    title: "> Other technologies I'm familiar with",
    chips: [
      { icon: <NodejsIcon />, label: 'NodeJS', color: '#8CC84B' },
      { icon: <ExpressIcon />, label: 'Express', color: '#F7F7FF' },
      { icon: <MongodbIcon />, label: 'MongoDB', color: '#52AB4D' },
      { icon: <GraphQLIcon />, label: 'GraphQL', color: '#E535AB' },
      { icon: <PostgreSQLIcon />, label: 'PostgreSQL', color: '#336791' },
    ],
  },
];
