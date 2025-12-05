import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (typeof value !== 'string') {
            return value;
        } 
        const limit = args.length > 0 ? parseInt(args[0], 10) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }
}