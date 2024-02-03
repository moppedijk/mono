import { Injectable } from '@nestjs/common';
import validator from 'validator';

@Injectable()
export class ValidatorService {
    public validateName(value: string): boolean {
        let valid = true;

        if (!value) {
            return false;
        }

        // Check if value is empty
        if(validator.isEmpty(value)) {
            valid = false;
        }

        // Check if string contains only letters and numbers
        if(!validator.isAlphanumeric(value, 'nl-NL')) {
            valid = false;
        }

        // Check if string is longer than 2
        if(!validator.isLength(value, { min:2, max: 1000 })) {
            valid = false;
        }

        return valid;
    }

    public validateMessage(value: string): boolean {
        let valid = true;

        if (!value) {
            return false;
        }

        // Check if value is empty
        if(validator.isEmpty(value)) {
            valid = false;
        }

        // Check if string is longer than 2 and smaller than 10000
        if(!validator.isLength(value, { min:2, max: 10000 })) {
            valid = false;
        }

        return valid;
    }

    public validateEmail(value: string): boolean {
        let valid = true;

        if (!value) {
            return false
        }

        if(validator.isEmpty(value)) {
            valid = false;
        }

        if(!validator.isEmail(value)) {
            valid = false;
        }

        return valid;
    }
}
