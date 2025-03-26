class user_controller {
    index(req, res) {
        res.render("index", { user });
    }
}