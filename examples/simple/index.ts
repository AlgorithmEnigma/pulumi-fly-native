import * as fly from "@pulumi/fly";

const random = new fly.Random("my-random", { length: 24 });

export const output = random.result;