const getIndexPage = (req, res) => {
    res.render("index",{
        link:"index",
        title:"Anasayfa"
    })
}

const getAboutPage = (req, res) => {
    res.render("about",{
        link:"about",
        title:"Hakkımızda"
    })
}

export {getIndexPage, getAboutPage}