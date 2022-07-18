-- Deploy oblog:initiliation to pg

BEGIN;

CREATE TABLE category (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "route" text NOT NULL,
    "label" text NOT NULL
);
CREATE TABLE post (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "slug" text NOT NULL,
    "title" text NOT NULL,
    "excerpt" text NOT NULL,
    "content" text NOT NULL,
    "category_id" int REFERENCES category ("id") 
);


CREATE DOMAIN good_label AS text
CHECK (
    VALUE ~ '^[A-Z]{1}[^\d ][a-z]{2,}$'
);

ALTER TABLE category
    ALTER COLUMN label TYPE good_label;

CREATE DOMAIN good_slug AS text
CHECK (
    VALUE ~ '^[^ A-Z].*$'
);

ALTER TABLE post
    ALTER COLUMN slug TYPE good_slug;

CREATE DOMAIN good_route AS text
CHECK (
    VALUE ~ '^[\/]{1}[a-z]*$'
);

ALTER TABLE category
    ALTER COLUMN route TYPE good_route; 


    
COMMIT;
