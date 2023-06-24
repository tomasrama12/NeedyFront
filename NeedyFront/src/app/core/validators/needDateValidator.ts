import { AbstractControl, ValidatorFn } from '@angular/forms';

export function needDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value) {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();

      const differenceInTime = selectedDate.getTime() - currentDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      if (differenceInDays < 7) {
        return { 'needDate': true };
      }
    }

    return null;
  };
}
