import os

from flask import Flask

from .config import config


app = Flask(__name__, static_folder='build'
            , template_folder='build', static_url_path='')
app.config.from_object(config[os.environ.get('FLASK_CONFIG') or 'product'])

from .view import *