import requests

from flask import jsonify, abort, request, render_template

from . import app


API_URLS = [
    # SITE
    '/api/site/info.json',  # 取网站信息
    '/api/site/stats.json',  # 取网站状态

    # NODE
    '/api/nodes/all.json',  # 取网站所有节点
    '/api/nodes/show.json',  # 取节点信息, 参数{id: 节点id, name: 节点名}

    # TOPIC
    '/api/topics/latest.json',  # 取最新主题
    '/api/topics/hot.json',  # 取最热主题
    '/api/topics/show.json',  # 取主题消息
    # 根据提供信息取主题， 参数{id:主题id，username: 根据用户名, node_id:节点id， node_name:节点名}(选其一)
    '/api/topics/show.json',
    '/api/replies/show.json',  # 取主题回复，参数{topic_id: 主题id(必选)，page, page_size}

    # MEMBERS
    '/api/members/show.json',  # 取用户信息，参数{username: 用户名(必选)}
]


# 防止与设定为'/<filename>'的静态文件url冲突，加上/api/前缀
@app.route('/api/<path:path>')
def query(path):
    if '/api/' + path not in API_URLS:
        abort(404)

    path = app.config.get(('PROXY_HOST_NAME')) + path + '?'
    path += '&'.join(name + '=' + value for
                     name, value in request.args.items())
    res = requests.get(path)
    if res.status_code == 404:
        abort(404)
    else:
        return jsonify(res.json())


@app.route('/')
def main():
    return render_template('index.html')
