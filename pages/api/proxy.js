// Remove export const runtime = 'edge' to avoid using the Edge Runtime

export default async function handler(req, res) {
  const targetUrl = 'https://gold888rtp.pics';

  // Fetch the content from the target URL
  const response = await fetch(targetUrl);

  // If the request was successful, return the response content
  if (response.ok) {
    const body = await response.text(); // or response.json() if JSON
    return res.status(200).send(body); // Return the content to the client
  } else {
    // Handle errors, if the target site fails to respond
    return res.status(500).json({ error: 'Failed to fetch content' });
  }
}
