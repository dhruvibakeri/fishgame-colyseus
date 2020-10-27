## Self-Evaluation Form for Milestone 2

A fundamental guideline of Fundamentals I, II, and OOD is to design
methods and functions systematically, starting with a signature, a
clear purpose statement (possibly illustrated with examples), and
unit tests.

**NOTE**: We're linking to the following commit: [`44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c`](https://github.ccs.neu.edu/CS4500-F20/rosebud/commit/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c) which has the timestamp of `Thursday, 8th October, 11:54PM EST`. We have communicated this to Ben Greenman -- who has approved it. 

Under each of the following elements below, indicate below where your
TAs can find:

- the data description of tiles, including an interpretation: Line 9 to line 12 in `fish.js` have the Data Definition for Tiles: [`permalink`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L9). Line 26 to 28 in `fish.js` have the Interpretation for Tiles: [`permalink`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L26)

- the data description of boards, include an interpretation: Line 5 in `fish.js` has the Data Definition for Boards: [`permalink`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L5). Line 22 in `fish.js` has the Interpretation for Boards: [`permalink`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L22)

- the functionality for removing a tile:

  - purpose: Purpose statement for removing a tile can be found on line [`498`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L498)
  
  - signature: signature for removing a tile can be found on line [`497`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L497)
  
  - unit tests: tests for this function can be found on line [`52`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/tests.js#L52) 
  

- the functionality for reaching other tiles on the board:
  
  - purpose: Purpose statement for reaching other tiles from a given tile are on the following lines: 
  [`725`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L725)
  ,
  [`730`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L730)
  ,
  [`735`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L735)
  , 
  [`740`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L740)
  ,
  [`745`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L745)
  ,
  [`750`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L750)
  
  - signature: Signature for reaching other tiles from a given tile are on the following lines:
    [`724`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L724)
  ,
  [`729`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L729)
  ,
  [`734`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L734)
  , 
  [`739`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L739)
  ,
  [`744`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L744)
  ,
  [`749`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/fish.js#L749)
  
  - unit tests: Unit tests for all the functions above: [`408`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/tests.js#L408)
,
[`412`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/tests.js#L412)
,
[`416`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/tests.js#L416)
,
[`420`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/tests.js#L420)
,
[`424`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/tests.js#L424)
,
[`428`](https://github.ccs.neu.edu/CS4500-F20/rosebud/blob/44dbbcb7612a0d31fb8cc6743ea8580cd868eb1c/Fish/Common/tests.js#L428)

The ideal feedback is a GitHub perma-link to the range of lines in specific
file or a collection of files for each of the above bullet points.

  WARNING: all such links must point to your commit "091e33607838c90c63597808ab23afa6fdc97ff8".
  Any bad links will result in a zero score for this self-evaluation.
  Here is an example link:
    <https://github.ccs.neu.edu/CS4500-F20/rosebud/tree/091e33607838c90c63597808ab23afa6fdc97ff8/Fish>

A lesser alternative is to specify paths to files and, if files are
longer than a laptop screen, positions within files are appropriate
responses.

In either case you may wish to, beneath each snippet of code you
indicate, add a line or two of commentary that explains how you think
the specified code snippets answers the request.
