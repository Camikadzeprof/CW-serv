let prisma = require('../app').prisma;

module.exports = {
    getAll: async (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.end(JSON.stringify(await prisma.Type.findAll()));
    },
    getOne: async (req, res) => {
        let tp = await prisma.Type.findFirst({where: { id: Number(req.params.tp) }});
        if (tp) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            res.end(JSON.stringify(tp));
        }
        else {
            res.statusCode = 404;
            res.end(`Type with id ${req.params.tp} is not exists`);
        }
    },
    addType: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            res.end(JSON.stringify(await prisma.Type.create({
                data: {
                    name: body.name
                }
            }).catch(err => console.log('Error: ', err.message))));
        })
    },
    updateType: (req, res) => {
        let body = ' ';
        req.on('data', chunk => {
            body = chunk.toString();
            body = JSON.parse(body);
        });
        req.on('end', async () => {
            let tp = await prisma.Type.findFirst({where: { id: Number(body.id) }});
            if (tp) {
                res.end(JSON.stringify(await prisma.Type.update({
                    where: {
                        id: Number(body.id)
                    },
                    data: {
                        name: body.name
                    }}).catch(err => console.log('Error: ', err.message))));
            }
            else {
                res.statusCode = 404;
                res.end(`Type with id ${body.id} is not exists`);
            }
        })
    },
    deleteType: async (req, res) => {
        let tp = await prisma.Type.findFirst({where: { id: Number(req.params.tp) }});
        if (tp) {
            await prisma.Type.delete({ where: { id: Number(req.params.tp) }}).catch(err => console.log('Error: ', err.message));
            res.end();
        }
        else {
            res.statusCode = 404;
            res.end(`Type with id ${req.params.tp} is not exists`);
        }
    }
}