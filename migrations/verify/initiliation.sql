-- Verify oblog:initiliation on pg

BEGIN;

SELECT
    id,
    category,
    slug,
    title,
    excerpt,
    content
FROM
    post
WHERE
    false
;

SELECT
    id,
    route,
    label
FROM
    category
WHERE
    false
;

ROLLBACK;
