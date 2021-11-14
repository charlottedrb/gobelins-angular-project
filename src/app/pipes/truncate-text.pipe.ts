import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
    transform(value: string, maxChar: number): string|void {
        if(value)
            return (value.length > maxChar) ? value.substr(0, maxChar) + '...' : value
        else
            return ''
    }
}
