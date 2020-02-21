const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body
        const { session } = req
        const db = req.app.get('db')
        let user = await db.check_user([username])
        user = user[0]
        if (user) {
            return res.status(400).send('user already exists')
        }
        const salt = bcrypt.genSaltSync(5)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register_user([username, hash])
        newUser = newUser[0]

        return res.status(200).send(newUser)
    },
    newPost: async (req, res) => {
        const { title, img, content } = req.body
        const db = req.app.get('db')
        let post = await db.add_post([title, img, content])
        return res.status(200).send(post)
    },
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        let posts = await db.get_posts()
        return res.status(200).send(posts)
    },
    login: async (req, res) => {
        const { username, password } = req.body
        const { session } = req
        const db = req.app.get('db')
        let user = await db.check_user([username])
        user = user[0]
        if (!user) {
            return res.status(400).send('Username not found')
        }
        const authenticated = bcrypt.compareSync(password, user.password)
        if (authenticated) {
            delete user.password
            session.user = user
            res.status(200).send(session.user)
        } else {
            res.status(500).send('sry man, password protection too good, get rekt')

        }
    }
}