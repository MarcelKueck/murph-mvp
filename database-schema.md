# Railway Database Schema

## Table: consultations

| Column | Type | Default | Nullable | Description |
|--------|------|---------|----------|-------------|
| id | uuid | uuid_generate_v4() | NO | |
| patient_id | uuid | NULL | NO | |
| medical_student_id | uuid | NULL | YES | |
| status | character varying(20) | 'requested'::character varying | NO | |
| requested_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |
| scheduled_for | timestamp with time zone | NULL | YES | |
| completed_at | timestamp with time zone | NULL | YES | |
| communication_channel | character varying(20) | NULL | YES | |
| primary_concern | text | NULL | YES | |
| summary | text | NULL | YES | |
| recommendations | text | NULL | YES | |
| referral_made | boolean | false | YES | |
| referral_details | text | NULL | YES | |
| created_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |
| updated_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |

## Table: document_shares

| Column | Type | Default | Nullable | Description |
|--------|------|---------|----------|-------------|
| id | uuid | uuid_generate_v4() | NO | |
| document_id | uuid | NULL | NO | |
| shared_with_id | uuid | NULL | NO | |
| shared_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |

## Table: documents

| Column | Type | Default | Nullable | Description |
|--------|------|---------|----------|-------------|
| id | uuid | uuid_generate_v4() | NO | |
| owner_id | uuid | NULL | NO | |
| type | character varying(50) | NULL | NO | |
| title | character varying(255) | NULL | NO | |
| file_path | character varying(255) | NULL | NO | |
| upload_date | timestamp with time zone | CURRENT_TIMESTAMP | YES | |
| is_shared | boolean | false | YES | |
| created_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |
| updated_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |

## Table: feedback

| Column | Type | Default | Nullable | Description |
|--------|------|---------|----------|-------------|
| id | uuid | uuid_generate_v4() | NO | |
| consultation_id | uuid | NULL | NO | |
| rating | integer | NULL | NO | |
| prevented_doctor_visit | boolean | NULL | YES | |
| comments | text | NULL | YES | |
| created_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |

## Table: medical_student_profiles

| Column | Type | Default | Nullable | Description |
|--------|------|---------|----------|-------------|
| user_id | uuid | NULL | NO | |
| university | character varying(255) | NULL | NO | |
| student_id | character varying(100) | NULL | NO | |
| verification_status | character varying(20) | 'pending'::character varying | YES | |
| clinical_year | integer | NULL | YES | |
| created_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |
| updated_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |

## Table: messages

| Column | Type | Default | Nullable | Description |
|--------|------|---------|----------|-------------|
| id | uuid | uuid_generate_v4() | NO | |
| consultation_id | uuid | NULL | NO | |
| sender_id | uuid | NULL | NO | |
| content | text | NULL | NO | |
| read_at | timestamp with time zone | NULL | YES | |
| created_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |

## Table: users

| Column | Type | Default | Nullable | Description |
|--------|------|---------|----------|-------------|
| id | uuid | uuid_generate_v4() | NO | |
| email | character varying(255) | NULL | NO | |
| password_hash | character varying(255) | NULL | NO | |
| full_name | character varying(255) | NULL | NO | |
| user_type | character varying(20) | NULL | NO | |
| date_of_birth | date | NULL | YES | |
| contact_number | character varying(20) | NULL | YES | |
| profile_complete | boolean | false | YES | |
| created_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |
| updated_at | timestamp with time zone | CURRENT_TIMESTAMP | YES | |

