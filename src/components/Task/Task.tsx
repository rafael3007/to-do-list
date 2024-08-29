import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css'
import { Tasks } from '../../types/Tasks'

interface Props {
    data: Tasks
    removeTask: (id: number) => void
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({ data, removeTask, toggleTaskStatus }: Props) {
    function handleTaskToggle() {
        toggleTaskStatus({ id: data.id, value: !data.done })
    }

    function handleRemove() {
        removeTask(data.id)
    }

    const checkboxCheckedClassname = data.done
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.done
        ? styles['paragraph-checked']
        : ''

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={data.done} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.done && <Check size={12} />}
                    </span>

                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {data.title}
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    )
}