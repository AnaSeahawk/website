# Access Boundaries

This file defines how website metadata should be read before public publishing
or paid-access work.

Frontmatter is routing metadata. It is not access control.

Actual privacy depends on the GitHub repository, the deployed site, and any
member platform used later.

## Visibility

`public`

- Safe candidate for the open website after review.
- Still needs boundary language if health-adjacent, intimate, or operational.

`community`

- Held material that may belong in a member/community container, a guided
  archive path, or a private discussion context.
- Not automatically safe for the open website.
- Not automatically safe for paid access if it contains third-party,
  operational, intimate, or health-context detail.

`private`

- Source material that needs privacy, consent, or relationship before it can be
  read.
- Full private records belong in `Components/the-vessel/`.
- The public website repo may hold only redacted stubs for chronology or
  generated archive continuity.

## Status

Canonical publishing statuses:

- `draft`
- `review`
- `approved`
- `published`

Legacy/local statuses may still appear while the archive is being cleaned:

- `reviewed`
- `active`
- `redirected`

Do not promote status values as part of cleanup. Promotion remains Ana's
publishing decision.

## Paid Access Rule

Paid access is not a license to expose private source records.

Before anything becomes member-facing, confirm:

- the file's real access boundary, not only its frontmatter;
- whether third-party consent covers member access;
- whether health-adjacent language implies a promise or outcome;
- whether operational detail belongs in the private Vessel instead;
- whether a public/member summary should replace a source record.

## Community Story Rule

Third-party community records live in:

`Components/the-vessel/30-community-private/`

The public website may preserve a redacted stub in:

`Components/website/The-Vessel/community/`

The stub may include date, broad topic, thread placement, and a private source
pointer. It should not include names, direct quotes, health context, detailed
practice notes, or interpretation unless separately re-cleared.
