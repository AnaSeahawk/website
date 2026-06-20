---
title: Living Archive Entry Schema
type: reference
visibility: community
status: draft
claim_tier: orientation
---

# Living Archive Entry Schema

This schema supports one relational archive model across the existing rooms.
It does not replace Sovereign Biophysics, The Living Record, or the private
Vessel. It gives entries enough metadata to appear in generated views.

## Required For The Pilot

```yaml
archive_entry: true
title:
date:
type:
visibility:
status:
claim_tier:
summary:
```

Only files with `archive_entry: true` are included in generated archive views.

## Relational Fields

```yaml
phase:
significance:
threads:
inquiries:
entry_points:
people:
source_layer:
source_record:
```

## Field Notes

- `phase` names the major era of the work, such as `distillation`,
  `integration`, `receiving-field`, or `full-cycle`.
- `significance` names how strongly the entry functions in the living map:
  `minor`, `major`, or `threshold`.
- `threads` are living cross-time lines. Use the controlled list in
  [THREADS.md](THREADS.md) and keep each entry to one to three threads when
  possible.
- `inquiries` preserve questions the entry belongs to.
- `entry_points` name doors a reader might enter through.
- `people` should be used only where consent and privacy allow.
- `source_layer` records where the entry lives, such as `public-website`,
  `private-vessel`, `external-source`, or `report`.
- `source_record` can point to a protected source record when a public or
  community-facing entry is only a summary or stub.
  For private records, this should be a repository path for maintainers, not a
  public link.

## Current Pilot Views

Generated views live in this folder:

- `README.md` - chronological stream
- `by-thread.md` - entries grouped by thread
- `THREADS.md` - controlled thread vocabulary

Rebuild them with:

```sh
Components/website/tools/build_archive_views
```

The pilot should stay small until the generated views feel useful in practice.
