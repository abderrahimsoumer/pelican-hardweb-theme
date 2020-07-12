# colored-with-contactform
*Colored-with-contactform* is a theme for [pelican](https://docs.getpelican.com/en/stable/) that I used for my personal blog, I make it public so everyone can benefit from it. I used css3 preprocessor `Sass` to make it easy to customized,  You can change the colors and font and sizes easy.

[Live preview](http://hardweb.dev/blogs/index.html)

## Installation 
This theme is available at [pypi.org](https://pypi.org/project/colored-with-contactform/), so you can install it with: 

```
pip install colored-with-contactform
```

Then update the file `pelicanconf.py` in your project:

- Import the theme by adding the folling line in the begining of the file
```python
import colored_with_contactform
```
- Then change the Folowing variables:
```python 
THEME = colored_with_contactform.PATH

JINJA_ENVIRONMENT = colored_with_contactform.JINJA_ENVIRONMENT

JINJA_FILTERS =  colored_with_contactform.JINJA_FILTERS
```

- Add the plugin `i18n_subsites`:
```python
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['i18n_subsites'] 
```

## Extra variables

- **AUTHOR_EMAIL**: Display the author's email in the form
- **AUTHOR_PHONE**: Display the author's phone in the form
- **AUTHOR_IMG**: Display the author's image in the footer
- **CONTACT_FORM_ACTION**: the URL where to send the form data.
- **TWITTER_USERNAME**: To add the share button on twitter.
- **LINKDIN_USERNAME**: To add the share button on linkedIn.
- **FACEBOOK_APPID**: To add the share button on Facebook.


