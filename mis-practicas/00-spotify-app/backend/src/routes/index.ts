import { readdirSync } from 'fs';
import { Router } from 'express';
const PATH_ROUTES: string = `${ __dirname }`;

const router: Router = Router();

console.clear();

const cleanName = ( fileName: string ): string => {
    return `${ fileName.split('.').shift() }`;
}

readdirSync( PATH_ROUTES ).filter(( fileName: string ) => {
    const fileNameWithOutExt = cleanName( fileName );
    if ( fileNameWithOutExt !== 'index' ) {
        console.log({ routeLoaded: fileNameWithOutExt });
        import(`./${ fileNameWithOutExt }.ts`)
        .then((moduleRouter) => {
            router.use(`/${ fileNameWithOutExt }`, moduleRouter.router);
        });
    }
});

export default router;