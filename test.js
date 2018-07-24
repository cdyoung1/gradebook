import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `file:///C:/Users/chris/Bootcamp/gradebook/index.html`;  // specify the start page


//then create a test and place your code there
test('adding Content', async t => {
    const passColor = (parseInt(data.grade)>=70) ? "green" : "red";
    const gradeCell = Selector('dataGrade');
    await t
        .typeText('#form-name', 'John Smith')
        .typeText('#form-grade','75')
        .click('#submit-btn')

        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(gradeCell).hasClass(passColor);
});