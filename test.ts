// test.ts
async function test() {
  try {
    const r = await fetch('https://api.telegram.org');
    console.log(await r.text());
  } catch (e) {
    console.error(e);
  }
}

test();