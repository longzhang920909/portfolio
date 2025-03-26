import CssIcon from '../../../ui/icons/css-icon';
import ExpressIcon from '../../../ui/icons/express-icon';
import FigmaIcon from '../../../ui/icons/figma-icon';
import HtmlIcon from '../../../ui/icons/html-icon';
import JavascriptIcon from '../../../ui/icons/javascript-icon';
import JiraIcon from '../../../ui/icons/jira-icon';
import MongodbIcon from '../../../ui/icons/mongodb-icon';
import MuiIcon from '../../../ui/icons/mui-icon';
import PixsoIcon from '../../../ui/icons/pixso-icon';
import ReactIcon from '../../../ui/icons/react-icon';
import ReduxIcon from '../../../ui/icons/redux-icon';
import SassIcon from '../../../ui/icons/sass-icon';
import TypescriptIcon from '../../../ui/icons/typescript-icon';
import VSCodeIcon from '../../../ui/icons/vscode-icon';
import WebstormIcon from '../../../ui/icons/webstorm-icon';
import GraphQLIcon from '../../../ui/icons/graphql-icon.tsx';
import PostgreSQLIcon from '../../../ui/icons/postgresql-icon.tsx';
import NextIcon from '../../../ui/icons/next-icon.tsx';
import MantineIcon from '../../../ui/icons/mantine-icon.tsx';
import TailwindIcon from '../../../ui/icons/tailwind-icon.tsx';
import EthereumIcon from '../../../ui/icons/ethereum-icon.tsx';
import SolidityIcon from '../../../ui/icons/solidity-icon.tsx';
import RustIcon from '../../../ui/icons/rust-icon.tsx';
import GoIcon from '../../../ui/icons/go-icon.tsx';
import Web3dotjsIcon from '../../../ui/icons/web3-icon.tsx';
import ChainlinkIcon from '../../../ui/icons/chainlink-icon.tsx';
import HeliumIcon from '../../../ui/icons/helius-icon.tsx';
import StellaIcon from '../../../ui/icons/stella-icon.tsx';
import PolkadotIcon from '../../../ui/icons/polkadot-icon.tsx';
import FlutterIcon from '../../../ui/icons/flutter-icon.tsx';
import NodeIcon from '../../../ui/icons/node-icon.tsx';
import DjangoIcon from '../../../ui/icons/django-icon.tsx';
import PythonIcon from '../../../ui/icons/python-icon.tsx';
import PHPIcon from '../../../ui/icons/php-icon.tsx';
import CplusplusIcon from '../../../ui/icons/cpp-icon.tsx';
import SwiftIcon from '../../../ui/icons/swift-icon.tsx';
import MySQLIcon from '../../../ui/icons/mysql-icon.tsx';
import SQLAlchemyIcon from '../../../ui/icons/sqllite-icon.tsx';
import RedisIcon from '../../../ui/icons/redis-icon.tsx';

export const skillGroups = [
  {
    title: '> Programming languages',
    chips: [
      { icon: <JavascriptIcon />, label: 'JavaScript', color: '#F4DE26' },
      { icon: <TypescriptIcon />, label: 'TypeScript', color: '#397CC6' },
      { icon: <PythonIcon />, label: 'Python', color: '#52AB4D' },
      { icon: <PHPIcon />, label: 'PHP', color: '#53C1DE' },
      { icon: <CplusplusIcon />, label: 'C++', color: '#52AB4D' },
      { icon: <SwiftIcon />, label: 'Swift', color: '#764ABC' },
    ],
  },
  {
    title: '> Front end',
    chips: [
      { icon: <HtmlIcon />, label: 'HTML5', color: '#ffffff' },
      { icon: <CssIcon />, label: 'CSS3', color: '#33A9DC' },
      { icon: <SassIcon />, label: 'SCSS', color: '#CD6C9B' },
      { icon: <ReactIcon />, label: 'React', color: '#53C1DE' },
      { icon: <NextIcon />, label: 'Next', color: undefined },
      { icon: <ReduxIcon />, label: 'Redux', color: '#764ABC' },
      { icon: <MantineIcon />, label: 'Mantine', color: '#339AF0' },
      { icon: <TailwindIcon />, label: 'Tailwind', color: '#44A8B3' },
      { icon: <MuiIcon />, label: 'MUI', color: '#00B0FF' },
      { icon: <FlutterIcon />, label: 'Flutter', color: '#00B0FF' },
    ],
  },
  {
    title: '> Back end',
    chips: [
      { icon: <NodeIcon />, label: 'Node', color: '#44A8B3' },
      { icon: <ExpressIcon />, label: 'Express', color: '#CD6C9B' },
      { icon: <DjangoIcon />, label: 'Django', color: undefined },
      { icon: <GoIcon />, label: 'Go', color: '#00B0FF' },
    ],
  },
  {
    title: '> Crypto',
    chips: [
      { icon: <Web3dotjsIcon />, label: 'Web3.js', color: '#00B0FF' },
      { icon: <ChainlinkIcon />, label: 'Chainlink', color: '#44A8B3' },
      { icon: <HeliumIcon />, label: 'Helium', color: '#764ABC' },
      { icon: <StellaIcon />, label: 'Stella', color: '#33A9DC' },
      { icon: <PolkadotIcon />, label: 'Polkadot', color: '#33A9DC' },
      { icon: <EthereumIcon />, label: 'Ethereum', color: '#CD6C9B' },
      { icon: <SolidityIcon />, label: 'Solidity', color: '#764ABC' },
      { icon: <RustIcon />, label: 'Rust', color: '#52AB4D' },
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
    title: "> Databases",
    chips: [
      { icon: <MySQLIcon />, label: 'MySQL', color: '#8CC84B' },
      { icon: <MongodbIcon />, label: 'MongoDB', color: '#F24E1E' },
      { icon: <GraphQLIcon />, label: 'GraphQL', color: '#E535AB' },
      { icon: <PostgreSQLIcon />, label: 'PostgreSQL', color: '#336791' },
      { icon: <RedisIcon />, label: 'Redis', color: '#336791' },
      { icon: <SQLAlchemyIcon />, label: 'SQLAlchemy', color: '#00B0FF' },
    ],
  },
];
