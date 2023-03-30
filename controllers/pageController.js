const getIndexPage = (req, res) => {
    res.render("index", {
        link: "index",
        title: "Anasayfa"
    })
}

const getAboutPage = (req, res) => {
    res.render("about", {
        link: "about",
        title: "Hakkımızda"
    })
}

const getRegisterPage = (req, res) => {
    res.render("register", {
        link: "register",
        title: "Kayıt Ol"
    })
}

const getLoginPage = (req, res) => {
    res.render("login", {
        link: "login",
        title: "Giriş Yap"
    })
}

export { getIndexPage, getAboutPage, getRegisterPage, getLoginPage }