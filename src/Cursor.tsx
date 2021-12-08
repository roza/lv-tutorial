import * as React from "react";
import {useMemo} from "react";

import {Utils} from "liqvid";
const {during} = Utils.authoring;

import Cursor from "rp-cursor";

import Link from "@lib/Link";

import {MEDIA_URL} from "@env/media-url";
import {CursorPrompt} from "@env/prompts";

export default function CursorSlide() {
  return (
    <section id="sec-cursor" {...during("cursor/")}>
      <p>The <Link href="https://www.npmjs.com/package/rp-cursor">rp-cursor</Link> package lets you record mouse movements, in case you want to point to something on the screen.</p>

      <Cursor src={`${MEDIA_URL}/img/cursor.png`} start={"cursor/"} end={"paint/"} replay={window.recordings.cursor}/>
      <CursorPrompt/>
    </section>
  );
}