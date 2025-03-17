import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const githubRawUrl = 'https://raw.githubusercontent.com/mcreekmore/dotfiles/main/scripts/executable_setup.sh';

  const response = await fetch(githubRawUrl);
  const script = await response.text();

  return new Response(script, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'inline',
      'Cache-Control': 'no-cache',
    },
  });
};