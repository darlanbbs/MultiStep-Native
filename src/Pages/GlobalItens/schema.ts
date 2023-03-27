import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup.string().required("This field is required"),
    phoneNumber: yup.number().required().typeError("This field is required"),
    email: yup
      .string()
      .required("This field is required")
      .email("Invalid email format!"),
  })
  .required();

export const checkBoxSchema = yup.object({
  Option1: yup.boolean(),
  Option2: yup.boolean(),
  Option3: yup.boolean(),
});
