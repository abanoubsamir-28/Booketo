import React from "react";
import "./userSettings.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormsFields/FormikControl";
import axios from "axios";
import NavBar from "../NavBar";
const UserSettings = () => {
  const updateUser = () => {
    const body = JSON.stringify({
      firstName: "a7eeh",
    });
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .put("https://dummyjson.com/users/1", body, { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    polices: false,
  };
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is a required field")
      .min(5, "Minimum is 5 Characters")
      .max(20, "you exceeded Maximum "),
    lastName: Yup.string()
      .required("Last Name is a required field")
      .min(5, "Minimum is 5 Characters")
      .max(20, "you exceeded Maximum "),
    age: Yup.number()
      .positive("should be positive !")
      .label("Age")
      .required("Age is a Required Field")
      .min(10, "Minimum 10 years old"),
    gender: Yup.string().required("Gender is Required Field"),
    email: Yup.string()
      .required("E-mail is required field")
      .email("Email is not Valid"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    phone: Yup.number()
      .required("Phone is Required")
      .positive("Number should be positive"),
    username: Yup.string().required("username is required"),
    date: Yup.date("Enter a valid Date").required("Date is Required"),
    address: Yup.string().required("Adress is Required"),
    city: Yup.string().required("City is Required"),
    state: Yup.string().required("State is Required"),
  });
  const onSubmit = (values) => {
    console.log("form data ", values);
  };
  return (
   <>
   <NavBar/>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div class="container rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  class="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span class="font-weight-bold">Edogaru</span>
                <span class="text-black-50">edogaru@mail.com.my</span>
                <span> </span>
              </div>
            </div>
            <div class="col-md-5 border-right">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label class="labels">Name</label>
                    <FormikControl
                      control="input"
                      type="text"
                      label="First Name "
                      name="firstName"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Surname</label>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Last Name "
                      name="lastName"
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label>
                    <FormikControl
                      control="input"
                      type="number"
                      label="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Birth Date</label>
                    <FormikControl
                      control="input"
                      type="date"
                      label="Date "
                      name="date"
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Website</label>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Website "
                      name="website"
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">University</label>
                    <FormikControl
                      control="input"
                      type="text"
                      label="University"
                      name="university"
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Work</label>
                    <FormikControl
                      control="input"
                      type="text"
                      label="Work "
                      name="jobtitle"
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Company</label>
                    <FormikControl
                      control="input"
                      type="text"
                      label="company "
                      name="company"
                    />
                  </div>
                </div>
                <div class="mt-5 text-center">
                  <button
                    class="btn btn-primary profile-button"
                    type="button"
                    onClick={updateUser}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center adress">
                  <span>Edit Adress</span>
                  <span class="border px-3 p-1 add-adress">
                    <i class="fa fa-plus"></i>&nbsp;Adress
                  </span>
                </div>
                <div class="col-md-12">
                  <label class="labels">Full Adress</label>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Adress "
                    name="address"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">City</label>
                  <FormikControl
                    control="input"
                    type="text"
                    label="City "
                    name="city"
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">State</label>
                  <FormikControl
                    control="input"
                    type="text"
                    label="State "
                    name="state"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </Formik>
   </>
  );
};

export default UserSettings;

// return (
//     <>
//   <div class="container rounded bg-white mt-5 mb-5">
//     <div class="row">
//       <div class="col-md-3 border-right">
//         <div class="d-flex flex-column align-items-center text-center p-3 py-5">
//           <img
//             class="rounded-circle mt-5"
//             width="150px"
//             src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
//           />
//           <span class="font-weight-bold">Edogaru</span>
//           <span class="text-black-50">edogaru@mail.com.my</span>
//           <span> </span>
//         </div>
//       </div>
//       <div class="col-md-5 border-right">
//         <div class="p-3 py-5">
//           <div class="d-flex justify-content-between align-items-center mb-3">
//             <h4 class="text-right">Profile Settings</h4>
//           </div>
//           <div class="row mt-2">
//             <div class="col-md-6">
//               <label class="labels">Name</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="first name"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-6">
//               <label class="labels">Surname</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 // value=""
//                 placeholder="surname"
//               />
//             </div>
//           </div>
//           <div class="row mt-3">
//             <div class="col-md-12">
//               <label class="labels">Mobile Number</label>
//               <input
//                 type="number"
//                 class="form-control"
//                 placeholder="enter phone number"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-12">
//               <label class="labels">Birth Date</label>
//               <input
//                 type="date"
//                 class="form-control"

//                 // value=""
//               />
//             </div>
//             <div class="col-md-12">
//               <label class="labels">Website</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="enter your website"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-12">
//               <label class="labels">University</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="where you study"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-12">
//               <label class="labels">State</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="enter address line 2"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-12">
//               <label class="labels">Area</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="enter address line 2"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-12">
//               <label class="labels">Email ID</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="enter email id"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-12">
//               <label class="labels">Education</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="education"
//                 // value=""
//               />
//             </div>
//           </div>
//           <div class="row mt-3">
//             <div class="col-md-6">
//               <label class="labels">Country</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="country"
//                 // value=""
//               />
//             </div>
//             <div class="col-md-6">
//               <label class="labels">State/Region</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 // value=""
//                 placeholder="state"
//               />
//             </div>
//           </div>
//           <div class="mt-5 text-center">
//             <button class="btn btn-primary profile-button" type="button">
//               Save Profile
//             </button>
//           </div>
//         </div>
//       </div>
//       <div class="col-md-4">
//         <div class="p-3 py-5">
//           <div class="d-flex justify-content-between align-items-center experience">
//             <span>Edit Experience</span>
//             <span class="border px-3 p-1 add-experience">
//               <i class="fa fa-plus"></i>&nbsp;Experience
//             </span>
//           </div>
//           <div class="col-md-12">
//             <label class="labels">Experience in Designing</label>
//             <input
//               type="text"
//               class="form-control"
//               placeholder="experience"
//             //   value=""
//             />
//           </div>
//           <div class="col-md-12">
//             <label class="labels">Additional Details</label>
//             <input
//               type="text"
//               class="form-control"
//               placeholder="additional details"
//             //   value=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     </>
//   );
