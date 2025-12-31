export default defineEventHandler(() => {
  const partners = [
    {
      id: '1',
      name: 'Teamwire',
      logo: '/images/partners/Teamwire.png',
      category: 'SaaS',
      description: 'Leading provider of communication software.'
    },
    {
      id: '2',
      name: 'AnyDesk',
      logo: '/images/partners/AnyDesk.png',
      category: 'SaaS',
      description: 'Leading provider of the secure and intuitive remote desktop app with innovative features, perfect for seamless remote desktop application across devices.'
    },
    {
      id: '3',
      name: 'Adobe',
      logo: '/images/partners/adobe.png',
      category: 'Creative Solutions',
      description: 'Global leader in digital media and digital marketing solutions.'
    },
    {
      id: '4',
      name: 'VMware',
      logo: '/images/partners/vmware.png',
      category: 'Cloud Infrastructure',
      description: 'Leading provider of cloud infrastructure and business mobility solutions.'
    },
    {
      id: '5',
      name: 'Veeam',
      logo: '/images/partners/Veeam.png',
      category: 'Security',
      description: 'Global provider of Cloud Backup solutions.'
    },
    {
      id: '6',
      name: 'DigiCert',
      logo: '/images/partners/digicert.png',
      category: 'Security',
      description: 'Global provider of SSL/TLS certificates and other identity and authentication solutions.'
    },
    {
      id: '7',
      name: 'ManagedEgine',
      logo: '/images/partners/ManageEngine.png',
      category: 'Software Solutions',
      description: 'Provider to take control of your IT, from your security, networks, and servers to your applications, service desk, Active Directory, desktops, and mobile devices.'
    },
    {
      id: '8',
      name: 'Lenovo',
      logo: '/images/partners/lenovo.png',
      category: 'Hardware',
      description: 'Global technology leader in PC and smart device innovation.'
    },
    {
      id: '9',
      name: 'NoThreat',
      logo: '/images/partners/microsoft.png',
      category: 'Cybersecurity',
      description: 'AI-Driven Security That Learns Faster Than Attackers.'
    },
    {
      id: '10',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Software',
      description: 'Leading provider of software, services, devices, and solutions.'
    },
  ]

  return { partners }
})
