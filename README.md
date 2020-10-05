# caesar-cipher-cli

## Parameters

- -a, --action: an action encode/decode
- -s, --shift: a shift
- -i, --input: an input filename path
- -o, --output: an output filename path

## Examples

```bash
:~$ node main.js -action encode -shift 3
```

```bash
:~$ node main.js -a decode -s 3 -i ./file1 -o ./file2
```

The path to the main.js must be specified.
```bash
:~$ node caesar-cipher-cli/main.js --action encode -s 1 -i ./file.txt -o ./file2.txt
```
