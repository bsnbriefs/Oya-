export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          email: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          name: string;
          email?: string | null;
          avatar_url?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string;
          email?: string | null;
          avatar_url?: string | null;
        };
      };

      messages: {
        Row: {
          id: string;
          sender_id: string;
          receiver_id: string;
          text: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          sender_id: string;
          receiver_id: string;
          text: string;
          created_at?: string;
        };
        Update: {
          text?: string;
        };
      };
    };
  };
};
