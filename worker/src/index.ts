import { createClient } from 'redis';

const client = createClient();

async function main() {
  await client.connect();
  while (1) {
    const h = await client.brPop('submissions', 0);

    console.log(h);
  }
}

main();
