var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/DavidML16/transporte-del-sur-web.git', // Update to point to your repository  
        user: {
            name: 'David Morales', // update to use your name
            email: 'davidmolv16@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)