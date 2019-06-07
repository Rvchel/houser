
module.exports = {



    getHouse : (req, res) => {
    const db = req.app.get('db'),
    {id} = req.params;
    
    db.get_house()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).send(`get_house: ${error}`))
    },



    deleteHouse: (req, res, next) => {
        const db = req.app.get('db'),
        {id} = req.params
    
        db.delete_house(id)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(500).send(`delete: ${error}`))
    },



    updateHouse: (req,res) => {
    const db = req.app.get('db'),
    { name, city, state, zipcode, image_url, monthly_rent, monthly_mortgage } = req.body,
    { id } = req.params
    
    db.edit_house( id, name, city, state, zipcode, image_url, monthly_rent, monthly_mortgage )
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).send(`controller update: ${error}`))
    },



    addHouse: (req,res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip_code, image_url, mortgage, rent} = req.body
        db.add_house([name, address, city, state, zip_code, image_url, mortgage, rent])
            .then(response => {
                console.log(response)
                res.status(200).send(response)
            })
            .catch(error =>{
                res.status(500).send({errorMessage:`ADD ${error}`})
            })
    }

};