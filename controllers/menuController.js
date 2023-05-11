let prisma = require('../app').prisma;

module.exports = {
    getAll: async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.end(JSON.stringify(await prisma.Menu.findAll()));
    },
    getOne: async (req, res) => {
        let mn = await prisma.Menu.findFirst({where: { id: Number(req.params.mn) }});
        if (mn) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(mn));
        }
        else {
            res.statusCode = 404;
            res.end(`Menu item with id ${req.params.mn} is not exists`);
        }
    },
    getByType: async (req, res) => {
        let tp = await prisma.Type.findFirst({where: { id: Number(req.params.tp) }});
        if (tp) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(await prisma.Menu.findAll({where: { type: Number(req.params.tp) }})));
        }
        else {
            res.statusCode = 404;
            res.end(`Type with id ${req.params.tp} is not exists`);
        }
    },
    addItem: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            let tp = await prisma.Type.findFirst({where: { id: Number(body.type) }});
            if (tp) {
                res.end(JSON.stringify(await prisma.Menu.create({
                    data: {
                        name: body.name,
                        type: Number(body.type),
                        image: body.image,
                        description: body.description,
                        price: Number(body.price)
                    }
                }).catch(err => console.log('Error: ', err.message))));
            }
            else {
                res.statusCode = 404;
                res.end(`Type with id ${body.type} is not exists`);
            }
        })
    },
    updateItem: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            let mn = await prisma.Menu.findFirst({where: { id: Number(body.id) }});
            let tp = await prisma.Type.findFirst({where: { id: Number(body.type) }});
            if (mn) {
                if (tp) {
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Headers', '*');
                    res.end(JSON.stringify(await prisma.Menu.update({
                        where: {
                            id: Number(body.id)
                        },
                        data: {
                            name: body.name,
                            type: Number(body.type),
                            image: body.image,
                            description: body.description,
                            price: Number(body.price)
                        }
                    }).catch(err => console.log('Error: ', err.message))));
                }
                else {
                    res.statusCode = 404;
                    res.end(`Type with id ${body.type} is not exists`);
                }
            }
            else {
                res.statusCode = 404;
                res.end(`Menu item with id ${body.id} is not exists`);
            }
        })
    },
    deleteItem: async (req, res) => {
        let mn = await prisma.Menu.findFirst({where: { id: Number(req.params.mn) }});
        if (mn) {
            await prisma.Menu.delete({ where: { id: Number(req.params.mn) }}).catch(err => console.log('Error: ', err.message));
            res.end();
        }
        else {
            res.statusCode = 404;
            res.end(`Menu item with id ${req.params.mn} is not exists`);
        }
    }
}