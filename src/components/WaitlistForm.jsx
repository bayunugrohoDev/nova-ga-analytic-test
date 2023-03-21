import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "./Button";
import styles from "@/styles/WaitlistForm.module.css";

const GENDERS = [
  { id: "", name: "Gender" },
  { id: 1, name: "< 18" },
  { id: 2, name: "19 - 25" },
  { id: 3, name: "26 - 35" },
  { id: 4, name: "36 - 45" },
  { id: 5, name: "46 - 55" },
  { id: 6, name: "> 56" },
];

const AGES = [
  { id: "", name: "Age" },
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Other" },
  { id: 4, name: "Prefer not to say" },
];

const renderFormMessage = (successMessage, errorMessage) => {
  return (
    (successMessage || errorMessage) && (
      <div
        className={successMessage ? styles.successMessage : styles.errorMessage}
      >
        {successMessage || errorMessage}
      </div>
    )
  );
};

export default function WaitlistForm() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      username: data.username,
      email: data.email,
      phone_number: data.phoneNumber,
      age_range_id: Number(data.age),
      gender_id: Number(data.gender),
    };

    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch(
        `${process.env.API_URL}/public/waiting_list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const jsonResponse = await response.json();

      if (jsonResponse.success) {
        reset();
        setAge("");
        setGender("");
        setSuccessMessage("You've successfully joined the waiting list");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      } else {
        const error =
          jsonResponse?.errors[0]?.message || "An unexpected error occurred";
        setErrorMessage(`Error: ${error}`);
      }
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      {renderFormMessage(successMessage, errorMessage)}
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputHolder}>
          <input
            className={errors?.username?.message ? styles.errorInput : ""}
            placeholder="Enter unique username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
              minLength: {
                value: 6,
                message: "Username must be at least 6 characters long",
              },
              maxLength: {
                value: 23,
                message: "Username must not exceed a lengh of 23 characters",
              },
              pattern: {
                value: /(?!^[0-9]*$)^[A-Za-z]+((([.]|[-]|[_]|)[a-zA-Z0-9]+)?)$/,
                message:
                  "English letters, numbers or a . _ - in the middle are allowed",
              },
            })}
          />
          {errors?.username?.message && <p>{errors.username.message}</p>}
        </div>
        <div className={styles.dropdownHolder}>
          <i className={styles.arrow} />
          <select
            className={`${age === "" ? styles.notSelected : ""}  ${
              errors?.age?.message ? styles.errorInput : ""
            }`}
            {...register("age", {
              value: age,
              required: { value: true, message: "Age is required" },
              onChange: (e) => setAge(e.target.value),
            })}
          >
            {AGES.map((age) => (
              <option key={age.id} value={age.id}>
                {age.name}
              </option>
            ))}
          </select>
          {errors?.age?.message && <p>{errors.age.message}</p>}
        </div>
        <div className={styles.dropdownHolder}>
          <i className={styles.arrow} />
          <select
            className={`${gender === "" ? styles.notSelected : ""} ${
              errors?.gender?.message ? styles.errorInput : ""
            }`}
            {...register("gender", {
              required: { value: true, message: "Gender is required" },
              value: gender,
              onChange: (e) => setGender(e.target.value),
            })}
          >
            {GENDERS.map((gender) => (
              <option key={gender.id} value={gender.id}>
                {gender.name}
              </option>
            ))}
          </select>
          {errors?.gender?.message && <p>{errors.gender.message}</p>}
        </div>
        <div className={styles.inputHolder}>
          <input
            placeholder="Email address"
            className={errors?.email?.message ? styles.errorInput : ""}
            {...register("email", {
              required: { value: true, message: "Email is required" },
              maxLength: {
                value: 255,
                message: "Email must not exceed a lengh of 255 characters",
              },
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,8}$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors?.email?.message && <p>{errors.email.message}</p>}
        </div>

        <div className={styles.inputHolder}>
          <input
            placeholder="Phone number"
            className={errors?.phoneNumber?.message ? styles.errorInput : ""}
            {...register("phoneNumber", {
              required: { value: true, message: "Phone number is required" },
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
          {errors?.phoneNumber?.message && <p>{errors.phoneNumber.message}</p>}
        </div>
        <div />
        <Button type="submit" disabled={isSubmitting}>
          Join waitlist
        </Button>
      </form>
    </div>
  );
}
