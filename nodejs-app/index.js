const express = require('express');
const controllers = require('./controller')


const PORT = 8080;
const app = express();



app.get('/', controllers.homeController);
app.get('/post', controllers.postController);




app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})