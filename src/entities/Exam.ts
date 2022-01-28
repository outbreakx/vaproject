import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	JoinTable,
	UpdateDateColumn,
	CreateDateColumn,
	ManyToMany,
} from 'typeorm'

import Laboratory from '@entities/Laboratory';

@Entity("exam")
export default class Exam extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 255, nullable: false })
	name: string;

	@Column({ length: 64, nullable: false })
	type: string;

	@Column({ default: true })
	status: boolean;

	@ManyToMany(()=> Laboratory, laboratory => laboratory.exams)
	@JoinTable()
	laboratories: Laboratory[];


	@UpdateDateColumn({ type: 'timestamp' })
	updated_at: Date

	@CreateDateColumn({ type: 'timestamp' })
	created_at: Date
}