import pathlib

try:
    from setuptools import setup, find_packages
except ImportError:
    from distutils.core import setup, find_packages

# The directory containing this file
base_dir = pathlib.Path(__file__).parent
# The text of the README file
README = (base_dir / "README.md").read_text()

setup(
    name='colored-with-contactform',
    version='1.0.2',
    author='Abderrahim soumer',
    author_email='contact@hardweb.dev',
    maintainer='Abderrahim soumer',
    maintainer_email='contact@hardweb.dev',
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Framework :: Pelican :: Themes',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3 :: Only',
    ],
    description='Colored theme with contact form',
    long_description=README,
    long_description_content_type='text/markdown',
    install_requires=['pelican'],
    license='MIT',
    packages=find_packages(),
    include_package_data=True,
    #test_suite='tests',
    #tests_require=['pelican'],
    url='https://github.com/abderrahimsoumer/pelican-hardweb-theme',
)