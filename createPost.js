const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(_dirname, 'posts', 'blogPost.txt'), 'Hello World - This is Manoswita', (err) => {
    if (err)
    {
        throw err;
    }
    console.log('file created')
})