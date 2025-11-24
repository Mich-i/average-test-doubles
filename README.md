# average-test-doubles

Computes _mean_, _median_, and _mode_ of a series of a numbers from a text file (one number per line).

![UML Class Diagram of average-test-doubles](average-interface.svg)

This repository is used for exercising the implementation of test doubles. See [instructions](https://m450.frickelbude.ch/uebungen/test-doubles/) in German.

## Setup

Install [Deno](https://deno.com/) and, optionally, the [Deno Extension](https://open-vsx.org/vscode/item?itemName=denoland.vscode-deno) for Visual Studio Code.

Install the dependencies:

    deno install

## Execution

Run the tests:

    deno test

Run the demo program for different statistics and files

    deno run --allow-read demo.ts mean 1-to-10.txt
    deno run --allow-read demo.ts median 1-to-10.txt
    deno run --allow-read demo.ts mode 1-to-10.txt

    deno run --allow-read demo.ts mean 1-to-100.txt
    deno run --allow-read demo.ts median 1-to-100.txt
    deno run --allow-read demo.ts mode 1-to-100.txt
