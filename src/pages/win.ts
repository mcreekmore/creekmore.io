import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const githubRawUrl = 'https://raw.githubusercontent.com/mcreekmore/dotfiles/main/windows/remote_setup.ps1';

  const response = await fetch(githubRawUrl);
  const script = await response.text();

  return new Response(script, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache',
    },
  });
};
