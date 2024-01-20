import { z } from 'zod'

const projectSchema = z.object({
  name: z.string(),
  link: z.string().optional(),
  linkText: z.string().optional(),
  description: z.string(),
  repoLink: z.string(),
})

export type Project = z.infer<typeof projectSchema>

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getProjects(): Promise<Project[]> {
  return [
    {
      name: 'Moves',
      repoLink: 'https://github.com/mcreekmore/moves',
      link: 'https://v1.creekmore.io/#/moves',
      linkText: 'See more',
      description: 'A cross-paltform Flutter app for local event tracking',
    },
    {
      name: 'creekmore.io v1',
      repoLink: 'https://github.com/mcreekmore/app',
      link: 'https://v1.creekmore.io/',
      linkText: 'Visit',
      description:
        'Version 1 of my personal website. Built with the NEVM stack',
    },
    {
      name: 'ammobroker',
      repoLink: 'https://github.com/mcreekmore/ammobroker',
      // link: "https://github.com/nexxeln/license-generator",
      description: 'Fork of streetmerchant for finding ammo instead of gpus',
    },
    // {
    //   repo: "spotify-voice-control",
    //   link: "https://github.com/nexxeln/spotify-voice-control",
    //   description: "Voice control for Spotify through the terminal",
    // },
    // {
    //   repo: "hackernews",
    //   link: "https://github.com/nexxeln/hackernews",
    //   description: "Hacker News clone made with SolidStart and tRPC",
    // },
    // {
    //   repo: "dots",
    //   link: "https://github.com/nexxeln/dots",
    //   description: "My dotfiles for MacOS",
    // },
  ]
}
