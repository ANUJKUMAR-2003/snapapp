import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  username: z.string().min(5, { message: "Username must be at least 5 characters." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});
// .superRefine((data, context) => {
//   const { name, password } = data;

//   // Check name to ensure it only contains letters
//   if (!/^[A-Za-z]+$/.test(name)) {
//     context.addIssue({
//       code: "custom",
//       message: "Name must only contain letters.",
//       path: ["name"],
//     });
//   }

//   // Check password complexity
//   const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
//   const containsLowercase = (ch: string) => /[a-z]/.test(ch);
//   const containsSpecialChar = (ch: string) =>
//     /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);

//   let countOfUpperCase = 0,
//     countOfLowerCase = 0,
//     countOfNumbers = 0,
//     countOfSpecialChar = 0;

//   for (let i = 0; i < password.length; i++) {
//     let ch = password.charAt(i);
//     if (!isNaN(+ch)) countOfNumbers++;
//     else if (containsUppercase(ch)) countOfUpperCase++;
//     else if (containsLowercase(ch)) countOfLowerCase++;
//     else if (containsSpecialChar(ch)) countOfSpecialChar++;
//   }

//   if (
//     countOfLowerCase < 1 ||
//     countOfUpperCase < 1 ||
//     countOfSpecialChar < 1 ||
//     countOfNumbers < 1
//   ) {
//     context.addIssue({
//       code: "custom",
//       message: "Password does not meet complexity requirements.",
//       path: ["password"],
//     });
//   }
// });
