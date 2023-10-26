import isUrl from "is-url";
// import { validateUrl } from "../utils/utils.js";
import request from "supertest";
import "dotenv/config";

describe(`URL Shortener Tests`, function () {
  test(`Unit test on is-url library`, async () => {
    const firstCheck = isUrl("https://www.freecodecamp.org/"); // true
    const secondCheck = isUrl("mailto://mail@freecodecamp.org"); // true
    const thirdCheck = isUrl("freeCodeCamp"); // false

    expect(firstCheck).toBeTruthy();
    expect(secondCheck).toBeTruthy();
    expect(thirdCheck).toBeFalsy();
  });

  test(`Functional test on URL Shortener endpoint`, async () => {
    const response = await request(process.env.BASE).post("/api/short").send({
      origUrl: "https://www.freecodecamp.org/news/search/?query=nodejs",
    });
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });

  // test(`Unit test on validateUrl`, async () => {
  // const firstCheck = validateUrl("https://www.freecodecamp.org/"); // true
  // const secondCheck = validateUrl("mailto://mail@freecodecamp.org"); // true
  // const thirdCheck = validateUrl("freeCodeCamp"); // false
  // const fourthCheck = validateUrl(
  //   `https://www.freecodecamp.org/news/search/?query=<script>alert('xss');</script>`
  // ); // false
  // const fifthCheck = validateUrl(
  //   `https://www.freecodecamp.org/news/search/?query=<noembed><img title=</noembed><img src onerror=alert(1)>></noembed>`
  // ); // false
  // // console.log(fourthCheck);
  // expect(firstCheck).toBeTruthy();
  // expect(secondCheck).toBeTruthy();
  // expect(thirdCheck).toBeFalsy();
  // expect(fourthCheck).toBeFalsy();
  // expect(fifthCheck).toBeFalsy();
  // });
});
