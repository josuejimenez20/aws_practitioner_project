const { Client } = require('pg');

const connectionAWSPractitioner = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
})

const AWSPractitionerDBConnection = () => {

    connectionAWSPractitioner.connect(function (error) {
        if (error) throw error;
        console.log('AWS Practitioner Data Base Connected');
    })

}

module.exports = {
    AWSPractitionerDBConnection,
    connectionAWSPractitioner
};