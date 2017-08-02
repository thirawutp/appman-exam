const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');
const _ = require('lodash');

const app = express();

const delay = time =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });

app.use(cors());

app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.post('/api/login', async (req, res, next) => {
    const EMAIL = 'example@appman.co.th';
    const PASSWORD = 'password';
    const email = _.get(req, ['body', 'email']);
    const password = _.get(req, ['body', 'password']);

    await delay(3000);

    if (_.isNil(email) || _.isNil(password)) {
        return res.status(400).json({ msg: 'email or password can not be empty' });
    }

    if (!_.isString(email) || !_.isString(password)) {
        return res.status(400).json({ msg: 'email or password must be string' });
    }

    if (_.isEqual(EMAIL, email) && _.isEqual(PASSWORD, password)) {
        return res.status(200).json({ msg: 'OK' });
    } else {
        return res.status(401).json({ msg: 'email or password may be wrong' });
    }
});

app.listen(3000, () => console.log('app start @ port 3000'));
