import { useSelector } from "react-redux";
import {selectAllTasks} from '../../redux/tasks/selectors.js';
import { Task } from "components/Task/Task.js";
import css from './TaskList.module.css';

export const TaskList = () => {
const tasks = useSelector(selectAllTasks);

    return (
<ul className={css.list} >
{tasks.map(({id, text}) => (
    <li key={id} >
        <Task id={id}  text={text} />
    </li>
))}
</ul>
    )
}