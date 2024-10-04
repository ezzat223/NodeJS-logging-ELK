const logger = require('./logger')

const homeController = (req, res) => {
    try {
        logger.info("Welcome Home Page.");
        res.send("Welcome Home Page.");
    } catch (error) {
        console.log(error)
    }
}

const postController = (req, res) => {
    try {
        logger.info("Welcome Post Page.");
        res.send("Welcome Post Page.");
    } catch (error) {
        console.log(error)
    }
}


module.exports = { homeController, postController};