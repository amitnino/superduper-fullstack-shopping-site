import { AbstractControl } from "@angular/forms";

export default function newEmailValidator(control: AbstractControl): { [key: string]: any } | null {

    const value = control.value;

    const emailValidationRegExp: boolean = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]/.test(value);

    return !emailValidationRegExp ? { 'email': true } : null;

};