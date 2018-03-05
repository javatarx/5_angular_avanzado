import { IAction } from "./action";

export const LOGIN_USER = "[USERS] Login User";

export class LoginUser implements IAction {
	readonly type = LOGIN_USER;
	constructor(public payload: any) {}
}
