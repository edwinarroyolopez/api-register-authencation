
-- roles
create table roles
(
    uuid_rol    text not null
        constraint uuid_rol_pkey
            primary key,
    description       text,
    globalPerm     jsonb,
    privatePerm     jsonb,
    assignedPerm     jsonb,
    created_at  timestamp with time zone,
    updated_at  timestamp with time zone
);

-- users
create table users(
    uuid_user  text not null
    constraint uuid_rol_pkey primary key,
    username text,
    password text,
    name text,
    lastname text,
    email text,
    phone text,
    status text,
    uuid_rol text,
    created_at  timestamp with time zone,
    updated_at  timestamp with time zone
)
