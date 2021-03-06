import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

export default interface IAllAppointmentsForUserId {
    appointmentsAsClient: Appointment[];
    appointmentsAsServiceProvider: Appointment[];
}
