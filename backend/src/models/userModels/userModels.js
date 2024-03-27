const { queryToAWSPractitionerDB } = require('../../database/queryAWSPraticionerDB');

const logInModels = async (userData) => {

    const { email, password } = userData;

    const query = `
    
    SELECT * FROM users us
    WHERE us.email = '${email}' AND us.password = '${password}';
    `;

    try {

        const result = await queryToAWSPractitionerDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

const signInUserModels = async (userData) => {

    const { user_id, email,
        password, name, lastname } = userData;

    const query = `
    
    INSERT INTO users 
        (user_id, email, password,
        name, lastname) 
        VALUES ('${user_id}', '${email}','${password}',
        '${name}','${lastname}');
    `;

    try {

        const result = await queryToAWSPractitionerDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

const verifyUserAuthenticationModels = async (userData) => {

    const { email } = userData;

    const query = `
    
    SELECT * 
    FROM users us
    WHERE us.email = '${email}';
    `;

    try {

        const result = await queryToAWSPractitionerDB(query);

        return result;
    } catch (error) {
        return error;
    }
}

module.exports = {
    logInModels,
    signInUserModels,
    verifyUserAuthenticationModels
}