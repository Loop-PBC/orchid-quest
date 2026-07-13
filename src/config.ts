export const siteConfig = {
  site: 'https://orchid.quest',
  name: 'USS Orchid',
  title: 'Orchid Quest',
  operator: 'Automn Quill',
  organization: 'Loop Cybernetics PBC',
  description:
    'An interactive digital constellation charting cybernetics, augmentative communication, computational semantics, and Q.U.I.L.L.',
  mission:
    'To envision. To seek out new ideas and new possibilities. To boldly think what no mind has thought before.',
  nav: [
    { href: '/', label: 'Bridge' },
    { href: '/constellation/', label: 'Astrogation' },
    { href: '/log/', label: "Ship's Log" },
    { href: '/missions/first-contact/', label: 'Missions' },
    { href: '/about/', label: 'Manifest' }
  ]
} as const;
