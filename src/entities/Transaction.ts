import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from 'typeorm';
import { Client } from './Client';
import { Generic } from './utils/Generic';

export enum TransactionTypes {
	DEPOSIT = 'deposit',
	WITHDRAWAL = 'withdrawal',
}

@Entity('transaction')
export class Transaction extends Generic {
	@Column({
		type: 'enum',
		enum: TransactionTypes,
	})
	type: string;

	@Column({ type: 'numeric' })
	amount: number;

	@ManyToOne(() => Client, (client) => client.transactions)
	@JoinColumn({
		name: 'client_id',
	})
	client: Client;
}
