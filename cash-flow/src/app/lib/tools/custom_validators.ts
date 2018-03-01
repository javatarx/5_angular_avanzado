import { AbstractControl } from "@angular/forms";

export function ValidatePassword(control: AbstractControl) {
	if (hasNumber(control.value)) {
		return null;
	}
	return { validPassword: true };
}
function hasNumber(myString) {
	return /\d/.test(myString);
}
