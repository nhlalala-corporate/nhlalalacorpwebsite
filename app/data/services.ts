// app/data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  details?: string;
}

export const services: Service[] = [
  {
    id: 'consulting',
    title: 'Consulting Services',
    description: 'With our wealth of industry expertise, we offer strategic consulting services to help businesses navigate the complexities of the digital landscape and unlock new opportunities for growth.',
    details: 'Our consulting services include business process analysis, technology strategy development, digital transformation planning, and implementation guidance.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'In recognizing the importance of safeguarding digital assets, we provide comprehensive cybersecurity services to protect against evolving threats and vulnerabilities.',
    details: 'Our cybersecurity solutions include risk assessment, security architecture design, penetration testing, incident response, and security awareness training.'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Through leveraging agile methodologies and best-in-class technologies, we develop custom software solutions that streamline operations and enhance efficiency.',
    details: 'We specialize in full-stack development, API development, cloud-native applications, legacy system modernization, and custom software solutions tailored to your business needs.'
  },
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'With WordPress web development and graphics design services, we deliver tailored solutions that merge creativity with functionality to elevate online presence and brand identity.',
    details: 'Our web services include custom website development, WordPress solutions, e-commerce platforms, responsive design, and ongoing maintenance and support.'
  },
  {
    id: 'data-management',
    title: 'Data Management',
    description: 'By harnessing the power of data, we offer advanced analytics solutions that enable businesses to derive actionable insights and make informed decisions.',
    details: 'Our data services include data warehousing, business intelligence, data visualization, big data analytics, and data governance solutions.'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Solutions',
    description: 'From network architecture to cloud services, we design and implement robust infrastructure solutions that form the backbone of modern enterprises.',
    details: 'We provide cloud migration services, infrastructure as a service (IaaS), platform as a service (PaaS), network design and implementation, and infrastructure management.'
  }
];