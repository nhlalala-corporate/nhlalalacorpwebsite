// server/api/clients.get.ts
export default defineEventHandler(async (event) => {
  // Sample testimonials/clients data
  // In a real implementation, this would come from a database or content source
  const testimonials = [
    {
      id: 1,
      name: 'Matsobane Masenya',
      position: 'IT Manager, PRASA',
      company: 'PRASA',
      testimonial: 'Nhlalala Corporate delivered an exceptional cybersecurity solution that has significantly enhanced our data protection capabilities. Their team was professional and met all deadlines.',
      avatar: '/images/avatars/default-avatar-men.png'
    },
    {
      id: 2,
      name: 'Thokozile Mahlaola',
      position: 'CEO, The Cherry Blue House',
      company: 'The Cherry Blue House',
      testimonial: 'The website developed by Nhlalala Corporate has transformed our online presence. We\'ve seen a 40% increase in customer engagement since launch.',
      avatar: '/images/avatars/default-avatar-woman.png'
    },
    {
      id: 3,
      name: 'Kaveer Harrilall',
      position: 'Programme Manager, CSIR-SIM',
      company: 'CSIR',
      testimonial: 'Nhlalala Corporate delivered professional Business Analysis services to CSIR under the MCDP for Gamagara Local Municipality, demonstrating strong municipal insight and contributing to improved planning and decision-making.',
      avatar: '/images/avatars/default-avatar-men.png'
    }
  ]

  return testimonials
})
