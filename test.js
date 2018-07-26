import { Selector, ClientFunction } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `file:///C:/Users/chris/Bootcamp/gradebook/index.html`;  // specify the start page


const students = [
    {
        name: 'John Smith',
        grade: '75',
    },
    {
        name: 'John Doe',
        grade: '50',
    }
]

//then create a test and place your code there
test('Adding Content', async t => {
    const formName = Selector('#form-name');
    let formGrade = Selector('#form-grade');

    const table = Selector('#grade-table');
    const tableBody = Selector(table).find('tbody');
    const tableRow = Selector(tableBody).find('tr');
    const nameCell = Selector(tableRow).find('.data-Name');
    const gradeCell = Selector(tableRow).find('.data-Grade');

    // const formData = Selector(`${formData}`);
    

    for(let i = 0; i<students.length;i++){
        await t
            .typeText(formName, students[i].name, {paste: true}) 
            .typeText(formGrade,students[i].grade, {paste: true})
            .click('#submit-btn');
            const gradeColor = (parseInt(students[0].grade)>=70) ? "green" : "red";
            // Use the assertion to check if the actual header text is equal to the expected one
        await t
            .expect(tableRow).ok()
            .expect(gradeCell.hasClass(gradeColor)).ok()
            .expect(nameCell.innerHTML).eq(students[i].name)
            .expect(gradeCell.innerHTML).eq(students[i].grade);
    }
});