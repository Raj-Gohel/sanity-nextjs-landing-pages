export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '634662677fc6152b42f173ba',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dfqz9oam',
                  apiId: 'ffd56dcc-d643-4bf7-9a00-efeb4368877e'
                },
                {
                  buildHookId: '634662670097ac2b685d19b8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ei3xzcrj',
                  apiId: '7ba179ad-35e8-4c36-a65f-b5a84f17fc26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Raj-Gohel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ei3xzcrj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
