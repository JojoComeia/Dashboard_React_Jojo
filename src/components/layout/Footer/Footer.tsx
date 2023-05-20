// Imports / React
import React from "react"
import styles from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Dashboard do site pessoal de Jojonatan Jojo. Todos
        os direitos reservados. feat Bueno.
      </p>
    </footer>
  )
}

export default Footer
