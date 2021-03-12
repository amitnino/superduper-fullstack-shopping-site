import { AbstractControl } from "@angular/forms";
import isIsraeliIdValid from 'israeli-id-validator';

export default function IsraeliIdValidator(control: AbstractControl): { [key: string]: any } | null {

    const value = control.value;
    
    if ( !value ) return null;

    return !isIsraeliIdValid(value) ? { 'israeli-id': true } : null;

};