import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	UpdateDateColumn,
	CreateDateColumn,
	ManyToMany,
} from 'typeorm'

import Exam from "@entities/Exam";

@Entity("laboratory")
export default class Laboratory extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 255, nullable: false })
	name: string;

	@Column({ length: 255, nullable: false })
	address: string;

	@Column({ default: true })
	status: boolean;

	@ManyToMany(() => Exam, exam => exam.laboratories)
	exams: Exam[];

	@UpdateDateColumn({ type: 'timestamp' })
	updated_at: Date

	@CreateDateColumn({ type: 'timestamp' })
	created_at: Date
}