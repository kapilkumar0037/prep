import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'initials'
})
export class InitialsPipe implements PipeTransform {
    transform(value: any) {
        if (typeof value !== 'string') {
            return value;
        }
        const names = value.split(' ');
        return names.map(name => name.charAt(0).toUpperCase()).join('');
    }
}