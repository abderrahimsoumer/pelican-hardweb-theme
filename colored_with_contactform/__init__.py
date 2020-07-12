# __init__.py
from pathlib import Path

# Version of the colored-with-contactform package
__version__ = "1.0.2"


PATH = str(Path(__file__).parent)
"""The path to the Colored-with-contactform theme directory."""
JINJA_ENVIRONMENT = {
  'extensions': ['jinja2.ext.i18n']
}

## Filters
languages_lookup = {
             'en': 'English',
             'fr': 'Francais',
             'ar': 'العربية',
             }
def lookup_lang_name(lang_code):
    return languages_lookup[lang_code]
def my_ordered_items(ordered_dict):
    items = list(ordered_dict.items())
    # swap first and last using tuple unpacking
    items[0], items[-1] = items[-1], items[0]
    return items

JINJA_FILTERS = {
    'lookup_lang_name': lookup_lang_name,
    'my_ordered_items': my_ordered_items,
}

