const {a} = require("prisma/build/public/assets/vendor");
let prisma = require('../app').prisma;

module.exports = {
    getAll: async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.end(JSON.stringify(await prisma.OrderedFood.findAll()));
    },
    getOne: async (req, res) => {
        let of = await prisma.OrderedFood.findFirst({where: { id: Number(req.params.of) }});
        if (of) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(of));
        }
        else {
            res.statusCode = 404;
            res.end(`Ordered food with id ${req.params.of} is not exists`);
        }
    },
    getByFood: async (req, res) => {
        let fo = await prisma.findFirst({where: { id: Number(req.params.fo) }});
        if (fo) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(await prisma.OrderedFood.findAll({where: { food: Number(req.params.fo) }})));
        }
        else {
            res.statusCode = 404;
            res.end(`Food with id ${req.params.fo} is not exists`);
        }
    },
    getByOrder: async (req, res) => {
        let or = await prisma.Orders.findFirst({where: { id: Number(req.params.or) }});
        if (or) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(await prisma.OrderedFood.findAll({where: { orderid: Number(req.params.or) }})));
        }
        else {
            res.statusCode = 404;
            res.end(`Order with id ${req.params.or} is not exists`);
        }
    },
    addOrderedFood: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            let fo = await prisma.Menu.findFirst({where: { id: Number(body.food) }});
            let or = await prisma.Orders.findFirst({where: { id: Number(body.orderid) }});
            if (fo) {
                if (or) {
                    res.end(JSON.stringify(await prisma.OrderedFood.create({
                        data: {
                            food: Number(body.food),
                            amount: Number(body.amount),
                            orderid: Number(body.orderid)
                        }
                    }).catch(err => console.log('Error: ', err.message))));
                }
                else {
                    res.statusCode = 404;
                    res.end(`Order with id ${body.orderid} is not exists`);
                }
            }
            else {
                res.statusCode = 404;
                res.end(`Food with id ${body.food} is not exists`);
            }
        })
    },
    updateOrderedFood: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            let of = await prisma.OrderedFood.findFirst({where: { id: Number(body.id) }});
            let fo = await prisma.Menu.findFirst({where: { id: Number(body.food) }});
            let or = await prisma.Orders.findFirst({where: { id: Number(body.orderid) }});
            if (of) {
                if (fo) {
                    if (or) {
                        res.end(JSON.stringify(await prisma.OrderedFood.update({
                            where: {
                                id: Number(body.id)
                            },
                            data: {
                                food: Number(body.food),
                                amount: Number(body.amount),
                                orderid: Number(body.orderid)
                            }
                        }).catch(err => console.log('Error: ', err.message))));
                    }
                    else {
                        res.statusCode = 404;
                        res.end(`Order with id ${body.orderid} is nor exists`);
                    }
                }
                else {
                    res.statusCode = 404;
                    res.end(`Food with id ${body.food} id not exists`);
                }
            }
            else {
                res.statusCode = 404;
                res.end(`Ordered food with id ${body.id} is not exists`);
            }
        })
    },
    deleteOrderedFood: async (req, res) => {
        let of = await prisma.OrderedFood.findFirst({where: { id: Number(req.params.of) }});
        if (of) {
            await prisma.OrderedFood.delete({ where: { id: Number(req.params.of) }}).catch(err => console.log('Error: ', err.message));
            res.end();
        }
        else {
            res.statusCode = 404;
            res.end(`Ordered food with id ${req.params.of} is not exists`);
        }
    }
}