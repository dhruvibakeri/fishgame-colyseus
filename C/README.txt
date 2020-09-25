C

https://www.ccs.neu.edu/home/matthias/4500-f20/C.html

Purpose
=======

to explore the JSON libraries of the chosen programming language; to deliver
software as specified

Software
========

Consumes a sequence of well-formed JSON values rfom STDIN and delivers JSON
to STDOUT.

- the first one is a JSON object with two fields: count and seq. The value
of the first field is the number of JSON values read; the value of the second
field is a JSON list of all JSON values read in order.

- the second one is a JSON list whose first element is the count of JSON
values read and the remainder is the sequence of JSON values read in reverse
order.
