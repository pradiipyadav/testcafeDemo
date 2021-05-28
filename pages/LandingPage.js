import {Selector} from 'testcafe'

class LandingPage{
    constructor(){
        this.signInLink = Selector('a[href="https://secure.comm100.com/login.aspx"]')
    }
}

export default new LandingPage();