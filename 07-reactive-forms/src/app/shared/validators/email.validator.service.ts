import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidatorService implements AsyncValidator {
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const email = control.value;

        //return this.http.get<string>( `https://miservicio.com/${ email }` ) // si existe enviamos taken osea si existe por lo tanto no registrar

        const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
            console.log({ email });
            if ( email === 'saariel115@gmail.com' ) { // si entra aqui entonces email existe por ende no registra
                subscriber.next(({ emailTaken: true }));
                subscriber.complete(); // Unsubscribe para evitar consumo de recursos
                return;
            }
            subscriber.next(null);
            subscriber.complete();
        })
        .pipe(
            delay(2000)
        )
        return httpCallObservable;
    }

}
