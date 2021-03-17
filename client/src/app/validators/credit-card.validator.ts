import { AbstractControl } from "@angular/forms";

export default function creditCardValidator(control: AbstractControl): { [key: string]: any } | null {

    if (!control.value) {
        return null;
    }

    const value = control.value;

    const isRightLength = value.length === 16;

    const creditCardValidationRegExp: boolean = /^5[1-5]/.test(value);

    return !creditCardValidationRegExp && !isRightLength ? { 'creditCard': true } : null;

};