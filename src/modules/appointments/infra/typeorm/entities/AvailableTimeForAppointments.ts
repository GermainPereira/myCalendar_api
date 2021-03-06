import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('available_time_for_appointments')
class AvailableTime {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    from_user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'from_user_id' })
    AvailableTimeFromUser: User;

    @Column('timestamp with time zone')
    start: Date;

    @Column('timestamp with time zone')
    end: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default AvailableTime;
