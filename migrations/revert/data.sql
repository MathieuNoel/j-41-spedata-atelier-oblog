-- Revert oblog:data from pg

BEGIN;

TRUNCATE "category", "post" RESTART IDENTITY;

COMMIT;
