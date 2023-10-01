import { Router } from 'express';
import { readdirSync } from 'node:fs';

const indexRoutesPath: string = `${ __dirname }`;
const router: Router = Router();

const removeFileExtention = (file: string): string[] => {
  return [`${ file.split('.').shift() }`, `${ file.split('.').pop() }`];
}

console.clear();

readdirSync( indexRoutesPath ).filter(file => {
  const [fileName, extention] = removeFileExtention(file);
  if ( fileName !== 'index' ) {
    console.log({route: fileName});
    import(`./${fileName}.${ extention === 'ts' ? 'ts' : 'js' }`)
    .then(module => {
      router.use(`/${fileName}`, module.router);
    });
  }
});

export default router;