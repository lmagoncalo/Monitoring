import os

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

real_time = {}


@app.route('/', methods=['GET'])
def start():
	return 'First endpoint.'


@app.route('/info', methods=['GET'])
def get_info():
	return {'info': real_time}


@app.route('/api', methods=['POST'])
def api():
	try:
		data = request.json
		ip = str(data['ip'])
		real_time[ip] = data

		print(real_time)
		return 'OK'
	except Exception as e:
		app.logger.error('%s', e)


if __name__ == '__main__':
	port = int(os.environ.get('PORT', 5000))
	app.run(host='0.0.0.0', port=port)
