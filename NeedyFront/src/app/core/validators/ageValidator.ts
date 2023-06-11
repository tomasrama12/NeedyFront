import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ageValidator(): ValidatorFn {

  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value) {
      const birthDate = new Date(control.value);
      const currentDate = new Date();
      const adultAge = new Date();
      adultAge.setFullYear(currentDate.getFullYear() - 18);

      if (birthDate > adultAge) {
        return { 'adultAge': true };
      }
    }

    return null;
  };

}