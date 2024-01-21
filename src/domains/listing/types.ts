export type Listing = {
  id: string;
  property_type: "FULL_ONE_BED" | "FULL_TWO_BED" | "FULL_STUDIO" | "ROOM";
  created_datetime: string;
  updated_datetime: string;
  personal_info_updated_datetime: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  linkedin_username: string;
  phone_number: string;
  bio: string;
  telegram_id: string;
  telegram_username: string;
  telegram_first_name: string;
  telegram_last_name: string;
  telegram_language_code: "en" | "ru";
  state: "PUBLISHED" | "APPROVED" | "CREATED" | "NEW";
};

