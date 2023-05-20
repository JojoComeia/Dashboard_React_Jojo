// Imports / React
import React from "react"
import styles from "./Input.module.css"
import { Field, ErrorMessage } from "formik"


interface InputProps {
  label: string
  name: string
  type?: string
  errors?: string
  touched?: boolean
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  errors,
  touched,
}) => {
  return (
    <fieldset className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`${styles.input} ${touched && errors && styles.error}`}
      />
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </fieldset>
  )
}

export default Input