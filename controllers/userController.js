let prisma = require('../app').prisma;

module.exports = {
    getAll: async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.end(JSON.stringify(await prisma.Users.findAll()));
    },
    getOne: async (req, res) => {
        let us = await prisma.Users.findFirst({where: { id: Number(req.params.us) }});
        if (us) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(us));
        }
        else {
            res.statusCode = 404;
            res.end(`User with id ${req.params.us} is not exists`);
        }
    },
    getByUsername: async (req, res) => {
        let us = await prisma.Users.findFirst({where: { username: req.params.us }});
        if (us) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(us));
        }
        else {
            res.statusCode = 404;
            res.end(`User with id ${req.params.us} is not exists`);
        }
    },
    addUser: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            res.end(JSON.stringify(await prisma.Users.create({
                data: {
                    username: body.username,
                    email: body.email,
                    phone: body.phone,
                    password: body.password,
                    role: 'User'
                }
            }).catch(err => console.log('Error: ', err.message))));
        })
    },
    updateUser: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            let us = await prisma.Users.findFirst({where: { id: Number(body.id) }});
            if (us) {
                res.end(JSON.stringify(await prisma.Users.update({
                    where: {
                        id: body.id
                    },
                    data: {
                        username: body.username,
                        email: body.email,
                        phone: body.phone,
                        password: body.password,
                        role: body.role
                }}).catch(err => console.log('Error: ', err.message))));
            }
            else {
                res.statusCode = 404;
                res.end(`User with id ${body.id} is not exists`);
            }
        })
    },
    deleteUser: async (req, res) => {
        let us = await prisma.Users.findFirst({where: { id: Number(req.params.us) }});
        if(us) {
            prisma.Users.delete({ where: { id: Number(req.params.us) }}).catch(err => console.log('Error: ', err.message));
            res.end();
        }
        else {
            res.statusCode = 404;
            res.end(`User with id ${req.params.us} is not exists`);
        }
    }
}