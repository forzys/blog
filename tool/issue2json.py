# coding=utf-8
import os
import json
import time
from argparse import ArgumentParser

def build_argparser():
    parser = ArgumentParser()
    parser.add_argument("-i",
                        "--input",
                        help="input file path",
                        required=True,
                        type=str)
    parser.add_argument("-o",
                        "--output",
                        help="output path",
                        required=False,
                        default='result.json',
                        type=str)
    return parser

def parse_md(file_path):
    titles = []
    starts = []
    ends = []
    groups = []
    types = []
    classNames = []
    contents = []
    nullvalue = lambda x: None if(len(x) == 0) else x
    with open(file_path, 'r') as fn:
        flines = fn.readlines()
        for line in flines[2:]:
            if(len(line.strip()) == 0):
                continue 
            strs = line.split('|')
            #temp = line.strip('\n').split(' ')[0]
            titles.append(strs[0].strip(' '))
            starts.append(strs[1].strip(' '))
            ends.append(nullvalue(strs[2].strip(' ')))
            groups.append(strs[3].strip(' '))
            types.append(strs[4].strip(' '))
            classNames.append(strs[5].strip(' '))
            contents.append(strs[6].strip(' ').strip('\n'))
    return titles, starts, ends, groups, types, classNames, contents




if __name__ == "__main__":
    args = build_argparser().parse_args()
    titles, starts, ends, groups, types, classNames, contents = parse_md(args.input)

    print(f'{titles} "\n" {starts} "\n" {ends} "\n" {groups} "\n" {types} "\n" {classNames} "\n" {contents}')
    hjson = []
    for i in range(len(titles)):
        item = {"id": i,
                "title": contents[i],
                "start": starts[i],
                "end": ends[i],
                "group": groups[i],
                "type": types[i],
                "className": classNames[i], 
                "content": titles[i]
                }
        hjson.append(item)
    print(hjson)
    with open(args.output, 'w') as f:
        json.dump(hjson, f)