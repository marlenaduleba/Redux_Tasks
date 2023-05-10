import { useDispatch } from 'react-redux';
import css from './TaskEditor.module.css';
import { addTask } from 'redux/tasks/operations.js';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!')

  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} name="text" />
      <button className={css.button} type="submit">
        Add task
      </button>
    </form>
  );
};
