import css from './TaskEditor.module.css';

export const TaskEditor = () => {
    return (
        <form className={css.form} >
            <input  className={css.input} name="text" />
            <button className={css.button} type="submit" >Add task</button>
        </form>
    )
}