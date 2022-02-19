import { Entity, Column, OneToMany, ManyToMany, JoinColumn } from 'typeorm';
import { Person } from './utils/Person';
import { Transaction } from './Transaction';
import { Banker } from './Banker';

interface AdditionalInfo {
	age?: number;
	phoneNumber?: string;
}

@Entity('client')
export class Client extends Person {
	@Column({ type: 'numeric' })
	balance: number;

	@Column({ name: 'is_active', default: true })
	isActive: boolean;

	@Column({
		name: 'additional_info',
		type: 'simple-json',
		nullable: true,
	})
	private _additionalInfo: AdditionalInfo;

	@Column({ name: 'family_members', type: 'simple-array', default: [] })
	private _familyMembers: string[];

	@OneToMany(() => Transaction, (transaction) => transaction.client)
	transactions: Transaction[];

	@ManyToMany(() => Banker)
	bankers: Banker[];

	get familyMembers(): string[] {
		return this._familyMembers;
	}
	set familyMembers(family: string[]) {
		this._familyMembers = family;
	}

	get additionalInfo(): AdditionalInfo {
		return this._additionalInfo;
	}

	set additionalInfo(infos: AdditionalInfo) {
		this._additionalInfo = infos;
	}
}
