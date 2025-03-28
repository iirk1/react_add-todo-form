import { Todo } from '../../types/ToDo';
import { User } from '../../types/User';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
  getUserById: (value: number) => User;
};

export const TodoList: React.FC<Props> = ({ todos, getUserById }) => {
  return (
    <section className="TodoList">
      {todos.map((todo: Todo) => {
        return <TodoInfo key={todo.id} todo={todo} getUserById={getUserById} />;
      })}
    </section>
  );
};
