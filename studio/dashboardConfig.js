export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6048323c621dd35d86c8f2ec',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yqawz4nf',
                  apiId: '333c26d5-1a7e-49c7-be90-e3e8255f675d'
                },
                {
                  buildHookId: '6048323cbc2d3f4513b4c0b9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k3471pau',
                  apiId: 'ad06ea7b-5675-4098-b3b1-fb3ab853e7a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/macoughl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k3471pau.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
