import './util/module-alias';
export { Server } from '@overnightjs/core';

export class SetupServer extends Server {
    constructor(private port = 3000){
        super();
    }
}