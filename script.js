let student = [];
let gradeArray = [];
let studentBody;
const passGrade=70;
let avggrade=0;

function createNewRow(data){
  const passColor = (parseInt(data.grade)>=70) ? "green" : "red";
  
  return `<tr>
  <td><input type="checkbox"class="rowCheck checkRemove"></td>
  <td>${data.name}</td>
  <td class="data-Grade ${passColor}">${data.grade}%</td>
  </tr>
  `;
}

$(function(){
  studentBody=$('#grade-table-body');
});

$('#student-input').on('submit',function(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name : formData.get('name'),
    grade : formData.get('grade')
  };
  student.push(data);
  gradeArray.push(parseInt(data.grade));
//   console.log(gradeArray);
  const newRow = createNewRow(data);
  studentBody.append(newRow);
  avgGrade();
  $('#avg').html('Avg: ' + `${avggrade}` + '%');
});

$('#delete-btn').on('click',function(){
  const checkedRows = $('#grade-table-body').find('.checkRemove:checked').closest('tr');
  for(let i = gradeArray.length; i>=0;i--){
    console.log(i);
    if($(`#grade-table-body .checkRemove:eq(${i})`).is(':checked')){
      gradeArray.splice(i,1);
      student.splice(i,1);
    //   console.log(gradeArray);
    }
  }
  checkedRows.remove();
  avgGrade();
  $('#avg').html(`Avg: ${avggrade}` + '%');
});

function avgGrade(){
  avggrade=0;
  if(gradeArray.length != 0){ 
    for(let i = 0; i<gradeArray.length;i++){
        avggrade+=gradeArray[i];
    }
    avggrade/=gradeArray.length;
    avggrade=avggrade.toFixed(2);
  }
}
$('#select-all-checkbox').click(function(){
  $('.rowCheck').prop('checked',$(this).prop('checked'));
});

function sortTable(n){
  let table, a, b, shouldSwitch, rows, dir, switchCount=0;
  dir = 'asc';
  rows=$('#grade-table-body tr');
  for(let i = 0; i<table.length-1;i++){
      x=rows.find('td').get(1);
      y=rows.find('td').get(2);
  }
}