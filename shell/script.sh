#!/bin/bash
STR="Hello"
NUM1=10
NUM2=20
if [ $NUM1 -eq $NUM2 ]; then
	echo 'Equal'
else
	echo 'Not equal'
fi
for f in $( ls /home/ ); do
	echo $f
done
