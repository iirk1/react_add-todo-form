import { User } from '../../types/User';

type Props = {
  getUserById: (value: number) => User | undefined;
  userId: number;
};

export const UserInfo: React.FC<Props> = ({ getUserById, userId }) => {
  const user = getUserById(userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
