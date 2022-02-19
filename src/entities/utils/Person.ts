import { Column, Entity } from 'typeorm';

import { Generic } from './Generic';

@Entity()
export abstract class Person extends Generic {
	@Column({ name: 'first_name' })
	firstName: string;

	@Column({ name: 'last_name' })
	lastName: string;

	@Column({ unique: true })
	email: string;

	@Column({ name: 'card_number', unique: true, length: 10 })
	cardNumber: string;
}
