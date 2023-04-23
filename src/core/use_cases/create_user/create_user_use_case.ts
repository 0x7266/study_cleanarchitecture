// Use case layer

import { UserRepository } from "../../repositories/user_repository";
import { CreateUserDto } from "./create_user_dto";
import { User } from "../../entities/user";

export class CreateUserUseCase {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	async createUser(createUserDto: CreateUserDto): Promise<User> {
		// Business logic
		const newUser = new User();
		newUser.name = createUserDto.name;
		newUser.email = createUserDto.email;
		const user = await this.userRepository.create(newUser);
		return user;
	}
}
