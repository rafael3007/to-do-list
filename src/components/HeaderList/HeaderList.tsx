import styles from "./HeaderList.module.css";

interface HeaderListProps {
    tasksCounter: number
    checkedTasksCounter: number
}

export default function HeaderList({ tasksCounter, checkedTasksCounter }: HeaderListProps) {
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{tasksCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>
                    {tasksCounter === 0
                        ? tasksCounter
                        : `${checkedTasksCounter} de ${tasksCounter}`}
                </span>
            </aside>
        </header>
    )
}