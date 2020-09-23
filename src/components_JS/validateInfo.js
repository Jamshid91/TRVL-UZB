export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Требуется имя пользователя";
  } else if (!/^[A-Za-z]+/.test(values.username.trim())) {
    errors.username = "Введите действительное имя";
  }

  if (!values.email) {
    errors.email = "Требуется ваш эл. почта";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Aдрес эл. почты введен неверно";
  }
  if (!values.password) {
    errors.password = "Требуется пароль";
  } else if (values.password.length < 6) {
    errors.password = "Пароль должен состоять из 6 или более символов.";
  }

  if (!values.password2) {
    errors.password2 = "Требуется пароль";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Пароли не соответствуют";
  }
  return errors;
}
