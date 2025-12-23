export default defineEventHandler(() => {
  const partners = [
    {
      id: '1',
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      category: 'Software',
      description: 'Leading provider of software, services, devices, and solutions.'
    },
    {
      id: '2',
      name: 'VMware',
      logo: '/images/partners/vmware.png',
      category: 'Cloud Infrastructure',
      description: 'Leading provider of cloud infrastructure and business mobility solutions.'
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
      name: 'McAfee',
      logo: '/images/partners/mcafee.png',
      category: 'Cybersecurity',
      description: 'Global leader in online security for consumers and businesses.'
    },
    {
      id: '5',
      name: 'DigiCert',
      logo: '/images/partners/digicert.png',
      category: 'Security',
      description: 'Global provider of SSL/TLS certificates and other identity and authentication solutions.'
    },
    {
      id: '6',
      name: 'Bitdefender',
      logo: '/images/partners/bitdefender.png',
      category: 'Cybersecurity',
      description: 'Global cybersecurity leader protecting over 500 million users.'
    },
    {
      id: '7',
      name: 'Lenovo',
      logo: '/images/partners/lenovo.png',
      category: 'Hardware',
      description: 'Global technology leader in PC and smart device innovation.'
    },
    {
      id: '8',
      name: 'S Software',
      logo: '/images/partners/ssoftware.png',
      category: 'Software Solutions',
      description: 'Provider of enterprise software solutions and services.'
    }
  ]

  return { partners }
})