import std/algorithm
import std/os
import std/sets
import std/sequtils
import std/strformat
import std/strutils
import std/asyncdispatch
import std/asyncfile

proc readFileLines(filename: string): Future[HashSet[string]] {.async.} =
  var file = openAsync(filename)
  let
    contents = await file.readAll
    lns = contents.split("\n")
  result = toHashSet(lns)
  result.excl ""

proc main(leftFilename: string, rightFilename: string) {.async.} =
  let
    leftLines = await leftFilename.readFileLines
    rightLines = await rightFilename.readFileLines
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
  waitFor main(leftFilename, rightFilename)
