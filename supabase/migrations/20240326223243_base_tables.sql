create table "public"."packages" (
    "package_name" character varying not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by" uuid not null default auth.uid(),
    "scope" character varying not null
);


alter table "public"."packages" enable row level security;

create table "public"."scope_roles" (
    "user_id" uuid not null,
    "scope_name" character varying not null,
    "role_type" smallint not null
);


alter table "public"."scope_roles" enable row level security;

create table "public"."scopes" (
    "scope_name" character varying not null,
    "created_at" timestamp with time zone not null default now(),
    "created_by" uuid not null default auth.uid()
);


alter table "public"."scopes" enable row level security;

CREATE UNIQUE INDEX packages_pkey ON public.packages USING btree (package_name);

CREATE UNIQUE INDEX scope_roles_pkey ON public.scope_roles USING btree (user_id, scope_name);

CREATE UNIQUE INDEX scopes_pkey ON public.scopes USING btree (scope_name);

alter table "public"."packages" add constraint "packages_pkey" PRIMARY KEY using index "packages_pkey";

alter table "public"."scope_roles" add constraint "scope_roles_pkey" PRIMARY KEY using index "scope_roles_pkey";

alter table "public"."scopes" add constraint "scopes_pkey" PRIMARY KEY using index "scopes_pkey";

alter table "public"."packages" add constraint "public_packages_scope_fkey" FOREIGN KEY (scope) REFERENCES scopes(scope_name) not valid;

alter table "public"."packages" validate constraint "public_packages_scope_fkey";

alter table "public"."scope_roles" add constraint "public_scope_roles_scope_name_fkey" FOREIGN KEY (scope_name) REFERENCES scopes(scope_name) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."scope_roles" validate constraint "public_scope_roles_scope_name_fkey";

alter table "public"."scope_roles" add constraint "public_scope_roles_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."scope_roles" validate constraint "public_scope_roles_user_id_fkey";

grant delete on table "public"."packages" to "anon";

grant insert on table "public"."packages" to "anon";

grant references on table "public"."packages" to "anon";

grant select on table "public"."packages" to "anon";

grant trigger on table "public"."packages" to "anon";

grant truncate on table "public"."packages" to "anon";

grant update on table "public"."packages" to "anon";

grant delete on table "public"."packages" to "authenticated";

grant insert on table "public"."packages" to "authenticated";

grant references on table "public"."packages" to "authenticated";

grant select on table "public"."packages" to "authenticated";

grant trigger on table "public"."packages" to "authenticated";

grant truncate on table "public"."packages" to "authenticated";

grant update on table "public"."packages" to "authenticated";

grant delete on table "public"."packages" to "service_role";

grant insert on table "public"."packages" to "service_role";

grant references on table "public"."packages" to "service_role";

grant select on table "public"."packages" to "service_role";

grant trigger on table "public"."packages" to "service_role";

grant truncate on table "public"."packages" to "service_role";

grant update on table "public"."packages" to "service_role";

grant delete on table "public"."scope_roles" to "anon";

grant insert on table "public"."scope_roles" to "anon";

grant references on table "public"."scope_roles" to "anon";

grant select on table "public"."scope_roles" to "anon";

grant trigger on table "public"."scope_roles" to "anon";

grant truncate on table "public"."scope_roles" to "anon";

grant update on table "public"."scope_roles" to "anon";

grant delete on table "public"."scope_roles" to "authenticated";

grant insert on table "public"."scope_roles" to "authenticated";

grant references on table "public"."scope_roles" to "authenticated";

grant select on table "public"."scope_roles" to "authenticated";

grant trigger on table "public"."scope_roles" to "authenticated";

grant truncate on table "public"."scope_roles" to "authenticated";

grant update on table "public"."scope_roles" to "authenticated";

grant delete on table "public"."scope_roles" to "service_role";

grant insert on table "public"."scope_roles" to "service_role";

grant references on table "public"."scope_roles" to "service_role";

grant select on table "public"."scope_roles" to "service_role";

grant trigger on table "public"."scope_roles" to "service_role";

grant truncate on table "public"."scope_roles" to "service_role";

grant update on table "public"."scope_roles" to "service_role";

grant delete on table "public"."scopes" to "anon";

grant insert on table "public"."scopes" to "anon";

grant references on table "public"."scopes" to "anon";

grant select on table "public"."scopes" to "anon";

grant trigger on table "public"."scopes" to "anon";

grant truncate on table "public"."scopes" to "anon";

grant update on table "public"."scopes" to "anon";

grant delete on table "public"."scopes" to "authenticated";

grant insert on table "public"."scopes" to "authenticated";

grant references on table "public"."scopes" to "authenticated";

grant select on table "public"."scopes" to "authenticated";

grant trigger on table "public"."scopes" to "authenticated";

grant truncate on table "public"."scopes" to "authenticated";

grant update on table "public"."scopes" to "authenticated";

grant delete on table "public"."scopes" to "service_role";

grant insert on table "public"."scopes" to "service_role";

grant references on table "public"."scopes" to "service_role";

grant select on table "public"."scopes" to "service_role";

grant trigger on table "public"."scopes" to "service_role";

grant truncate on table "public"."scopes" to "service_role";

grant update on table "public"."scopes" to "service_role";


