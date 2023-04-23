// Presentation layer
import { Request, Response } from "express";
import { CreateUserDto } from "../../core/use_cases/create_user/create_user_dto";
import { CreateUserUseCase } from "../../core/use_cases/create_user/create_user_use_case";

export class UserController {
	private userUseCase: CreateUserUseCase;

	constructor(userUseCase: CreateUserUseCase) {
		this.userUseCase = userUseCase;
	}

	async createUser(req: Request, res: Response): Promise<void> {
		try {
			const createUserDto: CreateUserDto = req.body;
			const result = await this.userUseCase.createUser(createUserDto);
			res.status(201).send(result);
		} catch (err) {
			res.status(500).send({ error: "Internal server error" });
		}
	}
}
