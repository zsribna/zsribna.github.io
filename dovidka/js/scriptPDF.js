document.getElementById('date').innerHTML = "Довідка дійсна до " + getDate();

function getName(){
	return document.getElementById("name_of_student").value;
}
function getCourse(){
	return document.getElementById("course").value;
}

function getFaculty(){
	var faculty = document.getElementById("faculty_of_study");
	var faculty_name = faculty.options[faculty.selectedIndex].getAttribute('name');
	return faculty_name;
}

function getSpecialty(){
	var specialty_value = document.getElementById("specialty_of_study");
	return specialty_value.options[specialty_value.selectedIndex].text;
}
function getDeputy()
{
	var faculty = document.getElementById("faculty_of_study");
	var deputy_name = faculty.options[faculty.selectedIndex].getAttribute('deputy');
	return deputy_name;
}
function getVuk()
{
	var faculty = document.getElementById("faculty_of_study");
	var number_name = faculty.options[faculty.selectedIndex].getAttribute('vuk');
	return number_name;
}
function getNumber()
{
	var faculty = document.getElementById("faculty_of_study");
	var number_name = faculty.options[faculty.selectedIndex].getAttribute('number');
	return number_name;
}


function getFormOfStudy(){
	return document.getElementById("form_of_study").value;
}
function getHeorShe(){
	return document.getElementById("male_or_female").value;
}
function getDeputyDean(){
	return document.getElementById("Deputy Dean").value;
}
function getDepartment(){
	return document.getElementById("department").value;
}
function getTrainingPeriod(){

	 var course = getCourse();

	 if(course === "V" || course === "VI"){
	 	return "один рік чотири місяці";
	 }
	 else{
	 	return "чотири роки";
	 }
}

function getDate(){

	var today = new Date();

	if(today >= new Date(today.getFullYear(), 1, 1) 
		&& today <= new Date(today.getFullYear(), 5, 30)){
		return "01.07." + today.getFullYear() + " р.";
	}
	else{
		if(today >= new Date(today.getFullYear(), 0, 1) 
			&& today <= new Date(today.getFullYear(), 1, 29)){

			return "01.02." + today.getFullYear() + " р.";
		}
		else{
			return "01.02." + (today.getFullYear() + 1) + " р.";
		}
	}
}										  

function createDocument(){

var docDefinition = { 

	pageMargins: [85,54,40,0],

content: [

        {
            image: 'data:image/png;base64,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',
            width: 37,
            height: 50,
            margin: [219,0,0,0]
        },
        {text: 'Міністерство освіти і науки України', alignment: 'center',margin:[8,13,0,0], fontSize: 12},
        /*{text: 'Державний вищий навчальний заклад', alignment: 'center', fontSize: 12, margin: [7,2,0,0]},*/
        {text: 'Прикарпатський національний університет імені Василя Стефаника', alignment: 'center', bold: true, fontSize: 14, margin: [5,2,0,0]},
        {text: '____________________', bold: true, fontSize: 45, margin:[5,-42,0,10], alignment: 'center'},

        {text: 'вул. Шевченка, 57, м. Івано-Франківськ, 76018, тел. (0342) 75-23-51, факс: (0342) 53-15-74', fontSize: 9, alignment: 'center', margin: [30,-2,0,1]},
      
		{
	        text: [
	        	'е-mаіl ',
	        	{text: 'office@pnu.edu.ua', decoration: 'underline'},
	        	' Код ЄДРПОУ 02125266'
	        ],
	        fontSize: 9, 
	        alignment: 'center'

    	},

        {text: '_________________№______________', margin: [0,40,0,0], fontSize: 9},

		{text: 'Довідка', alignment:'center', fontSize: 14, margin: [0,57,0,0]},

		{
		text: 'Видана ' + getName()+ ' про те, що ' + getHeorShe()+ ' дійсно навчається на '+getCourse()+' курсі ' +getFaculty()+', спеціальності «' +getSpecialty()+ '» Прикарпатського національного університету імені Василя Стефаника IV рівня акредитації, '+getDepartment()+ ' відділення, ' + getFormOfStudy() +' форми навчання. Термін навчання складає '+ getTrainingPeriod() + '.', 

			alignment: 'justify', 
			fontSize: 14,
			margin: [0,17,0,0],
			lineHeight: 1.5,
			leadingIndent: 26
	},

		{text: 'Довідка дійсна до ' + getDate(), fontSize: 14,leadingIndent: 26,lineHeight: 1.5,},
		{text: 'Довідка видана для подання за місцем вимоги.',fontSize: 14,leadingIndent: 26},

		{text: 'Заступник декана							                                '+getDeputy(), margin:[0,82,0,0], fontSize: 14,leadingIndent: 26},
		{text:'Вик.'+getVuk(), fontSize: 11,leadingIndent: 26, margin: [0,107,0,0]},
		{text:'Тел.'+getNumber(), fontSize: 11,leadingIndent: 26}
	]
 }
 	return docDefinition;
}

$("#open").click(function(){
    pdfMake.createPdf(createDocument()).open();
});

$("#print").click(function(){
    pdfMake.createPdf(createDocument()).print();
});

$(".change_filter_shop_a-brand").change(function () {
  let brandValue = $(this).val().slice(0, 2);
  if (brandValue == "fl") brandValue = "fl";
  if (brandValue != "0") {
    $(".change_filter_shop_b-model > option").addClass("hiden-option");

    $(".change_filter_shop_b-model > option").each(function (i, elem) {
      let modelFirst = $(this).val().slice(0, 2);
      if (modelFirst == "0") {
        $(this).removeClass("hiden-option");
      }

      //console.log(modelFirst);
      if (brandValue == modelFirst) $(this).removeClass("hiden-option");
    });
  } else {
    $(".change_filter_shop_b-model > option").removeClass("hiden-option");
  }
});
