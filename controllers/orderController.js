let prisma = require('../app').prisma;

module.exports = {
    getAll: async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.end(JSON.stringify(await prisma.Orders.findAll()));
    },
    getOne: async (req, res) => {
        let or = await prisma.Orders.findFirst({where: { id: Number(req.params.or) }});
        if (or) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(or));
        }
        else {
            res.statusCode = 404;
            res.end(`Order with id ${req.params.or} is not exists`);
        }
    },
    getByUser: async (req, res) => {
        let us = await prisma.Users.findFirst({where: { id: Number(req.params.us) }});
        if (us) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(await prisma.Orders.findAll({where: { userid: Number(req.params.us) }})));
        }
        else {
            res.statusCode = 404;
            res.end(`User with id ${req.params.us} is not exists`);
        }
    },
    addOrder: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            res.end(JSON.stringify(await prisma.Orders.create({
                data: {
                    amount: Number(body.amount),
                    payment: Number(body.payment),
                    paid: Boolean(body.paid),
                    address: body.address,
                    status: body.status,
                    date: body.date,
                    userid: Number(body.userid)
                }
            }).catch(err => console.log('Error: ', err.message))));
        })
    },
    updateOrder: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            let or = await prisma.Orders.findFirst({where: { id: Number(body.id) }});
            let us = await prisma.Users.findFirst({where: { id: Number(body.userid) }});
            if (us) {
                if (or) {
                    res.end(JSON.stringify(await prisma.Orders.update({
                        where: {
                            id: Number(body.id)
                        },
                        data: {
                            amount: Number(body.amount),
                            payment: Number(body.payment),
                            paid: Boolean(body.paid),
                            address: body.address,
                            status: body.status,
                            date: body.date,
                            userid: Number(body.userid)
                        }}).catch(err => console.log('Error: ', err.message))));
                } else {
                    res.statusCode = 404;
                    res.end(`Order with id ${body.id} is not exists`);
                }
            }
            else {
                res.statusCode = 404;
                res.end(`User with id ${body.userid} is not exists`);
            }
        })
    },
    deleteOrder: async (req, res) => {
        let or = await prisma.Orders.findFirst({where: { id: Number(req.params.or) }});
        if (or) {
            await prisma.Orders.delete({ where: { id: Number(req.params.or) }}).catch(err => console.log('Error: ', err.message));
            res.end();
        }
        else {
            res.statusCode = 404;
            res.end(`Order with id ${req.params.or} is not exists`);
        }
    }
}