-- Revert oblog:initiliation from pg

BEGIN;


ALTER TABLE category
    ALTER COLUMN label TYPE text; 

ALTER TABLE category
    ALTER COLUMN route TYPE text; 

DROP DOMAIN good_route;

ALTER TABLE post
    ALTER COLUMN slug TYPE TEXT; 

DROP DOMAIN good_slug;


DROP DOMAIN good_label;

DROP TABLE category CASCADE ;

DROP TABLE post;

COMMIT;
