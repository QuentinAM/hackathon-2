import { publish } from 'gh-pages';

publish(
    'https://github.com/QuentinAM/hackathon-2/tree/front', // path to public directory
    {
        branch: 'front',
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