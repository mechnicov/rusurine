function validate_form ()
{
  valid = true;
  var pattern = /^(\+)?([- ()]{0,4}\d){10,14}$/;
  var name = document.siteform.name.value;
  var phone = document.siteform.phone.value;
  var option = document.siteform.option.value;

  if ( name == "" )
  {
    alert ( "Вы не заполнили поле Имя" );
    valid = false;
  }

  if ( phone == "" )
  {
    alert ( "Вы не заполнили поле Телефон" );
    valid = false;
  }
  else if ( !pattern.test(phone) )
  {
    alert ( "Вы ввели номер телефон в некорректном формате" );
    valid = false;
  }

  if ( valid == true )
  {
    if ( option == 1 ) { alert ( "Перед употреблением проконсультируйтесь с врачом" ); }
    else if ( option == 2 ) { alert ( "Это золотая жила" ); }
    else { alert ( "Вы не выбрали услугу" ); }
  }
}
