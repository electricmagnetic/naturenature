# naturenature

Open source biodiversity database for the management of species at an individual level.

## Project principles

- An open source project using open source tools
- Minimising the amount of custom code necessary, relying on mature tools to handle authentication, APIs, object storage and data storage
- An 'event-based' approach to the management of individuals, permitting their status to be known at any given point in time
- Strong separation of 'transactional' and 'analytical' concerns
  - Focus on transactional data (e.g. post field-trip data entry, data from sensors)
  - Analytics to be handled elsewhere through simple integrations (e.g. via SQL, REST API etc)

## Getting started (front-end)

- Install packages with `pnpm install`
- Copy `.env.local.example` to `.env.local` and add the necessary variables
- Run a development server with `pnpm run dev`, and see [http://localhost:3000](http://localhost:3000) in your browser

## Getting started (back-end)

- The backend uses the open source platform [Supabase](https://supabase.com/), the configuration of which can be found in the `supabase/` directory
- You will need the Supabase CLI and an associated project, after which you can run the migrations to configure the database
- To update TypeScript types, run the following command from the project directory: `supabase gen types typescript --project-id <PROJECT_ID> --schema public > types/_supabase.ts`

## Contributing

This is an alpha-stage project, but contributions are nonetheless welcome. Please ensure that your pull request meets the following guidelines:

- **Documentation**
  - [GitHub Wiki](https://github.com/electricmagnetic/naturenature/wiki)
- **Issue tracking**
  - [GitHub Projects](https://github.com/electricmagnetic/naturenature/projects)
- **Project layout**
  - `app` routes (and components specific to those routes), as well as styles and global components necessary for the app router of Next.js
    - `app/(entities)` folders (pages/components) relating to the different entities (tables), and a metadata file containing information on each entity
    - `app/account` page/components relating to logging in (including redirecting to the link before login), as well as a simple button for clearing localStorage
    - `app/auth` auth callback, plus a route for logging out
    - `app/create` a single page for creating different entities
  - `components` reusable components, not specific to any one route
    - `components/dictionary` components/functions for interacting with the dictionary, a special table used across the database to map IDs to names
    - `components/forms` components/functions relating to forms and fields
    - `components/geospatial` components/functions for Leaflet-based maps
    - `components/layout` interactive components relating to page layout (header, footer, navbar etc)
    - `components/ui` static components (server/client friendly) to standardise UI elements
  - `public` static assets
  - `supabase` migrations and configuration necessary for the Supabase backend
  - `types` project-wide TypeScript types
    - `types/_supabase.ts` Automatically generated, _should not be edited manually_
    - `types/database.ts` Helpful extension to automatically generated types (e.g. DTOs)
    - `types/{record/event}Types.ts` Types that include related objects and/or json field definitions
- **Code style**
  - `prettier` to format TypeScript, e.g. `pnpm dlx prettier@latest --write app/`
  - `sqlfluff` to format SQL code e.g. `sqlfluff fix supabase/migrations/* --dialect postgres`
- **Conventions**
  - Module imports ordered from general to specialised: e.g. React -> Next.js -> Supabase -> custom general components -> custom specific components etc
  - Files are named with capital letters if they export a single default component

## Licence

NatureNature  
Copyright (C) 2023 Electric Magnetic Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
