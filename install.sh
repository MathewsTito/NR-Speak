#!/bin/sh 
NR_HOME=~/nodered/node-red-0.8.1
FE_NODES=$NR_HOME/nodes/mathewstito-nodes
mkdir -p $FE_NODES
cp speak.* $FE_NODES
chmod +x $FE_NODES/speak.sh
