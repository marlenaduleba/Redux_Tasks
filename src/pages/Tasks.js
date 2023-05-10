import { TaskEditor } from 'components/TaskEditor/TaskEditor.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations.js';
import { selectLoading } from 'redux/tasks/selectors.js';
import { Helmet } from 'react-helmet';
import { TaskList } from 'components/TaskList/TaskList.js';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>

      <TaskEditor />
      <div>
        {isLoading && 'Request in progress...'}
      </div>
      <TaskList/>
    </>
  );
}
