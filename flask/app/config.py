import os

import dotenv

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
ENV_PATH = os.path.join(BASE_DIR, ".env")


class BasicConfig:
    SECRET_KEY = os.environ.get('FLASK_SECRET_KEY') or 'SECRET KEY'
    PROXY_HOST_NAME = os.environ.get(
        'PROXY_HOST_NAME') or 'http://www.v2ex.com/api/'
    JSON_AS_ASCII = False


class DevConfig(BasicConfig):
    FLASK_ENV = "development"
    DEBUG = True


class TestConfig(BasicConfig):
    DEBUG = True
    TEST = True


class ProductConfig(BasicConfig):
    pass


config = {
    'dev': DevConfig,
    'test': TestConfig,
    'product': ProductConfig,
}
