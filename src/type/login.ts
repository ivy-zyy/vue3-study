export interface LoginFormInit {
    username: string
    password: string
}
export class LoginData {
    ruleForm: LoginFormInit = {
      username: '',
      password: ''
    }
}
