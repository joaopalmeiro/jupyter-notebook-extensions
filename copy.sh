#!/bin/bash

# sh copy.sh

rm -rf /opt/anaconda3/lib/python3.7/site-packages/jupyter_contrib_nbextensions/nbextensions/default-altair-cell \
&& cp -R default-altair-cell /opt/anaconda3/lib/python3.7/site-packages/jupyter_contrib_nbextensions/nbextensions/default-altair-cell \
&& jupyter contrib nbextensions install
