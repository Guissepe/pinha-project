import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from '../../sm.json'
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Route resolving array
const routes = [
  {
    type: 'secondpage',
    path: '/Secondpage/:uid',
  },
  {
    type: 'Home',
    path: '/:uid',
  },
  {
    type: 'itemhotbar',
    path: '/hotbar/:uid',
  },
]

export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  })

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}