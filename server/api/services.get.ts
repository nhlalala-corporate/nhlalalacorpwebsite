export default defineEventHandler(() => {
  const services = [
    {
      id: '1',
      name: 'Consulting Services',
      description: 'With our wealth of industry expertise, we offer strategic consulting services to help businesses navigate the complexities of the digital landscape and unlock new opportunities for growth.',
      category: 'Strategy',
      icon: 'chart-bar',
      features: [
        'Business process analysis',
        'Technology strategy development',
        'Digital transformation planning',
        'Implementation guidance'
      ]
    },
    {
      id: '2',
      name: 'Cybersecurity',
      description: 'In recognizing the importance of safeguarding digital assets, we provide comprehensive cybersecurity services to protect against evolving threats and vulnerabilities.',
      category: 'Security',
      icon: 'shield-check',
      features: [
        'Risk assessment',
        'Security architecture design',
        'Penetration testing',
        'Incident response',
        'Security awareness training'
      ]
    },
    {
      id: '3',
      name: 'Software Development',
      description: 'Through leveraging agile methodologies and best-in-class technologies, we develop custom software solutions that streamline operations and enhance efficiency.',
      category: 'Development',
      icon: 'code-bracket',
      features: [
        'Full-stack development',
        'API development',
        'Cloud-native applications',
        'Legacy system modernization',
        'Custom software solutions'
      ]
    },
    {
      id: '4',
      name: 'Website Development',
      description: 'With WordPress web development and graphics design services, we deliver tailored solutions that merge creativity with functionality to elevate online presence and brand identity.',
      category: 'Development',
      icon: 'globe-alt',
      features: [
        'Custom website development',
        'WordPress solutions',
        'E-commerce platforms',
        'Responsive design',
        'Ongoing maintenance and support'
      ]
    },
    {
      id: '5',
      name: 'Data Management',
      description: 'By harnessing the power of data, we offer advanced analytics solutions that enable businesses to derive actionable insights and make informed decisions.',
      category: 'Analytics',
      icon: 'circle-stack',
      features: [
        'Data warehousing',
        'Business intelligence',
        'Data visualization',
        'Big data analytics',
        'Data governance solutions'
      ]
    },
    {
      id: '6',
      name: 'Infrastructure Solutions',
      description: 'From network architecture to cloud services, we design and implement robust infrastructure solutions that form the backbone of modern enterprises.',
      category: 'Infrastructure',
      icon: 'server',
      features: [
        'Cloud migration services',
        'Infrastructure as a service (IaaS)',
        'Platform as a service (PaaS)',
        'Network design and implementation',
        'Infrastructure management'
      ]
    }
  ]

  return { services }
})