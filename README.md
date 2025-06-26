# Repwise

This repo contains a basic Express backend and an Expo React Native frontend.

## Backend (`/api`)

1. Install dependencies:
   ```bash
   cd api
   npm install
   ```
2. Generate Prisma client:
   ```bash
   npx prisma generate
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```

Environment variables can be configured by copying `.env.example` to `.env`.

The backend expects a PostgreSQL database. Example configuration:

```env
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/repwise_dev"
```

Run database migrations after installing dependencies:

```bash
npx prisma migrate dev --name init
```

This will create the local database schema and generate the Prisma client.

## Database Schema

The main entities are:

- **User** – owns workout sessions and a single suggested workout state.
- **WorkoutType** – labels for different training styles.
- **WorkoutSession** – a user's session for a given workout type.
- **Exercise** – individual movements grouped by muscle.
- **ExerciseVariation** – links a base exercise to a variation.
- **ExerciseLog** – records sets performed in a session.
- **SuggestedWorkoutState** – tracks when a muscle group was last trained.

Relationships: User → WorkoutSession (1:N), User → ExerciseLog (1:N),
WorkoutSession → WorkoutType (N:1), Exercise ↔ ExerciseVariation (self relations),
and each ExerciseLog references a User, WorkoutSession and Exercise.

## Frontend (`/app/swipe-trainr`)

1. Navigate to the app directory:
   ```bash
   cd app/swipe-trainr
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npx expo start
   ```
