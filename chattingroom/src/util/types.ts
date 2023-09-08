export interface MessageData {
    user_id: number;
    user_name: string;
    photo_url: string;
    created_at: string;
    msg: { mtype: string; content: string };
}