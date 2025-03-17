import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const githubRawUrl = 'https://raw.githubusercontent.com/mcreekmore/dotfiles/main/windows/remote_setup.ps1';

  const response = await fetch(githubRawUrl, {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache'
    }
  });

  const script = await response.text();

  return new Response(script, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'inline',
      'Cache-Control': 'no-cache, max-age=0',
    },
  });
};
