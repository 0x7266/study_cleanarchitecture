// Infrastructure layer

import { User } from "../entities/user";

export class UserRepository {
	async create(user: User): Promise<User> {
		// Database interaction
		return user;
	}
}
