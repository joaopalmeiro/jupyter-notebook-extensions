define(["base/js/namespace", "base/js/events"], function (Jupyter) {
  var addDefaultAltairCell = function () {
    Jupyter.notebook.insert_cell_above("code").set_text(`%load_ext autoreload
%autoreload 2

import pandas as pd
import altair as alt`);
    Jupyter.notebook.select_prev();
    Jupyter.notebook.execute_cell_and_select_below();
    Jupyter.notebook.insert_cell_above("code", 1)
      .set_text(`COLORS = {"white": "#FFFFFF", "light_gray": "#EBEBEB", "black": "#44475A"}
LOCALE = {"decimal": ".", "thousands": ",", "grouping": [3], "currency": ["", "€"]}
    
    
def lcontrast_theme_tooltip():
    from IPython.core.display import HTML
    
    return display(
        HTML(
            f"""
            <style>
                #vg-tooltip-element.vg-tooltip.lcontrast-theme {{
                    color: {COLORS["black"]};
                    border: 1px solid {COLORS["light_gray"]};
                    font-family: Roboto;
                    font-size: 11px;
                }}
    
                #vg-tooltip-element.vg-tooltip.lcontrast-theme td.key {{
                    color: {COLORS["black"]};
                    font-weight: bold;
                }}
            </style>
            """
        )
    )
    
    
def lcontrast_theme():
    font = "Roboto"
    
    return {
        "config": {
            "title": {"font": font, "color": COLORS["black"]},
            "axisX": {
                "labelFont": font,
                "titleFont": font,
                "gridColor": COLORS["light_gray"],
                "labelColor": COLORS["black"],
                "tickColor": COLORS["black"],
                "titleColor": COLORS["black"],
                "domainColor": COLORS["black"],
                "labelAngle": 0,
            },
            "axisY": {
                "labelFont": font,
                "titleFont": font,
                "gridColor": COLORS["light_gray"],
                "labelColor": COLORS["black"],
                "tickColor": COLORS["black"],
                "titleColor": COLORS["black"],
                "domainColor": COLORS["black"],
            },
            "header": {
                "labelFont": font,
                "titleFont": font,
                "labelColor": COLORS["black"],
                "titleColor": COLORS["black"],
            },
            "legend": {
                "labelFont": font,
                "titleFont": font,
                "labelColor": COLORS["black"],
                "titleColor": COLORS["black"],
            },
            "text": {"color": COLORS["black"]},
            "rule": {"color": COLORS["black"]},
            "background": COLORS["white"],
            "view": {"fill": COLORS["white"]},
        }
    }
    
    
def set_alt_tooltip_theme(tooltip_theme_name):
    if tooltip_theme_name in ["light", "dark"]:
        return tooltip_theme_name
    else:
        lcontrast_theme_tooltip()
        return tooltip_theme_name
    
    
THEMES = {"lcontrast": lcontrast_theme}
    
    
def set_alt_aesthetic(theme_name="lcontrast", tooltip_theme_name="lcontrast"):
    tooltip_theme = set_alt_tooltip_theme(tooltip_theme_name)
    
    alt.renderers.enable(
        "default",
        embed_options={
            "actions": {
                "export": True,
                "source": False,
                "compiled": False,
                "editor": True,
            },
            "scaleFactor": 5,
            "i18n": {"PNG_ACTION": "Save as PNG", "SVG_ACTION": "Save as SVG"},
            "tooltip": {"theme": tooltip_theme},
            "renderer": "svg",
            "formatLocale": LOCALE,
        },
    )
    
    alt.themes.register(theme_name, THEMES.get(theme_name))
    alt.themes.enable(theme_name)
    
    
set_alt_aesthetic()`);
    Jupyter.notebook.select_prev();
    Jupyter.notebook.execute_cell_and_select_below();
  };
  var defaultAltairCellButton = function () {
    Jupyter.toolbar.add_buttons_group([
      Jupyter.keyboard_manager.actions.register(
        {
          help: "Add Default Altair Cell",
          icon: "fa-header",
          handler: addDefaultAltairCell,
        },
        "add-default-altair-cell",
        "Default Altair Cell"
      ),
    ]);
  };
  function load_ipython_extension() {
    defaultAltairCellButton();
  }
  return {
    load_ipython_extension: load_ipython_extension,
  };
});
