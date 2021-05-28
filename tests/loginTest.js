import { Selector, ClientFunction } from 'testcafe';
import loginPage from "../pages/LoginPage";
import home from "../pages/LandingPage";
import faker from 'faker'

fixture`Login test to Comm 100`.page('https://www.comm100.com/')
.beforeEach(async t => {await t.maximizeWindow()})


const getLocation = ClientFunction(() => document.location.href);


test('Login with invalid user and password', async t =>  {

    const email = faker.internet.email();
    const password = faker.internet.password();

    await t
        .click(home.signInLink)
        .expect(getLocation()).match(/https:\/\/secure.comm100.com\/login.aspx/, { timeout: 10000 });

    await loginPage
        .login(email, password);

    await t
        .expect(loginPage.errorMsz.visible).ok('No error message appeared', { timeout: 10000 })

})

test('Login with valid user and password', async t =>  {

    const email = "mebivin477@frnla.com";
    const password = "Comm100"

    await t
        .click(home.signInLink)
        .expect(getLocation()).match(/https:\/\/secure.comm100.com\/login.aspx/, { timeout: 10000 });

    await loginPage
        .login(email, password);

    await t
    .expect(getLocation()).match(/.*\/ui\/\d+\/livechat\/dashboard/, {timeout:20000})
        .expect(loginPage.dashBoardTitle.innerText).eql('Dashboard')


})