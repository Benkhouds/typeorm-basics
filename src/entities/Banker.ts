import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Client } from './Client';
import { Person } from './utils/Person';

@Entity('banker')
export class Banker extends Person {
	@Column({
		name: 'employee_number',
		unique: true,
		length: 10,
	})
	employeeNumber: string;

	@Column({
		name: 'social_security',
		unique: true,
		nullable: true,
		length: 15,
	})
	socialSecurityNumber: string;

	@ManyToMany(() => Client)
	@JoinTable({
		name: 'client_banker',
		joinColumn: {
			name: 'banker_id',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'client_id',
			referencedColumnName: 'id',
		},
	})
	clients: Client[];
}
