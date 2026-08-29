type User = {
  id: string;
  name: string;
  online?: boolean;
};

type SidebarProps = {
  users: User[];
  selectedUserId?: string;
  onSelect: (user: User) => void;
};

export default function Sidebar({
  users,
  selectedUserId,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="w-full border-r bg-white md:w-72">
      <div className="border-b p-4">
        <h2 className="text-lg font-bold">Chats</h2>
      </div>

      <div className="p-2">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onSelect(user)}
            className={`flex w-full items-center gap-3 rounded-lg p-3 text-left ${
              selectedUserId === user.id ? "bg-gray-100" : ""
            }`}
          >
            <div className="h-10 w-10 rounded-full bg-gray-200" />

            <div className="min-w-0">
              <p className="truncate font-medium">{user.name}</p>
              <p className="text-sm text-gray-500">
                {user.online ? "Online" : "Offline"}
              </p>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
