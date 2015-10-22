function getFormData($form){                  //put user's inputs into json
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

function submitDynaform(formId, postURL) {          //send json to endpoint
	var $form = $("#dynamicForm");
	var formData = getFormData($form);
	formData = JSON.stringify(formData);
	$.ajax({
		type: 'POST',
		url: postURL,
		data: formData,
		success: function(data){
			alert('Sucess!!!! Your data has been sent.');
		},
		error: function(data){
			//http status code 200 etc
			alert('Error! Your data has not been sent.');
		},
	});
}
$.fn.dynaform = function(formOpt) {
	
	this.append($('<form id="dynamicForm">'));
	
	
	if (formOpt.token) $('#dynamicForm').append($("<input type=hidden name=token value='"+formOpt.token+"'></input>"));
	if (formOpt.secret) $('#dynamicForm').append($("<input type=hidden name=secret value='"+formOpt.secret+"'></input>"));
	$("<p>").html('Nome<input name="nome" type="text" class="form-group entrada" placeholder="Nome Completo" required>').appendTo("#dynamicForm");
    $("<p>").html('Email<input name="email" class="form-group entrada" type="email" required>').appendTo("#dynamicForm");
	
		$.each(formOpt.fields, function (fieldName, fieldValue) {
		 
			if (fieldValue.length > 1) {
				upperFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1); //first char to uppercase
				var select = "<p>"+upperFieldName+ "<select name='"+fieldName+"' class='form-group seletor'>"
				$.each(fieldValue, function (index,selectOpt) {
					select += "<option>"+selectOpt+"</option>"
				});
				select += "</select>";
				$('#dynamicForm').append($(select));
			} 
				else {
				upperFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1); //first char to uppercase
				$('#dynamicForm').append($("<p>"+upperFieldName+ "<input name='"+fieldName+"' class='form-group entrada' type='text'></p>"));
			} 
			
	    });
	
	if (formOpt.url) {
		$('#dynamicForm').append($("<input id='dynamicFormButton' class='btn btn-primary' type='submit' value='Enviar'></input>"));
	} else {
		alert('You forgot the URL in json, fella!');
	}
	
	$( "#dynamicForm" ).submit(function() {
		submitDynaform('dynamicForm', formOpt.url);
	});
	
};
