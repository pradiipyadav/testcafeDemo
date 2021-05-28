import {Selector, t} from 'testcafe';


class LoginPage{
    constructor(){
        this.userName = Selector('#txtEmail')
        this.password = Selector('#txtPassword')
        this.signInButton = Selector('#lblLogin')
        this.errorMsz = Selector('#ajaxErrorMsg')
        this.dashBoardTitle = Selector('#undefined-title')

    }

    async login(user, password){
        await t
        .typeText(this.userName, user, {replace:true})
        .typeText(this.password, password, {replace:true})
        .click(this.signInButton)
    }
}

export default new LoginPage();