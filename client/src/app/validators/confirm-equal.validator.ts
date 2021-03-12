import { AbstractControl } from "@angular/forms";

export default function ConfirmEqualValidator(control: AbstractControl): { [key: string]: any } | null {

    const value = control.value;

    const valueToMatch = control.root.get('password')?.value;

    if( value && valueToMatch ){
        if(value !== valueToMatch){
            return { 'no-match': true };
        };
    };

    return null;

};