const { connectionAWSPractitioner } = require('./connectionDatabase');

const queryToAWSPractitionerDB = async (query) => {
    try {
        const response = await connectionAWSPractitioner.query(query);
        return response.rows;
    } catch (error) {
        return error;
    }
};

module.exports = { queryToAWSPractitionerDB };