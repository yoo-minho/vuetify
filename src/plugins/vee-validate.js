import Vue from "vue";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { max, required, numeric, digits, email } from "vee-validate/dist/rules";
extend("max", {
  ...max,
  message: "{_field_}필드는 {length} 자를 초과할 수 없습니다."
});
extend("required", {
  ...required,
  message: "{_field_}는 필수값입니다."
});
extend("numeric", {
  ...numeric,
  message: "{_field_} 필드는 숫자로 구성되어야합니다."
});
extend("digits", {
  ...digits,
  message: "{_field_} 필드는 {length} 자리여야합니다."
});
extend("email", {
  ...email,
  message: "잘못 입력된 이메일입니다."
});
