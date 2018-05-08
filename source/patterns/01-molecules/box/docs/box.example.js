import React from 'react';
import { Intro } from 'apparena-patterns-react';

export default function BoxExample() {
  return (
    <div>
      <Intro
        imgSrc="https://aa-fonts.s3.amazonaws.com/app-arena/atoms-l.svg"
        headline="Default Box"
        text="This is my Intro Text"
      />

      <hr/>

      <Intro
        imgSrc="https://aa-fonts.s3.amazonaws.com/app-arena/atoms-l.svg"
        headline="Linked Box"
        text="This is my Intro Text"
        href="https://www.app-arena.com/"
        btnText="Goto App-Arena Website"
      />
    </div>
  );
}
