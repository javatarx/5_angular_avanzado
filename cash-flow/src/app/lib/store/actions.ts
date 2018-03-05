export const LOGIN_USER = "[USERS] Login User";

export class LoginUser {
	readonly type = LOGIN_USER;
	constructor(public payload: any) {}
}
