export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d0dab0bd4d4ac6f10b07592',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qccxg3se',
                  apiId: 'e787c1e6-f5b3-4c16-a604-ec76fbfcc664'
                },
                {
                  buildHookId: '5d0dab0ce863ed708dac6ee7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-64nkje3t',
                  apiId: '3e78f380-d3f3-4a89-a921-694db4c61a35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dingyi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-64nkje3t.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
