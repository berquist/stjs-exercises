import std/algorithm
import std/os
import std/sets
import std/sequtils
import std/strformat
import std/strutils

proc readFileLines(filename: string): HashSet[string] =
  let
    contents = readFile(filename)
    lns = contents.split("\n")
  result = toHashSet(lns)
  result.excl ""

proc main(leftFilename: string, rightFilename: string) =
  let
    leftLines = leftFilename.readFileLines
    rightLines = rightFilename.readFileLines
    allLines = (leftLines + rightLines).toSeq.sorted
    leftOnly = leftLines - rightLines
    rightOnly = rightLines - leftLines
    commonLines = leftLines * rightLines
  for line in allLines:
    if line in leftOnly:
      echo fmt"1 {line}"
    elif line in rightOnly:
      echo fmt"2 {line}"
    elif line in commonLines:
      echo fmt"* {line}"

when isMainModule:
  let
    leftFilename = paramStr(1)
    rightFilename = paramStr(2)
  main(leftFilename, rightFilename)
