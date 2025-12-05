import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'removeDuplicates'
})
export class RemoveDuplicatesPipe implements PipeTransform {
    transform(value: any[]) {
        if (!Array.isArray(value)) {
            return value;
        }
        return Array.from(new Set(value));
    }
}