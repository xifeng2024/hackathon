import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    organizer: z.string(),
    location: z.object({
      city: z.string(),
      country: z.string(),
      online: z.boolean(),
    }),
    url: z.string().url(),
    tags: z.array(z.string()),
    language: z.string(),
    image: z.string().optional(),
    featured: z.boolean(),
    eventType: z.array(z.enum(['AI', 'Big Data', 'Cloud', 'Fintech', 'Gaming', 'IoT', 'Web3.0'])),
    region: z.enum(['Americas', 'Asia', 'Europe', 'Other']),
    category: z.enum(['Conference', 'Hackathon', 'Workshop', 'Meetup', 'Summit', 'Bootcamp', 'Expo']),
  }),
});

export const collections = {
  events,
};