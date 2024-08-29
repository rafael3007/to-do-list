import styles from './ListEmpty.module.css'

export function ListEmpty() {
  return (
    <div className={styles.container}>
      <img src="/empty.svg" alt="Lista vazia" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}