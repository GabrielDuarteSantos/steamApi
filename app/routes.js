const axios = require('axios');

module.exports = () => {

    axios.get('http://localhost:5001').then(res => {

        console.log(res.data)

    }).catch(err => {

        console.log(err.message);

    });

}