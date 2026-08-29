type User = {
  id: string;
  name: string;
  online?: boolean;
};

type UserListProps = {
  users: User[];
  onSelect: (user: User) => void;
};

export default function UserList({
  users,
  onSelect,
}: UserListProps) {
  return (
    <div className="space-y-2 p-4">
      {users.map((user) => (
        <button
          key={user.id}
          onClick={() => onSelect(user)}
          className="flex w-full items-center gap-3 rounded-lg border p-3 text-left"
        >
          <div className="h-10 w-10 rounded-full bg-gray-200" />

          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">
              {user.online ? "Online" : "Offline"}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}
