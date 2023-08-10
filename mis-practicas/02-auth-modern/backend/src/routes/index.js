import { readdirSync } from 'fs';
import { Router } from 'express';

/* Importante en los es module */
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* Importante en los es module */

const PATH_ROUTES = `${ __dirname }`;
const router =  Router();

const getFileName = ( file ) => {
    return file.split( '.' ).shift();
}

console.clear();

readdirSync(PATH_ROUTES).filter( file => {
    const fileName = getFileName(file);
    console.log({ fileName });
    if ( fileName !== 'index' ) {
        import( `./${ fileName }.js` )
        .then((module) => {
            //console.log(module)
            router.use( `/${ fileName }`, module.router );
        });
    }
});

export default router;