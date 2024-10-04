import styles from "./Footer.module.css"

interface FooterProps {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
}

export default function Footer({totalTasks, completedTasks, pendingTasks}: FooterProps) {
 
  return (
    <div className={styles.footerContainer}>
      <span className={styles.total}>Total Todos {totalTasks}</span>
      <span className={styles.complete}>Completed Todos {completedTasks}</span>
      <span className={styles.pending}>Pending Todos {pendingTasks}</span>
    </div>
  )
}
