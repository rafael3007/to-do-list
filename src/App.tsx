import { PlusCircle } from '@phosphor-icons/react';
import Header from './components/Header/Header';

import styles from "./App.module.css";

import './global.css'
import HeaderList from './components/HeaderList/HeaderList';
import { useState } from 'react';
import { Tasks } from './types/Tasks';

import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Task } from './components/Task/Task';
import { ListEmpty } from './components/ListEmpty/ListEmpty';

function App() {
  const [title, setTitle] = useState<string>('');

  const [tasks, setTasks] = useState<Array<Tasks>>([
    { id: 1, title: 'Estudar React', done: false },
    { id: 2, title: 'inserir na Rocketseat', done: false },
    { id: 3, title: 'Copiar Url do projeto', done: false },
    { id: 4, title: 'Fazer commit', done: false },
    { id: 5, title: 'Adicionar uma nova tarefa', done: true },
    { id: 6, title: 'Marcar e desmarcar uma tarefa como concluída', done: true },
    { id: 7, title: 'Remover uma tarefa da listagem', done: true },
    { id: 8, title: 'Mostrar o progresso de conclusão das tarefas', done: true },
  ]);

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.done) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!title) {
      return
    }

    const newTask: Tasks = {
      id: new Date().getTime(),
      title: title,
      done: false,
    }

    setTasks((state) => [...state, newTask])
    setTitle('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }


  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <HeaderList
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <ListEmpty />
          )}
        </div>
      </section>
    </main>
  )
}

export default App
