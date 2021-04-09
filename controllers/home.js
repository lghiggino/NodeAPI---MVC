const homeController = {
    getIndex : (request, response) => {
            response.render("index.ejs")
        }
}

module.exports = homeController