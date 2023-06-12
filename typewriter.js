const typewriter = function(sentence) {
  let timer = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 50;
  }

  setTimeout(() => {
    console.log("\n");
  }, timer);
};

const sentence = "hello there from lighthouse labs";
typewriter(sentence);

/*
const test = "abcdefghijklmnopqrstuvwxyz"
typewrite(test);
*/