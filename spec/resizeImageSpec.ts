import resizeImage from "../src/services/resizeImage";
import fs from "fs";
import path from "path";

describe("Image Processing Function", () => {

  it("resizes image with valid input", async () => {

    const output = path.resolve("assets/thumb/fjord_200_200.jpg");

    await resizeImage(
      "assets/images/fjord.jpg",
      output,
      200,200);

    expect(fs.existsSync(output)).toBeTrue();
  });

  it("throws error with invalid image name", async () => {

    const output = path.resolve("assets/thumb/test.jpg");

    await expectAsync(
      resizeImage(
        "assets/images/__nope__.jpg",
        output,
        200,200)
    ).toBeRejected();

  });

});