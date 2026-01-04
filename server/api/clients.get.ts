// server/api/clients.get.ts
export default defineEventHandler(async (event) => {
  // Sample testimonials/clients data
  // In a real implementation, this would come from a database or content source
  const testimonials = [
    {
      id: 1,
      name: 'David Anderson',
      position: 'IT Director, Department of Defence',
      company: 'Department of Defence',
      testimonial: 'Nhlalala Corporate delivered an exceptional cybersecurity solution that has significantly enhanced our data protection capabilities. Their team was professional and met all deadlines.',
      avatar: '/images/avatars/default-avatar.png'
    },
    {
      id: 2,
      name: 'Sarah Moloi',
      position: 'CEO, The Cherry Blue House',
      company: 'The Cherry Blue House',
      testimonial: 'The website developed by Nhlalala Corporate has transformed our online presence. We\'ve seen a 40% increase in customer engagement since launch.',
      avatar: '/images/avatars/default-avatar-woman.png'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'CTO, African Tech Solutions',
      company: 'African Tech Solutions',
      testimonial: 'Their infrastructure solutions have been rock solid. Uptime has improved dramatically since we migrated to their platform.',
      avatar: '/images/avatars/default-avatar.png'
    }
  ]

  return testimonials
})