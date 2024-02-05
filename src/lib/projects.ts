import { z } from 'zod'

const projectSchema = z.object({
  name: z.string(),
  link: z.string().optional(),
  linkText: z.string().optional(),
  description: z.string(),
  repoLink: z.string(),
  tech: z.array(z.string()),
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
      name: 'godlp',
      repoLink: 'https://github.com/mcreekmore/godlp',
      link: 'https://creekmore.io/blog/godlp',
      linkText: 'Read blog post',
      description:
        'A convenient wrapper for my common uses of yt-dlp written in Go.',
      tech: ['GoLang'],
    },
    {
      name: 'creekmore.io',
      repoLink: 'https://github.com/mcreekmore/creekmore.io',
      link: 'https://creekmore.io',
      // linkText: 'See more',
      description:
        'Latest verison of my personal website and blog. Built with Astro.',
      tech: ['GoLang'],
    },
    {
      name: 'Arbiter',
      repoLink: 'https://github.com/mcreekmore/arbiter',
      // link: 'https://v1.creekmore.io/#/moves',
      // linkText: 'See more',
      description:
        'A flash-loan triangular arbitrage bot for Automated Market Makers like Uniswap and Pancakeswap.',
      tech: ['Solidity', 'GoLang', 'Typescript', 'Python'],
    },
    {
      name: 'Moves',
      repoLink: 'https://github.com/mcreekmore/moves',
      link: 'https://v1.creekmore.io/#/moves',
      linkText: 'See more',
      description: 'A cross-paltform Flutter app for local event tracking.',
      tech: ['Flutter', 'Typescript', 'MongoDB'],
    },
    {
      name: 'creekmore.io v1',
      repoLink: 'https://github.com/mcreekmore/app',
      link: 'https://v1.creekmore.io/',
      linkText: 'Visit',
      description:
        'Version 1 of my personal website. Built with the NEVM stack.',
      tech: ['Node', 'Express', 'Vue', 'MongoDB'],
    },
    {
      name: 'ammobroker',
      repoLink: 'https://github.com/mcreekmore/ammobroker',
      // link: "https://github.com/nexxeln/license-generator",
      description: 'Fork of streetmerchant for finding ammo instead of gpus.',
      tech: ['Typescript'],
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
