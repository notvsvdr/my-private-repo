import { calculator } from './calculating-module';

export default function (first, second, operation) {
    if (!first || !second) {
        return 'Invalid value!';
    }

    return `Result: ${calculator[operation](first, second)}`;
}