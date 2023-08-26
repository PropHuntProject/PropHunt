export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			channel: {
				Row: {
					client_id: string | null;
					created_at: string;
					id: string;
					server_id: string | null;
				};
				Insert: {
					client_id?: string | null;
					created_at?: string;
					id?: string;
					server_id?: string | null;
				};
				Update: {
					client_id?: string | null;
					created_at?: string;
					id?: string;
					server_id?: string | null;
				};
				Relationships: [];
			};
			kabupaten_kota: {
				Row: {
					id: number;
					id_provinsi: number | null;
					kabupaten: string | null;
				};
				Insert: {
					id: number;
					id_provinsi?: number | null;
					kabupaten?: string | null;
				};
				Update: {
					id?: number;
					id_provinsi?: number | null;
					kabupaten?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "kabupaten_kota_id_provinsi_fkey";
						columns: ["id_provinsi"];
						referencedRelation: "provinsi";
						referencedColumns: ["id"];
					},
				];
			};
			message: {
				Row: {
					channel: string | null;
					created_at: string;
					id: string;
					image: string | null;
					message: string | null;
					read: boolean | null;
					sent_by: string | null;
				};
				Insert: {
					channel?: string | null;
					created_at?: string;
					id?: string;
					image?: string | null;
					message?: string | null;
					read?: boolean | null;
					sent_by?: string | null;
				};
				Update: {
					channel?: string | null;
					created_at?: string;
					id?: string;
					image?: string | null;
					message?: string | null;
					read?: boolean | null;
					sent_by?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "message_channel_fkey";
						columns: ["channel"];
						referencedRelation: "channel";
						referencedColumns: ["id"];
					},
				];
			};
			profile_detail: {
				Row: {
					about: string | null;
					education: string | null;
					id: string;
					username: string;
					work: string | null;
				};
				Insert: {
					about?: string | null;
					education?: string | null;
					id?: string;
					username: string;
					work?: string | null;
				};
				Update: {
					about?: string | null;
					education?: string | null;
					id?: string;
					username?: string;
					work?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profile_detail_username_fkey";
						columns: ["username"];
						referencedRelation: "profiles";
						referencedColumns: ["username"];
					},
				];
			};
			profiles: {
				Row: {
					avatar_url: string | null;
					created_at: string | null;
					first_name: string | null;
					id: string;
					last_name: string | null;
					updated_at: string | null;
					username: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					created_at?: string | null;
					first_name?: string | null;
					id: string;
					last_name?: string | null;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					created_at?: string | null;
					first_name?: string | null;
					id?: string;
					last_name?: string | null;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			provinsi: {
				Row: {
					id: number;
					provinsi: string | null;
				};
				Insert: {
					id: number;
					provinsi?: string | null;
				};
				Update: {
					id?: number;
					provinsi?: string | null;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			app_permission: "channels.delete" | "messages.delete";
			app_role: "admin" | "moderator";
			user_status: "ONLINE" | "OFFLINE";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
