import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'x17tdb24',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skAg8jM13CPbfcmpdy8pQIqFVhC4VKGnUlwiEa9PRU9RmvVMPVSC0G7BPOdUzjVjut2SuERnARokF8kxukfydNxPVcoaAyMTjJTdweA4eaBEDXuQ0caVTarY2jIUPQe8GK1bdknb7btsHJqhrguI3smMbKZVMWv0GM6gE02ATKjjHMpIKcUN',
  useCdn: false,
})
