# naturenature

Open source biodiversity database for the management of species at an individual level.

## Project principles

- An open source project using open source tools
- Minimising the amount of custom code necessary, relying on mature tools to handle authentication, APIs, object storage and data storage
- An 'event-based' approach to the management of individuals, permitting their status to be known at any given point in time

## Getting started (front-end)

- Install packages with `pnpm install`
- Copy `.env.local.example` to `.env.local` and add the necessary variables
- Run a development server with `pnpm run dev`, and see [http://localhost:3000](http://localhost:3000) in your browser

## Getting started (back-end)

- The backend uses the open source platform [Supabase](https://supabase.com/), the configuration of which can be found in the `supabase/` directory
- You will need the Supabase CLI and an associated project, after which you can run the migrations to configure the database
- To update TypeScript types, run the following command from the project directory: `supabase gen types typescript --project-id <PROJECT_ID> --schema public > types/supabase.ts`

## Contributing

This is an alpha-stage project, but contributions are nonetheless welcome. Please ensure that your pull request meets the following guidelines:

- Code style
  - `prettier` is used to format TypeScript, e.g. `pnpm dlx prettier@latest --write app/`
  - `sqlfluff` is used to format SQL code e.g. `sqlfluff fix supabase/migrations/* --dialect postgres`
- Conventions
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
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
