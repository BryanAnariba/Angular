import { readdirSync } from 'fs';
import { Router } from 'express';

const index_path_route = `${ __dirname }`;
const router = Router();

const getFileName = ( file: string ): string => {
    return `${ file.split('.').shift() }`;
}

console.clear();

readdirSync( index_path_route ).filter(file => {
    const fileName = getFileName( file );
    if ( fileName !== 'index' ) {
        console.log({ fileName });
        import( `./${ fileName }` )
        .then(
            (module) => {
                router.use( `/${ fileName }`, module.router )
            }
        )
    }
});

export default router;