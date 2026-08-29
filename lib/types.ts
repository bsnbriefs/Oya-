export type User = {
  id: string;
  name: string;
  email?: string;
  avatar_url?: string;
  online?: boolean;
};

export type Message = {
  id: string;
  text: string;
  sender_id: string;
  receiver_id: string;
  created_at: string;
};
