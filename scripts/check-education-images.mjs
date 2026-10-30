import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const names = ["urine-rna-research", "breast-screening-follow-up", "lymphoma-treatment-research", "chemotherapy-vaccine-timing"];
for (const name of names) {
  for (const [extension, format, width, height] of [["webp", "webp", 1600, 900], ["jpg", "jpeg", 1200, 675]]) {
    const file = fileURLToPath(new URL(`../public/images/education/${name}.${extension}`, import.meta.url));
    const metadata = await sharp(file).metadata();
    assert.equal(metadata.format, format);
    assert.equal(metadata.width, width);
    assert.equal(metadata.height, height);
    assert.ok(!metadata.exif && !metadata.xmp && !metadata.iptc, "No embedded location or camera metadata");
    assert.ok((await stat(file)).size < 200000, "Compressed asset budget");
  }
}
console.log(`Education image checks passed: ${names.length} responsive covers and ${names.length} social images, correct dimensions, under 200 KB each, no EXIF/XMP/IPTC.`);
