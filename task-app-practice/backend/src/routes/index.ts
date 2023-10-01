import { Router } from 'express';
import { readdirSync } from 'node:fs';

const indexRoutesPath: string = `${ __dirname }`;
const router: Router = Router();

const removeFileExtention = (file: string): string => {
  return `${ file.split('.').shift() }`;
}

console.clear();

readdirSync( indexRoutesPath ).filter(file => {
  const nameWithOutExtention = removeFileExtention(file);
  if ( nameWithOutExtention !== 'index' ) {
    console.log({route: nameWithOutExtention});
    import(`./${nameWithOutExtention}.ts`)
    .then(module => {
      router.use(`/${nameWithOutExtention}`, module.router);
    });
  }
});

export default router;