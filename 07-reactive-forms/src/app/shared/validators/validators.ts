import { FormControl, ValidationErrors } from "@angular/forms";

export const emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const namesPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

export const canBeStrider = ( control: FormControl ) : ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();
    if ( value === 'strider' ) {
        return {
            isStrider: true
        }
    }
    return null;
}
 