# jupyter-notebook-extensions

## Default Altair Cell

A simple Jupyter Notebook extension that adds a button to enter and run the configuration needed to use Altair.

## Notes

- Install: `pip install jupyter_contrib_nbextensions && jupyter contrib nbextensions install` (more info [here](https://github.com/ipython-contrib/jupyter_contrib_nbextensions)).
- Install and enable a _new_ Jupyter Notebook extension (more info [here](https://jupyter-notebook.readthedocs.io/en/stable/extending/frontend_extensions.html)):
  - `jupyter nbextension install /Users/joao.palmeiro/Documents/GitHub/jupyter-notebook-extensions/default-altair-cell --sys-prefix`.
  - `jupyter nbextension enable default-altair-cell/default-altair-cell --sys-prefix`.
- Check the _Location_ of a package: `pip show jupyter_contrib_nbextensions`.
- Check the (Jupyter) config directories: `jupyter --paths`.

## References

- Koehrsen, W. (2018, December 8). How to Write a Jupyter Notebook Extension. _Towards Data Science_. https://towardsdatascience.com/how-to-write-a-jupyter-notebook-extension-a63f9578a38c
