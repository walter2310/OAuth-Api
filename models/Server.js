const express = require('express');
const cors = require('express');
const morgan = require('morgan');

class Server {
    constructor() {
        this.app = express();
        this.path = require('path');

        this.port = process.env.PORT;
        this.userPath = '/users/';
        this.authPath = '/';
        
        this.middlewares();
        this.routes();
    };

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(this.path.join(__dirname, '../public')));
    };

    routes() {
        this.app.use(this.userPath, require('../routes/userRoutes'));
        this.app.use(this.authPath, require('../routes/authRoutes'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port:', this.port);
        });
    };
};

module.exports = Server; 
