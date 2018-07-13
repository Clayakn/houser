module.exports = {
    // Create
    create: (req, res, next) => {
        const {name, address, city, state, zip } = req.body
        req.app.get('db').create_house({name, address, city, state, zip})
        .then(newHouses => {res.status(200).json(newHouses);})
        .catch(error => {
            console.log('error on create controller', error)
            res.status(500).send('There was an error on the server')
        })
    },
    // Read
    readAll: (req, res, next) => {
        req.app.get('db').read_houses()
        .then(houses => res.status(200).json(houses))
        .catch(error => {
            console.log('error on readAll controller', error)
            res.status(500).send('There was an error on the server')
        })
    },
    // Delete
    delete: (req, res, next) => {
        const { id } = req.params
        req.app.get('db').delete_house([id])
        .then( (houses) => res.status(200).json(houses))
        .catch(error => {
            console.log('error on delete controller', error)
            res.status(500).send('There was an error on the server')
        })
    },
}