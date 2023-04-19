import { useDebouncedEffect } from "@react-hookz/web";
import { useFormContext, useWatch } from "react-hook-form";

export default function UsernameInputField({ inputHolderStyles }) {
  const {
    register,
    setError,
    trigger,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const usernameValue = useWatch({ name: "username" });

  const handleUsernameValidation = async () => {
    if (usernameValue === undefined) {
      return;
    }

    const payload = { username: usernameValue };

    try {
      const response = await fetch(
        `${process.env.API_URL}/public/check_username`,
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
        if (jsonResponse?.data?.usernameExists) {
          setError("username", {
            type: "manual",
            message: "Username already exists.",
          });
        } else {
          clearErrors("username");
        }
      }
      // if username doesn't already exist but /public/check_username returns error then manually trigger other username validation rules
      else {
        await trigger("username");
      }
    } catch {}
  };

  useDebouncedEffect(handleUsernameValidation, [usernameValue], 500);

  return (
    <div className={inputHolderStyles}>
      <input
        type="text"
        className={errors?.username?.message ? styles.errorInput : ""}
        placeholder="Enter unique username"
        {...register("username", {
          required: { value: true, message: "Username is required" },
          maxLength: {
            value: 23,
            message: "Username must not exceed a lengh of 23 characters",
          },
          minLength: {
            value: 3,
            message: "Username must be at least 3 characters long",
          },
          pattern: {
            value: /^@?([A-Za-z]+((([.]|[-]|[_]|)[a-zA-Z0-9]+)?)|[0-9]+)$/,
            message:
              "English letters, numbers or a . _ - in the middle are allowed",
          },
        })}
      />
      {errors?.username?.message && <p>{errors.username.message}</p>}
    </div>
  );
}
