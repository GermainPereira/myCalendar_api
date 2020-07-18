import AppError from '../error/AppError';
import { isValid, isBefore } from 'date-fns';
import { isUuid } from 'uuidv4';
import { Request } from '../services/CreateAvailableTimeService';

export default function validateRequestDTOCreateAvailableTime({
    start,
    end,
    fromUserId,
}: Request): void {
    if (!isValid(start) || !start) {
        throw new AppError('Please insert a valid appointment start date');
    } else if (!isValid(end) || !end) {
        throw new AppError('Please insert a valid appointment end date');
    } else if (isBefore(end, start)) {
        throw new AppError('The start date should come before the end date');
    } else if (!isUuid(fromUserId)) {
        throw new AppError('Please insert a valid user id');
    }
}
