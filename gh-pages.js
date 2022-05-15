import { publish } from 'gh-pages';

publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://quentinam.github.io/hackathon-2/', // Update to point to your repository  
        user: {
            name: 'quentinam', // update to use your name
            email: 'quentin.abel-marceau@epita.fr' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)