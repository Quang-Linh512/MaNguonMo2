const uses = {
    name: "Nguyen Van A",
    email: "vana@gmail.com",
};
class home_controller {
    index(req, res) {
        res.render("index", { user });
    }
}

module.exports = new home_controller();