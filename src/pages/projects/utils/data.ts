import { TProjectProps } from '../../../components/project/assets/project.model.ts';

const useProjectData: () => (TProjectProps)[] = () => {
  return [
    {
      img: '/projects/coinzix.png',
      title: '"COINZIX" - ',
      description:
        'COINZIX is a world-class cryptocurrency exchange platform accessible to everyone with an integrated ATM network. Simple. Safe. Reliable. We make crypto easy.',
      href: 'https://defi.coinzix.com',
      chips: [
        { children: 'Full Responsive', color: 'primary' },
        { children: 'React', color: 'secondary' },
        { children: 'Node', color: 'secondary' },
        { children: 'MongoDB', color: 'secondary' },
        { children: 'Weeb3.js', color: 'secondary' },
        { children: 'Rust', color: 'secondary' },
      ]
    },
    {
      img: '/projects/casino.png',
      title: '"CasinoGame" - ',
      description:
        'This game is made for fum only! It is just a game and no real money is involved. What is the purpost of this? To enjoy games from a casino while playing for fake points.',
      href: 'https://casino-game-list.onrender.com/',
      chips: [
        { children: 'Full Responsive', color: 'primary' },
        { children: 'Vue.js', color: 'secondary' },
        { children: 'TailwindCSS', color: 'secondary' },
        { children: 'MongoDB', color: 'secondary' },
        { children: 'Cloudflare', color: 'secondary' },
        { children: 'Redux', color: 'secondary' },
      ]
    },
    {
      img: '/projects/hunterdoge.png',
      title: '"Hunterdoge" - ',
      description:
        'Hunterdoge is a voting site for the tokens. You can vote the most popular tokens.',
      href: 'https://hunterdoge.onrender.com/',
      chips: [
        { children: 'Full Responsive', color: 'primary' },
        { children: 'React', color: 'secondary' },
        { children: 'Emotion', color: 'secondary' },
        { children: 'PostgreSQL', color: 'secondary' },
        { children: 'Solidity', color: 'secondary' },
        { children: 'web3.js', color: 'secondary' },
      ]
    },
    {
      img: '/projects/kandyland.png',
      title: '"Kindyland" - ',
      description:
        'Kindyland is a typical mint site.',
      href: 'https://kandyland-wupv.onrender.com/',
      chips: [
        { children: 'Full Responsive', color: 'primary' },
        { children: 'React', color: 'secondary' },
        { children: 'MUI', color: 'secondary' },
        { children: 'PWA', color: 'secondary' },
        { children: 'Ethers', color: 'secondary' },
        { children: 'StyledComponents', color: 'secondary' },
      ]
    },
    {
      img: '/projects/lumos.png',
      title: '"Lumos" - ',
      description:
        'Lumos is a P2P trading site for Solana.',
      href: 'https://solana-transaction-rumos.onrender.com/',
      chips: [
        { children: 'Full Responsive', color: 'primary' },
        { children: 'React', color: 'secondary' },
        { children: 'Node', color: 'secondary' },
        { children: 'PostgreSQL', color: 'secondary' },
        { children: 'Weeb3.js', color: 'secondary' },
        { children: 'Solidity', color: 'secondary' },
      ]
    },
  ];
};

export default useProjectData;
