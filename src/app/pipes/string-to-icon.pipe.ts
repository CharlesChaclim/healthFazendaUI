import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToIcon',
})
export class StringToIconPipe implements PipeTransform {
  transform(value: string) {
    switch (value) {
      case 'DISPONIVEL':
        return 'pi-check-circle';
      case 'INDISPONIVEL':
        return 'pi-times-circle';
        break;
      default:
        return '';
        break;
    }
  }
}
