import classNames from 'classnames';
import { Todo } from '../../types/ToDo';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
  getUserById: (value: number) => User | undefined;
};

export const TodoInfo: React.FC<Props> = ({ todo, getUserById }) => {
  return (
    <article
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo getUserById={getUserById} userId={todo.userId} />{' '}
    </article>
  );
};
